"use client"

import Benefits from '@/components/Benefits/Benefits'
import { createOrder } from '@/helpers/orders.helper'
import { IProduct, userSession } from '@/types'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, {  useEffect, useState } from 'react'

const Cart = () => {
  const  router  = useRouter()

  const [cart, setCart] = useState <IProduct[]>([])
  const [total, setTotal] = useState<number>(0)
  const[userData,setUserData] = useState <userSession>()

 useEffect(()=>{
  if( typeof window !== 'undefined' && window.localStorage){
    const userData:userSession =JSON.parse(localStorage.getItem("userSession")!)
    setUserData(userData)
    !userData?.token && redirect("/login")
  }
  const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
  if( storedCart){
    let totalcart = 0;
    storedCart?.map((item:IProduct)=>{
      totalcart= totalcart + item.price
      
    })
    setTotal(totalcart)
    setCart(storedCart)
    
  }



 },[])

const handleClick = async() => {
  const idProducts =new Set(cart.map((product)=> product.id))
  await createOrder(Array.from(idProducts),userData?.token!)
  alert("compra existosa")
  setCart([])
  setTotal(0)
  localStorage.setItem("cart","[]")
  router.push("/")
}

  return (
 
<div >
<h1 className=' font-medium text-2xl p-4 text-zinc-900 pt-10 '>Carrito de Compras</h1>
<div className='flex flex-row my-10'>
  <div className=' mx-10 w-[50%]'>
  
    <div className=' w-[70%] flex justify-center gap-10 ml-16'>
      {/* <img  className="w-[50%] h-auto object-cover " src="/pago.png" alt="imagen de pago" /> */}
      <img  className="w-1/2 h-auto object-cover " src="/pago2.png" alt="imagen de pago" />
      {/* <img  className="w-1/3 h-auto object-cover " src="/pago3.png" alt="imagen de pago" /> */}
      <img  className="w-1/2 h-auto object-cover " src="/pago4.png" alt="imagen de pago" />
    </div>
   
  </div>

  <div className='flex justify-center items-center'>
    <hr className=' w-0 h-[100%] border-l-4 border-gray-600 mx-4 mt-5'/>
  </div>
  
  <div className='flex justify-center items-center w-[30%]'>
    <div className=' px-12 py-8 rounded-lg border border-solid border-gray-400 bg-white ml-20'>
      <h1 className='text-2xl font-semibold '>Tu Orden</h1>
      <hr />
      <div>
        {
          cart?.length > 0 ? (
          cart?.map((cart)=>{
            return (
              <>
              <div key={cart.id}>
                <div className='flex flex-row '>
                  <img src={cart.image} alt={cart.name} width={150} height={150} />
                  <div className='flex flex-col justify-center  font-medium'>
                    <p>{cart.name}</p>
                    <p> $ {cart.price}</p>
                  </div>
                  <hr />
                  </div>
                  <hr />

                
              </div>
              
              </>
            )

          })
          ):
          (
            <div>
              <p>No tienes ningun producto en tu carrito</p>
            </div>
          )

        }

          </div>
                <div>
                <hr />
                </div>
                <div className='flex flex-row justify-between'>
                 <p>envio</p>
                 <p>$ 0</p>
                 
               </div>
               <hr />
  
              <div className='flex flex-row justify-between text-lg font-medium '>
                  <p >Total</p>
                  <p>${total}</p>
              </div>
              
              <div className='flex justify-center  items-center'>
                <button className=" px-3 my-5 py-2 bg-[#edb149] border rounded-xl text-white " onClick={handleClick}>Comprar</button>
              </div>
      
     
    </div>

  </div>
 
  

</div>
<Benefits/>
</div> 
  )
}



export default Cart




