import { motion } from 'framer-motion';

import heroImage from "../assets/hero-image.png";


const Hero = () => {
  return ( <section
  id='inicio'
  className='relative w-full h-screen flex flex-col md:flex-row justify-between items-center pt-12 pb-6 '
>
  {/* Background Image Wrapper */}
  <div className="absolute inset-0 z-0">
    <div
      className="w-full h-full bg-cover bg-center "
      style={{
        backgroundImage: `url(${heroImage})`
      }}
    >
      {/* Dark Overlay Only on Background */}
<div className="absolute inset-0 z-0 bg-black bg-opacity-50"></div>
    </div>
  </div>

  {/* Foreground Content */}
  <div className="relative z-10 w-full flex flex-col items-stretch gap-8 px-8 md:px-16">

    
    <div >


  {/* CENTER: Headline + Paragraph */}
  <div className='w-full md:w-1/2  md:text-left  space-y-2 md:space-y-6 pt-20 px-10 '>
    <motion.h1 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 1 }}
      className='text-xl font-heading md:text-4xl lg:text-5xl font-bold max-w-md leading-relaxed'
    >
      <span className='text-light sm:text uppercase'>
        Empieza tu transformación
      </span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 1.2 }}
      className='text-slate-300 font-bodytext-md'
    >
      Descubre tu fuerza interior, encuentra claridad  <br /> y crea la vida que mereces.
    </motion.p>
    <motion.form 
    onSubmit={(e) => e.preventDefault()} 
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.2, delay: 1.5 }}
    className='self-center sm:w-[100px] flex-col md:flex-row md:w-auto flex gap-1'
  >
    <input 
      type="email" 
      required
      placeholder='Tu email'
      className='md:w-[350px] sm:w-[100px]  px-6 py-2 border-btt focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-yellow-100 transition-all'
    />
    <button 
      type='submit' 
      className='bg-btt text-white px-6 py-2 hover:text-btt hover:bg-white cursor-pointer transition-all hover:shadow-md hover:text-hover:shadow-btt/90 text-md w-14 text-center'
    >
    →
    </button>
  </motion.form>
  </div>

  {/* RIGHT: Email Form */}
  

</div>


    {/* Right column (placeholder) */}
    <div className='w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12'></div>
  </div>
</section>

  );
};

export default Hero;

