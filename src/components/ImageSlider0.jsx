import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { BsPauseFill, BsPlayFill, BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import 'swiper/css';
import 'swiper/css/navigation';

import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";  
import card4 from "../assets/card4.jpg";
import card5 from "../assets/card5.jpg";
import card6 from "../assets/card6.jpg";
import card7 from "../assets/card7.jpg";  
import card8 from "../assets/card8.jpg";
import card9 from "../assets/card9.jpg";
import card10 from "../assets/card10.jpg";
import card11 from "../assets/card11.jpg";
import card12 from "../assets/card12.jpg";
import card13 from "../assets/card13.jpg";
import card14 from "../assets/card14.jpg";
import card15 from "../assets/card15.jpg";
import card16 from "../assets/card16.jpg";

const slides = [
  {
    image: card1,
    title: "Siempre en nuestros corazones",
    description: "Una lucha y un sueño",
  },
  {
    image: card2,
    title: "Jugador de Futbol Sala",
    description: "Su pasión por el fútbol sala le sirvió como su mejor terapia.",
  },
  {
    image: card3,
    title: "Cuando el dibujo se convierte en vida",
    description: "El dibujo fue su forma de expresión, su manera de canalizar emociones y esperanzas.",
  },
  {
    image: card4,
    title: "Apasionado por sus alumnos",
    description: "Mutuo amor entre un profesor y sus alumnos, una conexión que trasciende la cancha.",
  },
  {
    image: card5,
    title: "Entrenador y su equipo",
    description: "Unidos por la pasión y el amor al fútbol sala.",
  },
  {
    image: card6,
    title: "Homenajeador de sus idolos",
    description: "Acogiendo y homenajeado a su valorado Javier Lozano, entrenador nacional de fútbol sala.",
  },
  {
    image: card7,
     title: "Celebrando entre compañeros y amigos",
    description: "Juntos celebrando la vida, el fútbol sala y la amistad que los une.",
   
  },
  {
    image: card8,
    title: "Impartiendo formación",
    description: "Continuando su legado, impartiendo formación y compartiendo su pasión por el fútbol sala.",
  },
  {
    image: card9,
    title: "Orador y profesor",
    description: "Participación en un curso de formación de entrenadores.",
  },
  {
    image: card10,
    title: "Homenajes en vida",
    description: "Torneo en Castro del Río, entrega de trofeos.",
  },
  {
    image: card11,
    title: "Homenajes en vida",
    description: "Reconocimiento a la trayectoria de un gran entrenador.",
  },
  {
    image: card12,
    title: "Entrenador de la selección cordobesa",
    description: "Un líder en la cancha, un ejemplo fuera de ella.",
  },
  {
    image: card13,
    title: "Un gracias especial",
    description: "Reconocimiento a su dedicación y amor por el fútbol sala.",
  },
  {
    image: card14,
    title: "Seleccionador de Benjamines",
    description: "Un formador de talentos desde la base.",
  },
  {
    image: card15,
    title: "Entregado a sus alumnos",
    description: "Un profesor que dejó huella en cada uno de ellos",
  },
  {
    image: card16,
    title: "Nunca te olvidaremos",
    description: "Nunca te olvidaremos.",
  }
];

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const swiperRef = useRef(null);

  const toggleAutoplay = () => {
    if (!swiperRef.current) return;
    if (isPaused) {
      swiperRef.current.autoplay.start();
    } else {
      swiperRef.current.autoplay.stop();
    }
    setIsPaused(!isPaused);
  };

  return (
    <section
      id='retiros'
      className='relative  mx-24 h-[500px] overflow-hidden flex items-center'
    >
      <button className='absolute ml-10 top-1/2  -translate-y-1/2 z-20
       bg-btt hover:bg-white hover:border hover:border-btt hover:text-btt text-white
       rounded-full p-3 
       transition duration-300'
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <BsChevronLeft className="w-6 h-6" />
      </button>

      {/* Swiper Carousel */}
      <div className="relative flex-1 h-full">
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={0}
        slidesPerView={1}
        loop
        speed={2000}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="absolute top-0 left-0 w-full h-full z-0"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      {/* End Swiper Carousel */}
      
    {/* Overlay */}
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 bg-black/40">
  <AnimatePresence mode="wait">
    <motion.div
      key={activeIndex}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="max-w-3xl"
    >
      <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
        {slides[activeIndex].title}
      </h2>
      <p className="text-white text-lg md:text-xl">
        {slides[activeIndex].description}
      </p>
    </motion.div>
  </AnimatePresence>

  {/* Pause/Play Button - centered below text */}
  <div className="mt-6 flex justify-center">
    <button
      onClick={toggleAutoplay}
      className="bg-white/30 hover:bg-white/60 text-black rounded-full p-3 transition duration-300"
      title={isPaused ? 'Reanudar presentación' : 'Pausar presentación'}
    >
      {isPaused ? <BsPlayFill className="w-6 h-6" /> : <BsPauseFill className="w-6 h-6" />}
    </button>
  </div>
</div>


      
      {/* <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-white/60 text-black rounded-full p-3 transition duration-300"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <BsChevronLeft className="w-6 h-6" />
      </button> */}
      <div>
       <button
        className="absolute right-0 mr-10 top-1/2  -translate-y-1/2 z-20
       bg-btt hover:bg-white hover:border hover:border-btt hover:text-btt text-white 
       rounded-full p-3 
       transition duration-300"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <BsChevronRight className="w-6 h-6" />
      </button>
</div>
     {/* <div className="mt-6 flex justify-center"> */}
  {/* <button
    onClick={toggleAutoplay}
    className="bg-white/30 hover:bg-white/60 text-black rounded-full p-3 transition duration-300"
    title={isPaused ? 'Reanudar presentación' : 'Pausar presentación'}
  >
    {isPaused ? <BsPlayFill className="w-6 h-6" /> : <BsPauseFill className="w-6 h-6" />}
  </button> */}
{/* </div> */}

    </section>
  );
};

export default ImageSlider;

