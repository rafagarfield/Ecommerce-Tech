"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { userSession } from '@/types';

const Dashboard = () => {

  const [userData,setUserData] = useState<userSession>();


  useEffect(()=>{
    if(typeof window !== 'undefined' && window.localStorage){
      const userData= localStorage.getItem("userSession")
      setUserData(JSON.parse(userData!))
    }
  },[])

  console.log(userData?.userData.name)
  console.log(userData?.userData.email)
  console.log(userData?.userData.address)
  console.log(userData?.userData.phone)

  const clearSesion = () => {
    localStorage.clear();
    window.location.href = '/login'; 
  }


  return (
    <div className='m-4'>
       <div className='flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-4'>
        <Image src="/user.svg" alt='logo usuario2' width={120} height={120} />
        <div className='bg-[#F3F3F3] border rounded-md p-4'>
          <p>Nombre: {userData?.userData.name}</p>
          <p>email: {userData?.userData.email}</p>
          <p>Dirección: {userData?.userData.address}</p>
          <p>Teléfono: {userData?.userData.phone}</p>
        </div>
        

        <button onClick={clearSesion} className='bg-[#222222] border rounded-md px-6 py-3 text-white hover:bg-[#454545]'>Cerrar Sesión</button>
      </div>
      
    </div>
      
    </div>
   
  )
}

export default Dashboard