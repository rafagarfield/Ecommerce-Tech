
// "use client"
// import React from 'react'
// import { useState,useEffect } from 'react'

// const Login = () => {
//     const [dataUser,setDataUser]= useState({
//         email:"",
//         password:""
//     });
//     const [errorUser,setErrorUser]= useState();

//     const handleChange = () => {
       
//     }

//     const handleSubmit = () => {
        
//     }

//   return (
//     <div className='flex  flex-row w-full  h-lvh'>
//         <div className='flex justify-center items-center  w-1/2'>
//             <div className='flex flex-col gap-10 px-16 justify-center items-center ' >
//                 <div className='text-black flex flex-col justify-center items-center gap-2'>
//                     <h1 className='text-4xl font-bold'>Inicia Sesión</h1>
//                     <p className='text-base'>Bienvenido</p>
//                 </div>
                
//                 <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-10 py-[2px] '>
                    
//                         <input className='p-3 border rounded-md w-[300px]'
//                             id='email-adress' 
//                             type='email'
//                             name='email'
//                             value={dataUser.email}
//                             required
//                             onChange={handleChange}
//                             placeholder='Correo'
//                         />
                   

//                     <div>
//                     <input className='p-3 border rounded-md w-[300px]'
//                             id='password' 
//                             type='password'
//                             name='password'
//                             value={dataUser.password}
//                             required
//                             onChange={handleChange}
//                             placeholder='Contraseña'
//                         />
//                     </div>
                    

//                 </form>
        
//                 <button  type='submit' className='bg-[#F7AE50] border rounded-md px-[30px] py-[15px] w-3/4'>Inicia Sesión</button>
//                 <div className='flex flex-row gap-4'>
//                     <p>No tienes cuenta?</p>
//                     <span  className='text-[#F7AE50] font-semibold'>Registrate</span>
//                 </div>
//             </div>

//         </div>

//         <div>
//             <img className='' src="/ILogin/login.png" alt=" imagen de login" />
//         </div>
      
//     </div>
//   )
// }

// export default Login



"use client"
import { validateLoginForm } from '@/helpers/formValidation';
import { LoginErrorProps } from '@/types';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/helpers/auth.helper';

const Login = () => {
    const router=useRouter()
    const [dataUser, setDataUser] = useState({
        email: "",
        password: ""
    });
    const [errorUser, setErrorUser] = useState<LoginErrorProps>(
        {
            email: "",
            password: ""
        }
    );
    const [isTouched, setIsTouched] = useState(false);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setDataUser(
            {
               ...dataUser,
                [e.target.name]: e.target.value
            }
        )

    }
    console.log(dataUser)


    // const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     console.log("submit exitoso")
    //     alert("inicio de sesion exitoso")
    //     // Manejar el envío del formulario
    // }

    const handleSubmit =async(e:React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault()
        try {
            const response= await login(dataUser)
            console.log(response)
            const {token,user}=response;
            localStorage.setItem('userSession', JSON.stringify({token:token , userData: user}))
            //redirigir al usuario
            alert("login Exitoso")
            router.push('/')
            //informar el resultado de la operacion 
        } catch (error:any) {
            throw new Error(error)
            
        }
        
    }






    // useEffect(() => {
    //     const errors=validateLoginForm(dataUser); 
    //     setErrorUser(errors)
    // },[dataUser])

    useEffect(() => {
        if (isTouched) { // ⬅️ Solo validar si el formulario ha sido tocado
            const errors = validateLoginForm(dataUser);
            setErrorUser(errors);
        }
    }, [dataUser, isTouched]); // ⬅️ Añadir isTouched como dependencia

    const handleBlur = () => {
        setIsTouched(true); // ⬅️ Marcar el formulario como tocado en el primer blur
    };



    return (
        <div className='flex flex-col md:flex-row w-full h-screen'>
            <div className='flex justify-center items-center w-full md:w-1/2 p-4'>
                <div className='flex flex-col gap-10 px-4 md:px-16 justify-center items-center'>
                    <div className='text-black flex flex-col justify-center items-center gap-2'>
                        <h1 className='text-4xl font-bold'>Inicia Sesión</h1>
                        <p className='text-base'>Bienvenido</p>
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-10 py-2'>
                        <div>
                        <input
                            className='p-3 border rounded-md w-[300px]'
                            id='email-address'
                            type='email'
                            name='email'
                            value={dataUser.email}
                            required
                            onChange={handleChange}
                            onBlur={handleBlur}
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
                            onBlur={handleBlur}
                            placeholder='Contraseña'
                        />
                        {errorUser.password && <p className='text-red-500 font-extralight'>{errorUser.password}</p>}

                       </div>
                        

                    <button type='submit' className='bg-[#F7AE50] border rounded-md px-6 py-3 w-3/4'>Inicia Sesión</button>
                    </form>
                    
                    <div className='flex flex-row gap-4'>
                        <p>No tienes cuenta?</p>
                         <Link href="/register"><span className='text-[#F7AE50] font-semibold'>Registrate</span></Link>
                    </div>
                </div>
            </div>
            <div className='hidden md:block w-full md:w-1/2 h-full'>
                <img className='w-full h-full object-cover' src="/ILogin/login.png" alt="Imagen de login" />
            </div>
        </div>
    );
}

export default Login;
