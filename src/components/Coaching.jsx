import React from 'react'
import CoachingImg from '../assets/CoachingImg.png'

const Coaching = () => {
  return (
    
      <div className='text-center mb-16 mt-0 pt-0  file:mt-2 text-gray-700 drop-shadow-md'>
        <h2 className='text-2xl text-primary md:text-3xl font-heading mb-0'>COACHING PERSONALIZADO</h2>
        <p className="text-lg text-btt font-body mb-4 mt-6 italic  text-center">Sesiones individuales diseñadas para ayudarte a superar bloqueos, descubrir tu propósito y vivir con sentido. <br />Trabajaremos juntos para alinear mente, corazón y acciones con tu Ikigai, <br/>creando una transformación profunda y un bienestar duradero. </p>
         <img
                  src={CoachingImg}
                  alt="coaching"
                  className=' max-w-xs mx-auto mt-12 h-auto object-cover rounded-tl-[50%] rounded-tr-[50%]'
                />
      </div>
      
               
            
  )
}

export default Coaching
