import { motion } from 'framer-motion';
import aboutImg from "../assets/aboutImg.png";

const AboutMe = () => {
  return (
    <section id='quiensoy' className='max-w-8xl mx-auto px-8 md:px-24 py-16 md:pt-24'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20'>

        {/* LEFT column: Text */}
        <motion.div 
          className='md:w-2/5 w-full space-y-4'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
        >
          <motion.h2 
            className="text-2xl text-primary md:text-3xl font-heading mb-0"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            Encarni Cerrillo
          </motion.h2>

          <motion.h3
            className="text-lg text-btt font-body mb-4 italic"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            PhD y Life Coach
          </motion.h3>

          <motion.p
            className="max-w-3xl mx-auto text-sm md:text-md font-body leading-relaxed text-gray-700 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Para mí, <strong>Happy & Healthy</strong> significa vivir en armonía con uno mismo y con los demás.  
            No se trata solo de bienestar físico, sino de una felicidad auténtica que surge cuando cuidamos nuestras emociones, nuestra mente y nuestra alma.
          </motion.p>

          <motion.p
            className="max-w-3xl mx-auto text-sm md:text-md font-body leading-relaxed text-gray-700 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Soy <strong>Encarni L. Cerrillo, PhD</strong> y Life Coach especializada en Inteligencia Emocional, PNL, Mindfulness, y gestión del estrés y la ansiedad.  
            Mi propósito con <strong>Happy & Healthy</strong> es acompañarte en un viaje de transformación personal, ayudándote a vivir con mayor equilibrio, plenitud y propósito.
          </motion.p>

          <motion.p
            className="max-w-3xl mx-auto text-sm md:text-md font-body leading-relaxed text-gray-700 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Creo firmemente que la verdadera salud y felicidad nacen de dentro: cuando mente, corazón y propósito están alineados.  
            Por eso, mi enfoque se basa en <strong>Ikigai</strong>, ayudándote a descubrir tu razón de ser y a vivir una vida más consciente, plena y alineada con tu verdadero propósito.
          </motion.p>

          <motion.p
            className="max-w-3xl mx-auto text-sm md:text-md font-body leading-relaxed text-gray-700"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Mi misión es guiarte para que encuentres tu equilibrio interior, descubras tu fuerza interior, y crees la vida que mereces, combinando bienestar emocional, mental y espiritual en cada paso de tu camino.
          </motion.p>
        </motion.div>

        {/* RIGHT column: Image */}
        <motion.div
          className='md:w-3/5 w-full'
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
        >
          <img
            src={aboutImg}
            alt="about"
            className='w-full max-w-md mx-auto pl-4 md:pl-0 h-auto object-cover '
          />
        </motion.div>

      </div>
    </section>
  );
};

export default AboutMe;
