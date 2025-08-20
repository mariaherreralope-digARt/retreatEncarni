import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { motion } from "framer-motion";

import testimonial1 from "../assets/testimonial1.jpg"
import testimonial2 from "../assets/testimonial2.jpg";
import testimonial3 from "../assets/testimonial3.png";


const testimonials = [
  {
    id: 1,
    name: " – Mamá de Sofía, 7 años", 
    image: testimonial1,
    text: "Gracias por ayudarnos a sonreír en medio de la tormenta. Esta mochila con los dibujos de José nos acompañó al hospital. Nos dio fuerza y esperanza.",
  },
  {
    id: 2,
    name: "– Lourdes, compradora solidaria",
    image: testimonial2,
    text: "No sabía que una camiseta podía significar tanto. Hoy la uso con orgullo sabiendo que ayudé a alguien.",
  },
  {
    id: 3,
    name: " – Profe Elena, colegio colaborador",
    image: testimonial3,
    text: "José Manuel enseñó a mi hija a correr, hoy su sueño sigue corriendo gracias a ustedes.",
  },

];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-16 px-4 max-w-7xl mx-auto ">
      <motion.div 
        
        className="text-center mb-12"
      >
        <motion.h2 
          
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Lo que dicen quienes han recibido y quienes han dado
        </motion.h2>
        <motion.p 
         
          className="text-gray-600"
        >
          Nuestros niños, sus familias, nuestros donantes… todos tienen algo en común: el corazón lleno.  <br />Aquí compartimos algunos mensajes que nos recuerdan por qué hacemos esto.
        </motion.p>
      </motion.div>
{/* Swiper cards */}
      <motion.div 
        
        className="relative"
        
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper md:mb-12"
          
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id} className='h-full md:py-12 py-4'>
<motion.div 

  whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
  transition={{ type: "spring", stiffness: 300 }}
  className="text-center bg-white p-4 rounded-lg shadow-md h-full flex flex-col"
>

                <motion.div 
                 
                  className="w-24 h-24 mx-auto mb-4"
                  
                >
                  <motion.img
                   
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover "
                  />
                </motion.div>
                <motion.div 
                
                  className="flex justify-center mb-2"
                >
                  {/* {[...Array(5)].map((_, starIndex) => (
                    <motion.span 
                      key={starIndex} 
                     
                      className="text-yellow-600"
                    >
                      ★
                    </motion.span>
                  ))} */}
                </motion.div>
                <motion.h3 
                
                  className="font-semibold text-xl mb-3"
                >
                  {testimonial.name}
                </motion.h3>
                <motion.p 
                  className="text-gray-600"
                > {testimonial.text}
                </motion.p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <motion.div 
        
          className="flex justify-center gap-4 mt-8"
        >
          <motion.button 
         
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-lime-800 hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button 
          
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-lime-800 hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default TestimonialsSection;