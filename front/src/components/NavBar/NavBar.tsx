// import React from 'react'
// import styles from './Navbar.module.css'; 
// import Image from 'next/image';
// import Link from 'next/link';
// const NavBar:React.FC = () => {
//   return (
//     <div>
//       <nav className = {styles.containerNav}>
//         <div>
//             <Link href="/"><Image src="/LOGOM4.svg" alt='logo' width={120} height={20}/></Link>
//         </div>
//         <ul className='flex flex-row gap-8' >
//                 <Link className="hover:text-black hover:font-bold" href="/"><li>Inicio</li></Link>
//                 <Link className="hover:text-black hover:font-bold" href="/"><li>Nosotros</li></Link>
//                 <Link className="hover:text-black hover:font-bold" href="/"><li>Tienda</li></Link>
//                 <Link className="hover:text-black hover:font-bold" href="/"><li>Contactanos</li></Link>
//         </ul>
//         <div  className='flex flex-row gap-12'>
//             <Link className="hover:text-black hover:font-bold" href="/login"><span>Login</span></Link>
//             <Link href="/"><Image src="/lupa.svg" alt='lupa buscador' width={20} height={4}/></Link>
//             <Link href="/"><Image src="/carrito real.svg" alt='carrito de compras'width={20} height={4} /></Link>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default NavBar

"use client"; // Agregar esta línea

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="flex items-center justify-between p-4 bg-white shadow-md">
        <div>
          <Link href="/">
            <Image src="/LOGOM4.svg" alt='logo' width={120} height={20} />
          </Link>
        </div>
        <ul className="hidden md:flex flex-row gap-8">
          <li>
            <Link href="/" className="hover:text-black hover:font-bold">Inicio</Link>
          </li>
          <li>
            <Link href="/" className="hover:text-black hover:font-bold">Nosotros</Link>
          </li>
          <li>
            <Link href="/" className="hover:text-black hover:font-bold">Tienda</Link>
          </li>
          <li>
            <Link href="/" className="hover:text-black hover:font-bold">Contactanos</Link>
          </li>
        </ul>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/login" className="hover:text-black hover:font-bold">Login</Link>
          <Link href="/">
            <Image src="/lupa.svg" alt='lupa buscador' width={20} height={20} />
          </Link>
          <Link href="/">
            <Image src="/carrito real.svg" alt='carrito de compras' width={20} height={20} />
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
            ☰
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-4 p-4">
            <li>
              <Link href="/" className="hover:text-black hover:font-bold" onClick={() => setMenuOpen(false)}>Inicio</Link>
            </li>
            <li>
              <Link href="/" className="hover:text-black hover:font-bold" onClick={() => setMenuOpen(false)}>Nosotros</Link>
            </li>
            <li>
              <Link href="/" className="hover:text-black hover:font-bold" onClick={() => setMenuOpen(false)}>Tienda</Link>
            </li>
            <li>
              <Link href="/" className="hover:text-black hover:font-bold" onClick={() => setMenuOpen(false)}>Contactanos</Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-black hover:font-bold" onClick={() => setMenuOpen(false)}>Login</Link>
            </li>
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <Image src="/lupa.svg" alt='lupa buscador' width={20} height={20} />
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <Image src="/carrito real.svg" alt='carrito de compras' width={20} height={20} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
