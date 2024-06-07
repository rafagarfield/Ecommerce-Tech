import Image from 'next/image';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/img/general/tecnology2.jpg')" }}>
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold text-center drop-shadow-lg m-30 my-36">
          PROYECTO E-COMMERCE 
        </h1>
      </div>

      <section className="flex flex-col md:flex-row gap-24 bg-[#1E2225] p-12">
        <div className="flex flex-col justify-center gap-24 text-white p-16">
          <h2 className="text-4xl font-bold text-yellow-400">SOBRE EL PROYECTO </h2>
          <p className='leading-7 '>
            Este proyecto es un eCommerce de productos tecnológicos. 
            Se ha desarrollado utilizando Next.js para crear una experiencia de usuario rápida y eficiente. 
            El eCommerce permite a los usuarios explorar una amplia variedad de productos tecnológicos, agregarlos al carrito y realizar compras de manera segura. 
            El diseño y la funcionalidad del sitio están optimizados para ofrecer una experiencia de compra intuitiva y agradable.
            </p>
        </div>
        <div className="flex-shrink-0">
          <Image
            className="w-[459px] h-[611px] border bg-cover bg-center shadow-lg"
            src="/img/general/top-view-unrecognizable-hacker-performing-cyberattack-night.jpg"
            alt="Sobre Mi"
            width={459}
            height={611}
          />
        </div>
      </section>

      <section className="flex flex-col items-center p-12 bg-white">
        <h2 className="text-4xl font-bold text-yellow-400 mb-8">TECNOLOGÍAS USADAS</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-center items-center">
          
          <Image src="/img/tecnologias-favoritas/nextjs.png" alt="Next.js logo" width={150} height={150} className="transition-transform transform hover:scale-105" />
          <Image src="/img/tecnologias-favoritas/figma.png" alt="Figma logo" width={150} height={150} className="transition-transform transform hover:scale-105" />
          <Image src="/img/tecnologias-favoritas/tailwind.png" alt="Tailwind CSS logo" width={150} height={150} className="transition-transform transform hover:scale-105" />
          <Image src="/img/tecnologias-favoritas/react.png" alt="React logo" width={150} height={150} className="transition-transform transform hover:scale-105" />
          
        </div>
      </section>

    
    </div>
  );
};

export default About;
