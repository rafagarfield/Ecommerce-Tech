// import React from 'react'
// import productsPreload from '@/helpers/data'
// import Card from '../Card/Card'
// import Link from 'next/link'
// const Cards:React.FC  = () => {
//   return (
//     <div className='flex w-[100%] items-start content-start gap-x-[100px] gap-y-[120px] flex-wrap justify-center p-10'>
//        {productsPreload?.map((products) => {
//          return(
//            <Link key={products.id}  href={`/product/${products.id}`}><Card key={products.id} {...products}/></Link> 
//          )
            
//        })}
//     </div>
//   )
// }

// export default Cards


// import React from 'react'
// import productsPreload from '@/helpers/data'
// import Card from '../Card/Card'
// import Link from 'next/link'
// import { IProduct } from '@/types'
// const Cards:React.FC:any = (products:IProduct) => {
//   return (
//     <div className='flex w-[100%] items-start content-start gap-x-[100px] gap-y-[120px] flex-wrap justify-center p-10'>
//        {products?.map((product:any) => {
//          return(
//            <Link key={product.id}  href={`/product/${product.id}`}><Card key={product.id} {...product}/></Link> 
//          )
            
//        })}
//     </div>
//   )
// }

// export default Cards


import React from 'react'; 
import productsPreload from '@/helpers/data';
import Card from '../Card/Card'; 
import Link from 'next/link';  
import { IProduct } from '@/types'; 


const Cards: React.FC<{ products: IProduct[]  }> = ({ products }) => { 

  return (
    <>
    <h1 className='text-center font-medium text-4xl text-zinc-900 m-8'>Productos</h1>
    <div className='flex w-[100%] items-start content-start gap-x-[100px] gap-y-[120px] flex-wrap justify-center p-10'> 
       {products?.map((product) => { 
         return(
       
           <Link key={product.id} href={`/product/${product.id}`}>
             <Card {...product} /> 
           </Link> 
           
         )
       })}
    </div>
    </>
    
  )
}

export default Cards; 
