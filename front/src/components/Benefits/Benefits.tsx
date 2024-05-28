// import React from 'react'

// const Benefits = () => {
//   return (
//     <div className='flex flex-row w-[100%] justify-center items-center text-[#fff] font-semibold '>
//         <div className='bg-[#F42C37] w-1/3  p-4 flex justify-center'>ENVIO GRATIS</div>
//         <div className='bg-[#FDC62E] w-1/3 p-4 flex justify-center'>GARANTÍA ASEGURADA</div>
//         <div className='bg-[#222] w-1/3 p-4 flex justify-center'>SOPORTE 24/7</div>
//     </div>
//   )
// }

// export default Benefits
import React from 'react';

const Benefits = () => {
  return (
    <div className='flex flex-wrap justify-center items-center text-[#fff] font-semibold'>
      <div className='bg-[#2CD06F] w-full sm:w-1/3 p-4 flex justify-center'>ENVÍO GRATIS</div>
      <div className='bg-[#FDC62E] w-full sm:w-1/3 p-4 flex justify-center'>GARANTÍA ASEGURADA</div>
      <div className='bg-[#222] w-full sm:w-1/3 p-4 flex justify-center'>SOPORTE 24/7</div>
    </div>
  );
};

export default Benefits;
