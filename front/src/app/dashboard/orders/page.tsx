"use client";

import { getOrders } from "@/helpers/orders.helper";
import { IOrder, userSession } from "@/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const OrderPage = () => {
  const [userData, setUserData] = useState<userSession>();
  const [orders, setOrders] = useState<IOrder[]>([]);
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = localStorage.getItem("userSession");
      setUserData(JSON.parse(userData!));
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const ordersResponse = await getOrders(userData?.token!);
      setOrders(ordersResponse);
    };
    userData?.token && fetchData();
  }, [userData?.token]);

  return (
    <div>
      <h1 className="text-center font-medium text-4xl text-zinc-900 m-8">Mis ordenes</h1>
      {/* <h1>orders</h1>
      {orders?.length > 0 ? (
        orders?.map((orden) => {
          return (
            <div key={orden.id}>
              <div>
                <p>{new Date(orden.date).toLocaleDateString()}</p>
                <p>Status:{orden.status}</p>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <p>no tienes ninguna orden</p>
          <Link href="/">
            <button className="bg-red-600">Compra Ahora</button>
          </Link>
        </div>
      )}
      {" "}
      
       */}
      
      {/* cambio de estilo  */}
      <div className="flex justify-center items-center">
        <div className="w-1/3 bg-gray-900 rounded-lg flex flex-row gap-16 m-8 p-5 text-sm justify-center items-center">
          <img
            className="w-12 h-12 rounded-full bg-cover bg-center"
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="foto de perfil"
          />
          <div className="flex flex-row gap-2 justify-center items-center">
            <h2 className={`flex items-center justify-center p-2 rounded-lg ${status === "cancelled" ? "bg-red-600" : "bg-green-700"} text-white font-semibold text-base leading-snug`}>
              activo
            </h2>
            <h2 className="bg-gray-400 bg-opacity-50 p-2 rounded-lg text-white">
            12-07-2023
            </h2>
            <h2 className="bg-gray-400 bg-opacity-50 p-2 rounded-lg text-white"> Mis productos</h2>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-1/3 bg-gray-900 rounded-lg flex flex-row gap-16 m-8 p-5 text-sm justify-center items-center">
          <img
            className="w-12 h-12 rounded-full bg-cover bg-center"
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="foto de perfil"
          />
          <div className="flex flex-row gap-2 justify-center items-center">
            <h2 className={`flex items-center justify-center p-2 rounded-lg ${status === "cancelled" ? "bg-red-600" : "bg-green-700"} text-white font-semibold text-base leading-snug`}>
              activo
            </h2>
            <h2 className="bg-gray-400 bg-opacity-50 p-2 rounded-lg text-white">
            12-07-2023
            </h2>
            <h2 className="bg-gray-400 bg-opacity-50 p-2 rounded-lg text-white"> Mis productos</h2>
          </div>
        </div>
      </div>
      

    </div>
  );
};

export default OrderPage;
