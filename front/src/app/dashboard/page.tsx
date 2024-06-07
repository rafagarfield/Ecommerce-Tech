import React from 'react'
import Image from 'next/image';

const Dashboard = () => {
  return (
    <div className='m-4'>
       <div className='flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-4'>
        <Image src="/user.svg" alt='logo usuario2' width={120} height={120} />
        <div className='bg-[#F3F3F3] border rounded-md p-4'>
          <p>Rafael</p>
          <p>email:mgrafael@gmail.com</p>
          <p>Direccion:Av.cusco</p>
          <p>telefono:917669029</p>
        </div>
        

        <button className='bg-[#222222] border rounded-md px-6 py-3 text-white hover:bg-[#454545]'>Cerrar Sesión</button>
      </div>
      
    </div>
      
    </div>
   
  )
}

export default Dashboard