import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import intelEmoc from '../assets/intelEmoc.png';
import pnl from '../assets/pnl.png';
import mindfull from '../assets/mindfull.png';
import gestion from '../assets/gestion.png';
import crecimiento from '../assets/crecimiento.png';
import bienestar from '../assets/bienestar.png';


const OptionsCards = () => {
  const levels = [
  {
    icon: intelEmoc,  
    title: "Inteligencia Emocional",
    description:
     "Gestiona tus emociones y fortalece tus relaciones.",
    overlayColor: "rgba(255, 243, 228, 0.7)",  
  },

  {
    icon: mindfull,
    title: "Mindfulness",
    description:
    "Entrena la atención plena para reducir estrés y vivir con claridad.",
    overlayColor: "rgba(255, 243, 228, 0.7)",  
  },

  {
    icon: gestion,  
    title: "Gestión del Estrés y Ansiedad",
    description:
    "Estrategias prácticas para recuperar calma y enfoque.",
    overlayColor: "rgba(255, 243, 228, 0.7)",   
  },
  {
    icon: crecimiento,
    title: "Crecimiento Personal & Desarrollo Holístico",
    description:
    "Explora tu propósito y encuentra tu Ikigai para vivir con autenticidad.",
    overlayColor: "rgba(255, 243, 228, 0.7)",   
  },
  {
    icon: bienestar,
   title: "Bienestar Integral y Hábitos Saludables",
    description:
    "Aprende a nutrir cuerpo, mente y espíritu a través de prácticas conscientes y sostenibles.",
    overlayColor: "rgba(255, 243, 228, 0.7)",  
  },
    {
    icon: pnl,
    title: "PNL (Programación Neurolingüística)",
    description:
     "Transforma creencias limitantes y mejora tu comunicación interna y externa.",
    overlayColor: "rgba(255, 243, 228, 0.7)",  
  },

];


  const levelsRef = useRef(null);
  const isInView = useInView(levelsRef, { once: true, margin: '-100px' });

  return (
    <section
    
      id='cursos'
      className='max-w-7xl mx-auto px-14 py-16 bg-cover bg-center relative opacity-90'
      //  style={{ backgroundImage: `url(${backgroundImg})` }} 
    >
      {/* Heading */}
      <div className='text-center mb-16 mt-0 pt-0  file:mt-2 text-gray-700 drop-shadow-md'>
        <h2 className='text-2xl text-primary md:text-3xl font-heading mb-0'>CURSOS</h2>
        <p className="text-lg text-btt font-body mb-4 italic ">Nuestros cursos están diseñados para potenciar tu crecimiento personal y bienestar integral. </p>
      </div>
  {/* Numbered circle */}

      {/* <motion.div
  initial={{ opacity: 0, x: -200 }}
  animate={isInView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="absolute top-8 left-52  z-20"
>

  <div className="bg-yellow-600/70 text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold shadow-md">
    1
  </div>
  
</motion.div> */}


      {/* Levels grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8' ref={levelsRef}>
        {levels.map((level, index) => (
          <motion.div
            key={index}
            className='relative flex flex-col text-center items-center justify-center p-6  overflow-hidden shadow-lg '
            style={{ backgroundColor: 'transparent' }} // so background is transparent but overlay shows
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.15 }}
          >
            {/* Overlay */}
            <div
              className='absolute inset-0'
              style={{
                backgroundColor: level.overlayColor,
                backdropFilter: 'blur(8px)',  // optional: blur behind overlay for better contrast
                WebkitBackdropFilter: 'blur(8px)',
                zIndex: 0,
              }}
            />

            {/* Content above overlay */}
            <motion.div
              className='relative w-16 h-16 mt-6 mb-6 flex items-center justify-center z-10 rounded-tr-3xl rounded-bl-3xl shadow-lg bg-btt/40'
              // style={{ backgroundColor:  "#FF857A"   }}
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.15, type: 'spring', stiffness: 500 }}
            >
              <motion.img
                src={level.icon}
                alt={`${level.title} icon`}
                className="w-36 h-36 object-contain"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                whileHover={{ scale: 1.2, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.15 + 0.2 }}
              />
            </motion.div>

            <motion.h3
              className='text-2xl font-medium font-heading mb-3 relative z-10 text-primary drop-shadow-md'
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
            >
              {level.title}
            </motion.h3>

            <motion.p
              className='text-gray-700 font-body text-center relative z-10 drop-shadow-md max-w-3xl mx-auto text-sm md:text-md  leading-relaxed  mb-6'
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
            >
              {level.description}
            </motion.p>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <div className='text-center mt-12'>
        <motion.button
          className=' text-white cursor-pointer px-8 py-3  font-medium  relative  bg-btt text-sm       uppercase hover:bg-white hover:text-btt hover:border hover:border-btt font-body'
          // whileHover={{ scale: 1.08, backgroundColor: '#b91c1c' }}
          // transition={{ duration: 0.15, type: 'spring', stiffness: 500 }}
        >
          Inscríbete ahora
          <div className='absolute -z-10 w-full h-full   blur-lg top-0'></div>
        </motion.button>
      </div>
    </section>
  );
};

export default OptionsCards;
