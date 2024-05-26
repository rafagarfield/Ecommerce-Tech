import categoriesToPreLoad from '@/helpers/category';
import { IProduct } from '@/types';
import React from 'react'

const Card:React.FC <IProduct> = ({name,description,price,stock,image,categoryId}) => {
  return (
    <div className='bg-slate-300 rounded-bl-sm border-red-500  text-slate-200 flex flex-col max-w-[300px] h-[600px] m-4 p-4 shadow-gray-400  hover:border-r-rose-500'>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h2>{description}</h2>
      <h2>{price}</h2>
      <p>Categoria:{categoriesToPreLoad[categoryId].name}</p>
      <h2>{stock}</h2>
      
    </div>
  )
}

export default Card;
