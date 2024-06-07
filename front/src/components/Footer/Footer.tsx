import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-row justify-between bg-[#222222] text-white pt-10 pb-10 px-20'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-4xl font-semibold'>RGTech.com</h1>
                <div className='flex flex-row gap-16'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-row gap-3'>
                        <Image src="Asset/location.svg" alt='location' width={20} height={20} />
                        <p> Ayacucho-Peru</p>
                        </div>
                        <div className='flex flex-row gap-3'>
                        <Image src="Asset/call.svg" alt='phone' width={20} height={20} />
                        <p>666-123-243</p>
                        </div>
                        <div className='flex flex-row gap-3'>
                        <Image src="Asset/message.svg" alt='message' width={20} height={20} />
                        <p>rgtech@tecnology.com</p>
                        </div>
                        
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Link href="/about">Acerca de Nosotros</Link>
                        <Link href="/store">Nuestros Productos</Link>
                    </div>
                </div>

            </div>

            <div className='flex flex-col gap-4'>
                <Image src="Asset/facebook.svg" alt='logo usuario2' width={30} height={30} />
                <Image src="Asset/instagram.svg" alt='logo usuario2' width={30} height={30} />
                <Image src="Asset/twitter.svg" alt='logo usuario2' width={30} height={30} />

            </div>

        </div>

        <div className='bg-[#7E817C] p-8 flex justify-center'>
           <p className='text-white'>© 2024 Todos los derechos reservados</p> 
        </div>

      
    </div>
  )
}

export default Footer
