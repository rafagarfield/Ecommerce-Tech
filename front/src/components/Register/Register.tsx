
"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { validateRegisterForm } from '@/helpers/formValidation'
import { RegisterErrorProps } from '@/types'
import { register } from '@/helpers/auth.helper'
import { useRouter } from 'next/navigation'

const Register = () => {
    const router = useRouter()
    const [dataUser,setUserData]= useState(
        {
            email:'',
            password:'',
            name:'',
            address:'',
            phone:''
        }
    )
    const [errorUser,setErrorUser]= useState<RegisterErrorProps>(
        {
            email:'',
            password:'',
            name:'',
            address:'',
            phone:''
        }
    )
    const handleChange =(e:React.ChangeEvent<HTMLInputElement>) => { 
        setUserData({
           ...dataUser,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit =async(e:React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault()
        try {
             await register(dataUser)
            
            //redirigir al usuario
            alert("Registro Exitoso")
            router.push('/login')
            //informar el resultado de la operacion 
        } catch (error:any) {
            throw new Error(error)
            
        }
        
    }
    
    useEffect(() => {
        const error= validateRegisterForm(dataUser)
        setErrorUser(error)

    },[dataUser])

    console.log(dataUser)
  return (
    <div className='flex flex-col md:flex-row w-full h-screen'>
            <div className='flex justify-center items-center w-full md:w-1/2 p-4'>
                <div className='flex flex-col gap-5 px-4 md:px-16 justify-center items-center'>
                    <div className='text-black flex flex-col justify-center items-center gap-2'>
                        <h1 className='text-4xl font-bold'>Registrate</h1>
                        <p className='text-base'>No tienes una cuenta?</p>
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-7 py-2'>
                        <div>
                        <input
                            className='p-3 border rounded-md w-[300px]'
                            id='email-address'
                            type='email'
                            name='email'
                            value={dataUser.email}
                            required
                            onChange={handleChange}
                            placeholder='Correo'
                        />
                        {errorUser.email && <p className='text-red-500 font-extralight'>{errorUser.email}</p>}
                        </div>
                       
                       <div>
                       <input
                            className='p-3 border rounded-md w-[300px]'
                            id='password'
                            type='password'
                            name='password'
                            value={dataUser.password}
                            required
                            onChange={handleChange}
                            placeholder='Contraseña'
                        />
                        {errorUser.password && <p className='text-red-500 font-extralight'>{errorUser.password}</p>}
                       </div>
                        
                        <div>
                        <input
                            className='p-3 border rounded-md w-[300px]'
                            id='name'
                            type='text'
                            name='name'
                            value={dataUser.name}
                            required
                            onChange={handleChange}
                            placeholder='Nombre completo'
                        />
                        {errorUser.name && <p className='text-red-500 font-extralight'>{errorUser.name}</p>}
                        </div>
                        
                        <div>
                            <input
                                className='p-3 border rounded-md w-[300px]'
                                id='address'
                                type='text'
                                name='address'
                                value={dataUser.address}
                                required
                                onChange={handleChange}
                                placeholder='Direccion'
                            />
                            {errorUser.address && <p className='text-red-500 font-extralight'>{errorUser.address}</p>}
                        </div>
                       
                        <div>
                        <input
                            className='p-3 border rounded-md w-[300px]'
                            id='phone'
                            type='number'
                            name='phone'
                            value={dataUser.phone}
                            required
                            onChange={handleChange}
                            placeholder='Numero de telefono'
                        />
                        {errorUser.phone && <p className='text-red-500 font-extralight'>{errorUser.phone}</p>}
                        </div>
                       
                    <button type='submit' className='bg-[#F7AE50] border rounded-md px-6 py-3 w-3/4'>Registrar</button>
                    </form>
                    
                    <div className='flex flex-row gap-4'>
                        <p>Tengo una cuenta!</p>
                         <Link href="/login"><span className='text-[#F7AE50] font-semibold'>Inicia Sesión</span></Link>
                    </div>
                </div>
            </div>
            <div className='hidden md:block w-full md:w-1/2 h-full'>
                <img className='w-full h-full object-cover' src="/ILogin/register.png" alt="Imagen de login" />
            </div>
        </div>
  )
}

export default Register
