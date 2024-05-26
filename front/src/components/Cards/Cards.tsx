import React from 'react'
import productsPreload from '@/helpers/data'
import Card from '../Card/Card'
const Cards:React.FC  = () => {
  return (
    <div>
       {productsPreload?.map((products) => {
         return(
            <Card key={products.id} {...products}/>
         )
            
       })}
    </div>
  )
}

export default Cards
