// import { IDataCategory } from '@/helpers/dataCategory'
// import Link from 'next/link'
// import React from 'react'

// const CardCategory:React.FC <IDataCategory> = ({image,name}) => {
//   return (

//     <Link href="/">
//         <div className='flex flex-col items-center gap-3 hover:scale-105 transition-transform duration-300 ease-in-out  overflow-hidden'>
//         <img src={image} alt="name" className='w-[auto] h-[80px]'/>
//         <p>{name}</p>
//     </div>

//     </Link>
    
//   )
// }

// export default CardCategory
import { IDataCategory } from '@/helpers/dataCategory';
import Link from 'next/link';
import React from 'react';

const CardCategory: React.FC<IDataCategory> = ({ image, name }) => {
  return (
    <Link href="/">
      <div className='flex flex-col items-center gap-3 hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden'>
        <img src={image} alt={name} className='w-auto h-[60px] md:h-[80px]' />
        <p className='text-center text-sm md:text-base'>{name}</p>
      </div>
    </Link>
  );
}

export default CardCategory;
