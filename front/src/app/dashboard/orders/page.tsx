"use client"

import { getOrders } from '@/helpers/orders.helper';
import { IOrder, userSession } from '@/types';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const OrderPage =  () => {
  
  const [userData,setUserData] = useState<userSession>();
  const [orders,setOrders] = useState<IOrder[]>([])
  useEffect(() => {

    if(typeof window !== 'undefined' && window.localStorage){
      const userData= localStorage.getItem('userSession')
      setUserData(JSON.parse(userData!));
    }
  },[])


  useEffect(() => {
    const fetchData = async () => {
      const ordersResponse = await getOrders(userData?.token!)
      setOrders(ordersResponse)
    }
    userData?.token && fetchData();
  },[userData?.token])

  

  return (
    <div>
      <h1>orders</h1>
            {orders?.length > 0  ? (orders?.map((orden) =>{
          return (
            <div key={orden.id}>
              <div>
                <p>{new Date (orden.date).toLocaleDateString()}</p>
                <p>Status:{orden.status}</p>
              </div>
            </div>
          )

        })) : (<div>
          <p>no tienes ninguna orden</p>
          <Link href="/">
          <button className='bg-red-600' >Compra Ahora</button>
          </Link>

        </div>)} 
    </div>
  )
}

export default OrderPage


