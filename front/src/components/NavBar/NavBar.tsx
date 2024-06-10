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

"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IProduct, userSession } from '@/types';
import { usePathname, useRouter } from 'next/navigation';
import { getProducts } from '@/helpers/product.helper';
useRouter

const NavBar: React.FC = () => {
  const router= useRouter()
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [userData, setUserData] = useState<userSession>();
  const [products,setProducts] = useState<IProduct[]>([]);
  const [search,setSearch] = useState("")
  const [filterData,setFilterData] = useState<IProduct[]>([])
  const[counterCart,setCounterCart] = useState<number>(0)
  


  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const userData = localStorage.getItem('userSession');
      setUserData(JSON.parse(userData!));
    }
  }, [pathname]);

  // contador del carrito
  useEffect(()=>{
    if(typeof window!== 'undefined' && window.localStorage){
      const cartData = localStorage.getItem('cart');
      if(cartData){
        setCounterCart(JSON.parse(cartData!).length)
      }
    }
  },[pathname])

  //buscador 
  useEffect(() =>{
    const getAllProducts = async()=>{
      const productsData:IProduct[]= await getProducts();
      if(productsData) setProducts(productsData);
    }
    getAllProducts();
  
  },[])

 
  const handleChangeSearch = (e:React.ChangeEvent<HTMLInputElement>) =>{
    const filtered:IProduct[]= products.filter((product)=>{
      return product.name.toLowerCase().includes(search.toLowerCase());
    })
    setFilterData(filtered);
      setSearch(e.target.value);
  }
  useEffect(() =>{
    if(search.trim()===""){
      setSearch("")
      setFilterData([]);
    }
  },[search])

  const resetSearch = () =>{
    setSearch("");
    setFilterData([]);
  }



    

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
          <div className='relative'>
            <input autoComplete='off' onChange={handleChangeSearch} className="border border-[rgba(0, 0, 0, 0.45)] rounded-md px-1" type="text" placeholder="Buscar..." />
          {filterData.length>0 &&
            <ul className='absolute left-0  border-gray-400 border bg-white rounded-sm  w-full p-4'>

              {filterData.map((item) => (
                <li key={item.id}>
                  <Link onClick={resetSearch} href={`/product/${item.id}`}>
                    <p className=' hover:text-black hover:font-medium'>{item.name}</p>
                    
                  </Link>
                </li>
              ))}
            </ul>
          }
          </div>

      

          <Link className='flex flex-row gap-2' href="/cart">
            <Image src="/carrito real.svg" alt="carrito de compras" width={20} height={20} />
            <span>{counterCart}</span>
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
