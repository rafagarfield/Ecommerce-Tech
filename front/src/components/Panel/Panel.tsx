// import React from 'react'

// const Panel = () => {
//   return (
//     <div className='flex flex-row text-zinc-50'>

//         <div className='bg-[#222222] w-1/2 px-5 py-[50px] ' >
//             <div className='flex flex-col'>
//                 <h1 className='text-[64px] font-bold leading-14'>Los mejores Smartphones</h1>
//                 <div className='flex flex-row'>
//                     <div className='flex flex-col gap-10 justify-center p-0 items-start'>
//                         <button className='bg-red-500 px-8 py-3 rounded-md'>Ir a la tienda</button>
//                         <p>Nos aseguramos que tengas los smarthphones más exclusivos en nuestos espacios.</p>
//                     </div>
//                     <img src="/images/6207999_3207179-removebg-preview 1.png" alt="imagen smartphone" />
//                 </div>
//             </div>
           

//         </div>

//         <div className='flex flex-col w-1/2'>
            
//             <div className='flex flex-row items-center p-10 bg-[#FDC62E]'>
//                 <div className='flex flex-col gap-10'>
//                     <h1 className='text-[#373B3C] text-[36px] font-bold leading-10' >Todo lo que un  Gamer ama ❤️</h1>
//                     <p className='text-[#373B3C] text-[18px] font-normal leading-normal'>Con descuentos de 20% en la compra dispositivos gamer</p>
//                 </div>
//                 <img  src="/images/fa507xv-hq058w-1000x1000-100-removebg-preview 1.png" alt="imagen gamer" />

//             </div>

//             <div className='flex flex-row'>
//                 <div className='bg-[#198FFD] w-1/2 flex flex-col gap-3 px-4  pt-1 pb-0'>
//                     <h1 className='text-[#FEFEFE] text-[24px] font-bold leading-10'>Atenciones técnicas para tus dispositivos </h1>
//                     <p className='text-[14px] text-[#fefefe]'>Contamos con especialistas que te atenderán  de forma personalizada</p>
//                     <img src="/images/10169-removebg-preview 1.png" alt="foto tecnico" />
//                 </div>

//                 <div className='bg-[#F42C37] w-1/2 flex flex-col gap-10 px-5 py-5 '>
//                     <div className='flex flex-col gap-0'>
//                         <p className='text-[18px] text-[#fefefe] flex items-center'>Accesorios para todos los</p>
//                         <p className='text-[#FEFEFE] text-[24px] font-bold leading-10'>Dispositivos</p>
//                         </div>
                    
//                     <img src="/images/png-clipart-headphones-headphones-removebg-preview 1.png" alt="foto accesorios" className='w-[160px] h-[160px] mx-auto' />
//                 </div>
//             </div>


//         </div>
      
//     </div>
//   )
// }

// export default Panel

import React from 'react';

const Panel = () => {
  return (
    <div className="flex flex-col lg:flex-row text-zinc-50">

      {/* Sección de Smartphones */}
      <div className="bg-[#222222] w-full lg:w-1/2 px-5 py-[50px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-[36px] md:text-[48px] lg:text-[64px] font-bold  ">Los mejores Smartphones</h1>
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col gap-10 justify-center p-0 items-start">
              <button className="bg-red-500 px-8 py-3 rounded-md">Ir a la tienda</button>
              <p>Nos aseguramos que tengas los smartphones más exclusivos en nuestros espacios.</p>
            </div>
            <img src="/ImagesC/s3.png" alt="imagen smartphone" className="mt-5 lg:mt-0 w-[400px] h-[400px]" />
          </div>
        </div>
      </div>

      {/* Sección de Gamers */}
      <div className="flex flex-col w-full lg:w-1/2">

        <div className="flex flex-col md:flex-row items-center p-10 bg-[#FDC62E]">
          <div className="flex flex-col gap-10">
            <h1 className="text-[#373B3C] text-[24px] md:text-[30px] lg:text-[36px] font-bold leading-10">Todo lo que un Gamer ama ❤️</h1>
            <p className="text-[#373B3C] text-[16px] md:text-[18px] font-normal leading-normal">Con descuentos de 20% en la compra de dispositivos gamer</p>
          </div>
          <img src="/images/fa507xv-hq058w-1000x1000-100-removebg-preview 1.png" alt="imagen gamer" className="mt-5 md:mt-0" />
        </div>

        {/* Sección de Atenciones Técnicas y Accesorios */}
        <div className="flex flex-col md:flex-row">
          <div className="bg-[#198FFD] w-full md:w-1/2 flex flex-col gap-3 px-4 pt-1 pb-0">
            <h1 className="text-[#FEFEFE] text-[20px] md:text-[24px] font-bold leading-10">Atenciones técnicas para tus dispositivos</h1>
            <p className="text-[14px] md:text-[16px] text-[#fefefe]">Contamos con especialistas que te atenderán de forma personalizada</p>
            <img src="/images/10169-removebg-preview 1.png" alt="foto tecnico" className="mt-5 md:mt-0" />
          </div>

          <div className="bg-[#F42C37] w-full md:w-1/2 flex flex-col gap-10 px-5 py-5">
            <div className="flex flex-col gap-0">
              <p className="text-[18px] text-[#fefefe] flex items-center">Accesorios para todos los</p>
              <p className="text-[#FEFEFE] text-[20px] md:text-[24px] font-bold leading-10">Dispositivos</p>
            </div>
            <img src="/images/png-clipart-headphones-headphones-removebg-preview 1.png" alt="foto accesorios" className="w-[160px] h-[160px] mx-auto" />
          </div>
        </div>

      </div>

    </div>
  );
}

export default Panel;
