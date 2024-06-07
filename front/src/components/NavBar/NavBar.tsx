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

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { userSession } from '@/types';
import { usePathname } from 'next/navigation';

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const [userData, setUserData] = useState<userSession>();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const userData = localStorage.getItem('userSession');
      setUserData(JSON.parse(userData!));
    }
  }, [pathname]);

  return (
    <div>
      <nav className="flex items-center justify-between p-8 bg-white shadow-md">
        <div>
          <Link href="/">
            <Image src="/LOGOM4.svg" alt="logo" width={120} height={20} />
          </Link>
        </div>
        <ul className="hidden md:flex flex-row gap-8">
          <li>
            <Link href="/" className="hover:bg-zinc-300 px-2 py-1 rounded-md">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/store" className="hover:bg-zinc-300 px-2 py-1 rounded-md">
              Tienda
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:bg-zinc-300 px-2 py-1 rounded-md">
              Nosotros
            </Link>
          </li>
        </ul>
        <div className="hidden md:flex items-center gap-6">
          <Image src="/lupa.svg" alt="lupa buscador" width={20} height={20} />
          <input className="border border-[rgba(0, 0, 0, 0.45)] rounded-md px-1" type="text" placeholder="Buscar..." />
          <Link href="/cart">
            <Image src="/carrito real.svg" alt="carrito de compras" width={20} height={20} />
          </Link>
          {userData?.token ? (
            <div className="flex flex-row justify-center items-center mx-4 gap-1">
              <Link href="/dashboard">
                <Image src="/user.svg" alt="logo usuario" width={30} height={30} />
              </Link>
              <Link href="/dashboard">
                <p>{userData?.userData.name}</p>
              </Link>
            </div>
          ) : (
            <Link href="/login" className="rounded-md px-3 py-1 bg-[#F7AE50] hover:bg-[#E99240]">
              Login
            </Link>
          )}
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
              <Link href="/" className="hover:text-black hover:font-bold" onClick={() => setMenuOpen(false)}>
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-black hover:font-bold" onClick={() => setMenuOpen(false)}>
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/store" className="hover:text-black hover:font-bold" onClick={() => setMenuOpen(false)}>
                Tienda
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-black hover:font-bold" onClick={() => setMenuOpen(false)}>
                Contáctanos
              </Link>
            </li>
            {!userData?.token && (
              <li>
                <Link href="/login" className="hover:text-black hover:font-bold" onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
              </li>
            )}
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <Image src="/lupa.svg" alt="lupa buscador" width={20} height={20} />
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <Image src="/carrito real.svg" alt="carrito de compras" width={20} height={20} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
