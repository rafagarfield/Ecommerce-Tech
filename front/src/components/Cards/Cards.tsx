import React from 'react'
import productsPreload from '@/helpers/data'
import Card from '../Card/Card'

const Cards:React.FC  = () => {
  return (
    <div className='flex w-[100%] items-start content-start gap-x-[100px] gap-y-[120px] flex-wrap justify-center p-10'>
       {productsPreload?.map((products) => {
         return(
            <Card key={products.id} {...products}/>
         )
            
       })}
    </div>
  )
}

export default Cards
