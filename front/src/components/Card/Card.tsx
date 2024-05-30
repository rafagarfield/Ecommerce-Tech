import categoriesToPreLoad from '@/helpers/category';
import { IProduct } from '@/types';
import Image from 'next/image';
import React from 'react'

const Card:React.FC <IProduct> = ({name,description,price,stock,image,categoryId}) => {
  return (
    <div className='  flex flex-col max-w-[200px] border border-[rgba(0, 0, 0, 0.45)]'>
      <img src={image} alt={name} />
      <div key={name} className='bg-[#F3F3F3] p-3 border border-[rgba(0, 0, 0, 0.45)] flex flex-col gap-3'>
        <h2 className='text-[rgba(25, 6, 61, 0.78)] font-bold text-[14px]'>{name}</h2>
        {/* <h2>{description}</h2> */}
        <div className='flex flex-row justify-between'>
          <h2 className='text-gray-600 font-bold text-[14spx]'>${price}</h2>
          <Image src="/carrito real.svg" alt='carrito de compras'width={20} height={4} />
        </div>
        
        {/* <p>Categoria:{categoriesToPreLoad[categoryId].name}</p>
        <h2>Stock:{stock}</h2> */}
      </div>
      
      
    </div>
  )
}

export default Card;



