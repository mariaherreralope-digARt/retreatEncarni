import { motion } from 'framer-motion';

import inteligenciaEmocional from '../assets/carreras.png';
import pnl from '../assets/dibujo.png';
import mindfulness from '../assets/deporte-infantil.png';
import estresAnsiedad from '../assets/deporte-infantil.png';
import crecimiento from '../assets/deporte-infantil.png';
import bienestar from '../assets/deporte-infantil.png';




const cursos = [
  {
    image: inteligenciaEmocional,
    title: "Inteligencia Emocional",
    description:
     "Gestiona tus emociones y fortalece tus relaciones.",
  },
  {
    image: pnl,
    title: "PNL (Programación Neurolingüística)",
    description:
     "Transforma creencias limitantes y mejora tu comunicación interna y externa.",
  },
  {
    image: mindfulness,
    title: "Mindfulness",
    description:
    "Entrena la atención plena para reducir estrés y vivir con claridad.",
  },
  {
    image: estresAnsiedad,
    title: "Gestión del Estrés y Ansiedad",
    description:
    "Estrategias prácticas para recuperar calma y enfoque.",
  },
    {
    image: crecimiento,
    title: "Crecimiento Personal & Desarrollo Holístico",
    description:
    "Explora tu propósito y encuentra tu Ikigai para vivir con autenticidad.",
  },
    {
    image: bienestar,
    title: "Bienestar Integral y Hábitos Saludables",
    description:
    "Aprende a nutrir cuerpo, mente y espíritu a través de prácticas conscientes y sostenibles.",
  },

];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const EventCards = () => {
  return (
    <motion.section
      id='cursos'
      className='max-w-7xl mx-auto px-4 py-16'
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Heading */}
      <motion.div
        className='text-center mb-12'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className='text-3xl font-bold mb-4 uppercase'>Cursos</h2>
        <p className='text-sm text-gray-600'>
      Descubre nuestros cursos diseñados para potenciar tu crecimiento personal y bienestar integral.
        </p>
      </motion.div>

      {/* Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {cursos.map((curso, index) => (
          <motion.div
            key={index}
            className='bg-white  shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-300 group'
            custom={index}
            variants={cardVariants}
          >
            <div className='h-56 w-full overflow-hidden'>
              <img
                src={curso.image}
                alt={curso.title}
                className='h-full w-full object-cover group-hover:scale-105 transition-transform duration-500'
              />
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-semibold text-lime-800 mb-3'>{curso.title}</h3>
              <p className='text-gray-600 text-sm'>{curso.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      {/* <motion.div
        className='text-center mt-12'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <button className='hover:bg-red-800 text-white cursor-pointer px-8 py-3 rounded-full font-medium bg-red-700/70 transition-colors relative'>
          Join Us Now
          <div className='absolute -z-10 w-full h-full rounded-full bg-red-800/20 blur-lg top-0'></div>
        </button>
      </motion.div> */}
    </motion.section>
  );
};

export default EventCards;
