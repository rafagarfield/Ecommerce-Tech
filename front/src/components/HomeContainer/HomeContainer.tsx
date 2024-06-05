import React from 'react'
import Cards from '../Cards/Cards'
import Panel from "@/components/Panel/Panel";
import Benefits from "@/components/Benefits/Benefits";
import ContainerCategory from "@/components/ContainerCategory/ContainerCategory";
import productsPreload from '@/helpers/data';
import { IProduct } from '@/types';
import { getProducts } from '@/helpers/product.helper';
// import { getProductsDB } from '@/helpers/product.helper';


const HomeContainer = async () => {


  const products = await getProducts();

  
  return (
    <div>
      <Panel/>
      <Benefits/>
      <ContainerCategory/>
      <Cards  products={products}/>
      <Benefits/>
      
    </div>
  )
}

export default HomeContainer
