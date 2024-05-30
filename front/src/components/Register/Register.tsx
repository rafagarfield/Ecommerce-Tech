
"use client"
import React, { useState } from 'react'

const Register = () => {
    const [dataUser,setUserData]= useState(
        {
            email:'',
            password:'',
            name:'',
            address:'',
            phone:''
        }
    )
    const [errorUser,setErrorUser]= useState()
    const handleChange =() => { }
    const handleSubmit =() => { }
    

  return (
    <div className='flex flex-col md:flex-row w-full h-screen'>
            <div className='flex justify-center items-center w-full md:w-1/2 p-4'>
                <div className='flex flex-col gap-5 px-4 md:px-16 justify-center items-center'>
                    <div className='text-black flex flex-col justify-center items-center gap-2'>
                        <h1 className='text-4xl font-bold'>Registrate</h1>
                        <p className='text-base'>No tienes una cuenta?</p>
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-7 py-2'>
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

                        
                    </form>
                    <button type='submit' className='bg-[#F7AE50] border rounded-md px-6 py-3 w-3/4'>Registrar</button>
                    
                </div>
            </div>
            <div className='hidden md:block w-full md:w-1/2 h-full'>
                <img className='w-full h-full object-cover' src="/ILogin/register.png" alt="Imagen de login" />
            </div>
        </div>
  )
}

export default Register
