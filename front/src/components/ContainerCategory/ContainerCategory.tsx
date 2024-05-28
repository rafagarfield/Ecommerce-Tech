// import React from 'react'
// import dataCategory, { IDataCategory } from '../../helpers/dataCategory'
// import CardCategory from '../CardCategory/CardCategory'
// const ContainerCategory:React.FC = () => {
//   return (
//     <div className='flex flex-row gap-[90px] px-[20px] py-[35px] bg-[#F3F3F3] justify-center my-2'>
//       { dataCategory && dataCategory?.map((data)=>{
//         return (
//             < >
//                 <CardCategory key={data.id} {...data}/>
//             </>
//         )
//       })}
//     </div>
//   )
// }

// export default ContainerCategory
import React from 'react';
import dataCategory from '../../helpers/dataCategory';
import CardCategory from '../CardCategory/CardCategory';

const ContainerCategory: React.FC = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap gap-6 md:gap-[90px] px-[20px] py-[35px] bg-[#F3F3F3] justify-center my-2'>
      {dataCategory && dataCategory.map((data) => (
        <CardCategory key={data.id} {...data} />
      ))}
    </div>
  );
}

export default ContainerCategory;
