"use client"

import { createOrder } from '@/helpers/orders.helper'
import { IProduct, userSession } from '@/types'
import { redirect } from 'next/navigation'
import React, {  useEffect, useState } from 'react'

const Cart = () => {

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
}

  return (
 

<div className='flex flex-row '>
  
  <div className=' w-[70%]'>
  <h1>Carrito de Compras</h1>
    <img src="/pago.png" alt="imagen de pago" />
    <div>
    {/* <Image src="/star/Frame 38.svg" alt='icono star' width={150} height={50} /> */}
    <p>MÉTODOS DE PAGO</p>
    </div>
  </div>

  <div className='flex justify-center items-center'>
    <hr className=' w-0 h-[80%] border-l-2 border-black mx-4 mt-5'/>
  </div>
  
  <div className='flex justify-center items-center w-[30%]'>
    <div className=' p-6 rounded-lg border border-solid border-gray-400 bg-white'>
      <h1>Tu Orden</h1>
      <hr />
      <div>
        {
          cart?.length > 0 ? (
          cart?.map((cart)=>{
            return (
              <div key={cart.id}>
                <div className='flex flex-row'>
                  <img src={cart.image} alt={cart.name} width={120} height={120} />
                  <div className='flex flex-col'>
                    <p>{cart.name}</p>
                    <p> $ {cart.price}</p>
                  </div>
                  </div>
                <div>
                <hr />
                </div>
                <div className='flex flex-row justify-between'>
                 <p>envio</p>
                 <p>$ 0</p>
               </div>
              <div className='flex flex-row justify-between'>
                  <p>Total</p>
                  <p>${total}</p>
              </div>
                <button className="px-3 my-5 py-2 bg-[#edb149] border rounded-xl text-white" onClick={handleClick}>Checkout</button>

              </div>
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

      
     
    </div>

  </div>
  

</div>

    
  )
}



export default Cart




