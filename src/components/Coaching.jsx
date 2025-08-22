import React from 'react';
import CoachingImg from '../assets/CoachingImg.png';
import { useModal } from "./ModalContext";
import GlobalModal from "./GlobalModal"; 
import { motion } from "framer-motion";

const Coaching = () => {
  const { openModal } = useModal();

  const handleOpenContactForm = () => {
    openModal(<GlobalModal />);
  };

  return (
    <section id="coaching" className='max-w-7xl mx-auto px-14 py-16 text-center'>
      
      {/* Heading */}
      <motion.div
        className='mb-16 mt-16 pt-0 text-gray-700 drop-shadow-md'
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className='text-2xl text-primary md:text-3xl font-heading mb-0'>
          CoachinG PersonalizadO
        </h2>
        <motion.p
          className="text-lg text-btt font-body mb-4 mt-4 italic text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Sesiones individuales diseñadas para ayudarte a superar bloqueos, descubrir tu propósito y vivir con sentido. <br />
          Trabajaremos juntos para alinear mente, corazón y acciones con tu Ikigai, <br/>
          creando una transformación profunda y un bienestar duradero.
        </motion.p>
      </motion.div>

      {/* Image */}
      <motion.img
        src={CoachingImg}
        alt="coaching"
        className='max-w-xs mx-auto mt-12 h-auto object-cover rounded-tl-[50%] rounded-tr-[50%]'
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* Button */}
      <div className='text-center mt-12'>
        <motion.button
          onClick={handleOpenContactForm}
          className='text-white cursor-pointer px-8 py-3 font-medium relative bg-btt text-sm uppercase hover:bg-white hover:text-btt hover:border hover:border-btt font-body'
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          Reservar mi sesión
          <div className='absolute -z-10 w-full h-full blur-lg top-0'></div>
        </motion.button>
      </div>
    </section>
  );
};

export default Coaching;
