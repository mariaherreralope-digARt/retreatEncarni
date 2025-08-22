import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";


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

const [contactFormOpen, setContactFormOpen] = useState(false);
const openContactForm = () => setContactFormOpen(true);
const closeContactForm = () => setContactFormOpen(false);

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
        <h2 className='text-2xl text-primary md:text-3xl font-heading mb-0'>CursoS</h2>
        <p className="text-lg text-btt font-body mb-4 mt-4 italic ">Nuestros cursos están diseñados para potenciar tu crecimiento personal y bienestar integral. </p>
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
        onClick={openContactForm}
          className=' text-white cursor-pointer px-8 py-3  font-medium  relative  bg-btt text-sm       uppercase hover:bg-white hover:text-btt hover:border hover:border-btt font-body'
          // whileHover={{ scale: 1.08, backgroundColor: '#b91c1c' }}
          // transition={{ duration: 0.15, type: 'spring', stiffness: 500 }}
        >
          Inscríbete ahora
          <div className='absolute -z-10 w-full h-full   blur-lg top-0'></div>
        </motion.button>
      </div>
            {/* Contact Form Modal */}
      <AnimatePresence>
        {contactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 200,
                duration: 0.8,
              }}
              className="bg-white dark:bg-secondary/50  shadow-xl w-full max-w-md p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-heading text-gray-600 dark:text-gray-100">
                  Contacta con Nosotros
                </h1>
                <button
                  onClick={closeContactForm}
                  aria-label="Close contact form"
                >
                  <FiX className="w-6 h-6 text-gray-00 dark:text-gray-100" />
                </button>
              </div>

              {/* Input Forms */}
              <form
                action="https://formsubmit.co/mariaherreralope@gmail.com"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Gracias por tu mensaje. Nos pondremos en contacto pronto."
                />

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-body font-medium text-gray-800 dark:text-gray-100 mb-1"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Tu Nombre"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-secondary focus:border-secondary bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-1"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Tu Correo Electrónico"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-secondary focus:border-secondary bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-1"
                  >
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    id="message"
                    placeholder="¿Cómo podemos ayudarte?"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-secondary focus:border-secondary bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <motion.button className="w-full px-4 py-2 text-white bg-gradient-to-r from-btt to-primary hover:from-primary hover:to-btt transition-all duration-300 font-body ">
                  Enviar Mensaje
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OptionsCards;
