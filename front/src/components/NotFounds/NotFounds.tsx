import React from 'react'
import Link from 'next/link'
const NotFounds = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-10 bg-white py-10'>
        <img src="/404.png" alt="404 page" />
        <p>oops... pagina no encontrada</p>
        <Link href="/"><button  className="bg-red-500 px-8 py-3 rounded-md"> ⬅ Regresar al home</button></Link>

    </div>
  )
}

export default NotFounds
