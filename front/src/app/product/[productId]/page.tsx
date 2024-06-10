// import React from 'react'
// import Image from 'next/image'

// const linkImage:string= "https://tiendasishop.com/media/catalog/product/m/h/mhdc3lz_a.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
// const DetailsId = ({}) => {
  
//   return (
//     <div className='flex flex-row'>

//       <div className='flex flex-col h-1/3 '>
//           <div className='flex justify-center bg-[#fff] p-6 m-3 border'>
//             <img className='w-1/3 h-1/3' src={linkImage} alt=" producto principal por id" />
//             </div>
//           <div className='flex flex-row ' >
//               <div className='w-1/4 border m-3'>
//                 <img src={linkImage}  alt="foto1 muestra" />
//               </div>
//               <div className='w-1/4 border m-3'>
//                 <img src={linkImage}  alt="foto2 muestra" />
//               </div>
//               <div className='w-1/4 border m-3'>
//                 <img src={linkImage}  alt="foto3 muestra" />  
//               </div>
//               <div className='w-1/4 border m-3'>
//                 <img src={linkImage}  alt="foto4 muestra" />  
//               </div>
//             </div>
          
//       </div>

//       <div className='flex flex-col gap-8 m-5 text-black'>
//         <h2 className='text-xl font-semibold '>Apple Watch Series 6</h2>
//         <p>Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.</p>
//         <Image  src="/star/Frame 38.svg" alt='icono star'  width={150} height={50} />
        
//         <div className='flex flex-row justify-start items-center gap-1'>
//           <p>Categoria:</p>
//           <p className='flex px-2 py-3 bg-[#2CD06F] border rounded-xl text-white'>Smartphones</p>
//         </div>

//         <h2 className='text-xl font-semibold'>$ 96,00</h2>
        
//         <div className='flex flex-row gap-4'>
          
//             <div className='flex flex-row gap-4 bg-[#F3F3F3] p-2 border rounded-md'>
//               <Image src="/star/Line 5.svg"  alt='menos' width={20} height={5}/>
//               <p className='text-lg font-semibold'>1</p>
//               <Image src="/star/Group 52.svg" alt='mas' width={20} height={5}/>
//             </div>
//             <button className='py-2 px-5 text-center bg-[#F22D36] border rounded-md text-white'>Agregar al carrito</button>

//         </div>

//           <div className='flex flex-col gap-3'>
//             <p className='text-white px-1 py-2 border rounded-xl bg-black w-[50px] text-center'>10</p>
//             <p className='text-lg font-medium'>Equipos disponibles</p>
//           </div>

//         </div>
//       </div>

    
    
//   )
// }

// export default DetailsId

"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getProductId } from '@/helpers/product.helper';
import { IProduct, userSession } from '@/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// const linkImage = "https://tiendasishop.com/media/catalog/product/m/h/mhdc3lz_a.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700";

const DetailsId = ({params}:{params:{productId:string}}) => {
  const router = useRouter();
  const [product,setProduct]=useState<IProduct>();
  const [userData,setUserData] = useState<userSession>();
 

  useEffect(() => {

    if(typeof window !== 'undefined' && window.localStorage){
      const userData= localStorage.getItem('userSession')
      setUserData(JSON.parse(userData!));
    }

    const fetchData = async () => {
      const product= await getProductId(params.productId);
      setProduct(product);
    }
    fetchData();
  },[])

 

  const handleAddToCart = (e:any) => {
    
      if(!userData?.token){
        alert ("Inicia sesion para poder hacer una compra")
        router.push('/login');
      } else{
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const productExist = cart.some((product:IProduct) => {
            if(product.id === Number(e?.target?.id)) return true;
            return false;
        })
        if(productExist) {
          alert('este producto ya existe en tu carrito!');
          router.push("/cart")
        }
        else {
          cart.push({...product,count:1})
          localStorage.setItem("cart", JSON.stringify(cart));
          alert('Producto agregado a tu carrito!');
          router.push("/cart")
        }

      }

  }

 
  return (
    <div className='flex flex-col md:flex-row  '>

      <div className='md:w-1/2'>
        <div className='flex justify-center bg-[#fff] p-6 m-3 border ml-10'>
          <img className='w-full h-[500px] object-contain transform transition-transform duration-300 hover:scale-105' src={product?.image} alt="producto principal por id" />
        </div>
       
      </div>

      <div className='md:w-1/2 '>
        <div className='flex flex-col gap-8 m-5 text-black p-10'>
          <h2 className='text-2xl font-semibold '>{product?.name}</h2>
          <p>{product?.description}</p>
          <Image src="/star/Frame 38.svg" alt='icono star' width={150} height={50} />
          
          <div className='flex flex-row justify-start items-center gap-1'>
            <p>Categoria:</p>
            <p className='flex px-2 py-3 bg-[#2CD06F] border rounded-xl text-white'>Tecnología</p>
          </div>

          <h2 className='text-xl font-semibold'>${product?.price}</h2>
          
          <div className='flex flex-col gap-4 '>
          
            <div className='flex flex-row  gap-3  items-center'>
              <p className='text-white px-1 py-2 border rounded-xl bg-black w-[50px] text-center'>{product?.stock}</p>
              <p className='text-lg font-medium'>Equipos disponibles</p>
            </div>
              
              <div className='flex flex-row gap-3'>
                <button id={product?.id.toString()} onClick={handleAddToCart}  className='py-2 px-3 text-center bg-[#F22D36] border rounded-md text-white w-1/2 flex justify-center'>Agregar al carrito</button>
              </div>
              
            
          </div>

    

        </div>
      </div>
    </div>
  );
}

export default DetailsId;
