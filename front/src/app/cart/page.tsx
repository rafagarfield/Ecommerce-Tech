


"use client";
import Image from 'next/image'; 

import Benefits from '@/components/Benefits/Benefits';
import { createOrder } from '@/helpers/orders.helper';
import { IOrderProduct, userSession } from '@/types';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Cart = () => {
  const router = useRouter();

  const [cart, setCart] = useState<IOrderProduct[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [userData, setUserData] = useState<userSession>();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const userData: userSession = JSON.parse(localStorage.getItem("userSession")!);
      setUserData(userData);
      !userData?.token && redirect("/login");
    }
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    let totalcart = 0;
    cart.forEach((item: IOrderProduct) => {
      totalcart += (item.count ?? 0) * item.price;
    });
    setTotal(totalcart);
  }, [cart]);

  const handleClick = async () => {
    const idProducts = new Set(cart.map((product) => product.id));
    console.log(idProducts);
    console.log(Array.from(idProducts));
    await createOrder(Array.from(idProducts), userData?.token!);
    alert("Compra exitosa");
    setCart([]);
    setTotal(0);
    localStorage.setItem("cart", "[]");
    router.push("/dashboard/orders");
  };

  const handleBuy = () => {
    router.push("/store");
  };

  const handleClickLess = (id: number) => {
    setCart(prevCart => {
      const updatedCart = prevCart.map(c => {
        if (c.id === id) {
          const newCount = Math.max((c.count ?? 0) - 1, 1);
          return { ...c, count: newCount };
        }
        return c;
      });
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const handleClickPlus = (id: number) => {
    setCart(prevCart => {
      const updatedCart = prevCart.map(c =>
        c.id === id ? { ...c, count: (c.count ?? 0) + 1 } : c
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return (
    <div>
      <h1 className='font-medium text-2xl p-4 text-zinc-900 pt-10'>Carrito de Compras</h1>
      <div className='flex flex-row my-10'>
        <div className='mx-10 w-[50%]'>
          <div className='w-[70%] flex justify-center gap-10 ml-16'>
            <img className="w-1/2 h-auto object-cover" src="/pago2.png" alt="imagen de pago" />
            <img className="w-1/2 h-auto object-cover" src="/pago4.png" alt="imagen de pago" />
          </div>
        </div>

        <div className='flex justify-center items-center'>
          <hr className='w-0 h-[100%] border-l-4 border-gray-600 mx-4 mt-5' />
        </div>

        <div className='flex justify-center items-center w-[30%]'>
          <div className='px-12 py-8 rounded-lg border border-solid border-gray-400 bg-white ml-20'>
            <h1 className='text-2xl font-semibold'>Tu Orden</h1>
            <hr />
            <div>
              {
                cart?.length > 0 ? (
                  cart.map((cart) => {
                    return (
                      <div key={cart.id}>
                        <div className='flex flex-row'>
                          <img src={cart.image} alt={cart.name} width={150} height={150} />
                          <div className='flex flex-col justify-center font-medium'>
                            <p>{cart.name}</p>
                            <p>$ {cart.price}</p>
                            <div className='flex flex-row gap-4 bg-[#F3F3F3] p-1 border rounded-md w-[80px] justify-center'>
                              <Image onClick={() => handleClickLess(cart.id)} src="/star/Line 5.svg" alt='menos' width={20} height={5} />
                              <span className='text-lg font-semibold'>{cart.count}</span>
                              <Image onClick={() => handleClickPlus(cart.id)} src="/star/Group 52.svg" alt='mas' width={20} height={5} />
                            </div>
                          </div>
                        </div>
                        <hr />
                      </div>
                    );
                  })
                ) : (
                  <div>
                    <p>No tienes ningún producto en tu carrito</p>
                  </div>
                )
              }
            </div>
            <div>
              <hr />
            </div>
            <div className='flex flex-row justify-between'>
              <p>Envío</p>
              <p>$ 0</p>
            </div>
            <hr />
            <div className='flex flex-row justify-between text-lg font-medium'>
              <p>Total</p>
              <p>${total}</p>
            </div>
            <div className='flex justify-center items-center gap-3'>
              <button className="px-3 my-5 py-2 bg-[#edb149] border rounded-xl text-white" onClick={handleClick}>Comprar</button>
              <button className="p-2 border rounded-xl" onClick={handleBuy}>Seguir comprando</button>
            </div>
          </div>
        </div>
      </div>
      <Benefits />
    </div>
  );
};

export default Cart;
