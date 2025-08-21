import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { motion } from "framer-motion";

// import testimonial1 from "../assets/testimonial1.jpg"
// import testimonial2 from "../assets/testimonial2.jpg";
// import testimonial3 from "../assets/testimonial3.png";


const testimonials = [
  {
    id: 1,
    name: " – Zay Nuba, guionista y directora de proyectos", 
    // image: testimonial1,
    text: "Encarna es la persona que quiers tener cerca en cualquier proyecto en el que te embarques por su optimismo y fuerza.",
  },
  {
    id: 2,
    name: "– Martín Tello Castro, general manager y senior executive",
    // image: testimonial2,
    text: "Comprometida, sensible, empática, capaz de ponerse en la piel de aquél a quien ayuda, receptiva y permeable a nuestros enfoques. En definitiva capaz de entender tu situación, por lo que propone soluciones a tu medida y las particulariza a tus necesidades concretas.",
  },
  {
    id: 3,
    name: " – Jose Manuel",
    // image: testimonial3,
    text: "Encarni, dos semanas después de haber acabado mi programa de coaching reafirmo que ha sido una de las mejores inversiones de mi vida. Me encuentro lleno de energía, vitalidad y en el trabajo mi rendimiento ha mejorado. Soy más feliz y así lo demuestro. Muchas gracias!!!",
  },

];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-16 px-14  inset-0 z-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent max-w-7xl mx-auto ">
      <motion.div 
        
        className="text-center mb-12"
      >
        <motion.h2 
          
          className="text-2xl text-primary md:text-3xl font-heading mb-0"
        >
          Voces de Transformación
        </motion.h2>
        <motion.p 
         
          className="text-lg text-btt font-body mb-4 italic"
        >
          A través de retiros, cursos y coaching uno a uno, <br />nuestra comunidad ha encontrado claridad, equilibrio y crecimiento duradero.
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
  className="text-center bg-transparent border border-secondary p-4  shadow-md h-full flex flex-col"
>
{/* 
                <motion.div 
                 
                  className="w-24 h-24 mx-auto mb-4"
                  
                > */}
                  {/* <motion.img
                   
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover "
                  /> */}
                {/* </motion.div> */}
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
                
                  className="font-semibold text-btt font-heading text-xl mb-3"
                >
                  {testimonial.name}
                </motion.h3>
                <motion.p 
                  className="text-slate-100 font-body drop-shadow-sm"
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