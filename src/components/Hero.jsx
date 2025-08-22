import { motion } from 'framer-motion';
import heroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <section
      id='inicio'
      className='relative w-full h-screen flex flex-col md:flex-row justify-between items-center pt-12 pb-6'
    >
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {/* Dark Overlay Only on Background */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/70 to-transparent"></div>
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full flex flex-col items-stretch gap-8 px-8 md:px-16">
        {/* Center: Headline + Paragraph */}
        <div className='w-full md:w-1/2 space-y-2 pt-20 px-10'>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2 }}
            className='text-4xl font-heading md:text-5xl lg:text-7xl font-bold text-light md:leading-relaxed'
          >
            <span className="block">Empieza tu</span>
            <span className="block">transformación</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className='text-slate-300 font-body pb-7'
          >
            Descubre tu fuerza interior, encuentra claridad  <br /> y crea la vida que mereces.
          </motion.p>

          <motion.form
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className='self-center sm:w-[100px] flex-col md:flex-row md:w-auto flex gap-1'
          >
            <input 
              type="email" 
              required
              placeholder='Tu email'
              className='md:w-[350px] sm:w-[100px] px-6 py-2 border-btt focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-yellow-100 transition-all'
            />
            <button 
              type='submit' 
              className='bg-btt text-white px-6 py-2 hover:text-btt hover:bg-white cursor-pointer transition-all hover:shadow-md hover:shadow-btt/90 text-md w-14 text-center'
            >
              →
            </button>
          </motion.form>
        </div>

        {/* Right column (placeholder / could add image with hover effect) */}
        <motion.div
          className='w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12'
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
        >
          {/* Optional image or content */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
