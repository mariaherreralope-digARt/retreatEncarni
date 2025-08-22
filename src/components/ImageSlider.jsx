import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { BsPauseFill, BsPlayFill, BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import 'swiper/css';
import 'swiper/css/navigation';

import { useModal } from "./ModalContext";
import GlobalModal from "./GlobalModal";

import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import card6 from "../assets/card6.png";
import card7 from "../assets/card7.png";
import card8 from "../assets/card8.png";

const slides = [
  { image: card1, title: "Bienvenid@ a la Experiencia", description: "Sumérgete en un retiro pensado para ti, donde cada detalle está diseñado para tu bienestar y crecimiento personal." },
  { image: card2, title: "Mindfulness en la Naturaleza", description: "Descubre prácticas de atención plena que te ayudarán a calmar la mente y disfrutar del presente en un entorno único." },
  { image: card3, title: "Coaching Transformacional", description: "Recibe acompañamiento profesional para aclarar tus metas, desbloquear tu potencial y reconectar con tu propósito." },
  { image: card4, title: "Bienestar Integral", description: "Integra movimiento consciente, ejercicios de respiración y hábitos saludables que equilibran cuerpo y espíritu." },
  { image: card5, title: "Energía Renovada", description: "Libérate del estrés cotidiano y recarga tu vitalidad rodeado de la serenidad de Cabo de Gata." },
  { image: card6, title: "Conexión Profunda", description: "Vive momentos de silencio, introspección y contacto con la naturaleza que fortalecen tu equilibrio interior." },
  { image: card7, title: "Comunidad y Apoyo", description: "Comparte la experiencia con personas afines, creando lazos significativos en un espacio seguro y enriquecedor." },
  { image: card8, title: "Regresa Transformad@", description: "Llévate contigo herramientas prácticas, paz interior y una nueva visión para aplicar en tu vida diaria." },
];

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const swiperRef = useRef(null);
  const { openModal } = useModal();

  const toggleAutoplay = () => {
    if (!swiperRef.current) return;
    isPaused ? swiperRef.current.autoplay.start() : swiperRef.current.autoplay.stop();
    setIsPaused(!isPaused);
  };

  const handleOpenContactForm = () => openModal(<GlobalModal />);

  return (
    <section id="retiros" className="relative mx-4 md:mx-24 py-12">

    {/* Header */}
      <motion.div
        className="text-center mb-10 mt-16 pt-0 text-gray-700 drop-shadow-md"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl md:text-3xl font-heading text-primary mb-0">
          RetiroS
        </h1>
        <motion.p
          className="text-lg md:text-xl font-body text-btt mb-4 mt-4 italic"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Sumérgete en uno de nuestros retiros, donde cada experiencia está diseñada para inspirar calma, renovación y crecimiento personal.
        </motion.p>
      </motion.div>

      {/* Slider */}
      <div className="relative h-[350px] flex items-center group">

        {/* Navigation */}
        <button
          className="absolute md:-right-12 right-14 mt-48 md:mt-0 md:top-1/2 transform -translate-y-1/2 z-20 bg-primary hover:bg-white hover:border hover:border-primary hover:text-primary text-white rounded-full p-2 transition duration-300"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <BsChevronRight className="w-6 h-6" />
        </button>
        <button
          className="absolute md:-left-12 left-14 mt-48 md:mt-0 md:top-1/2 transform -translate-y-1/2 z-20 bg-primary hover:bg-white hover:border hover:border-primary hover:text-primary text-white rounded-full p-2 transition duration-300"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <BsChevronLeft className="w-6 h-6" />
        </button>

        {/* Swiper */}
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

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-700/40 z-10 flex flex-col items-center justify-center text-center px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="max-w-3xl"
            >
              <h2 className="text-slate-100 font-heading mt-2 md:mt-0 text-lg md:text-3xl font-bold mb-4">
                {slides[activeIndex].title}
              </h2>
              <p className="text-slate-300 text-md md:text-xl font-body">
                {slides[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Pause/Play */}
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
      </div>

      {/* Upcoming Retreat Info */}
      <motion.div
        className="text-center mb-10 mt-4 text-gray-700 drop-shadow-md"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2 className='text-2xl text-primary md:text-3xl font-heading mb-6 mt-16'>
          PróximO RetirO
        </h2>
        <h1 className="text-2xl md:text-3xl font-heading text-primary mb-2">
          🌿 Experiencia Bienestar Consciente 🌿
        </h1>
        <p className="text-lg md:text-xl text-btt font-body italic mb-6">
          Huesca, Alquézar | 5 al 7 de Septiembre
        </p>
        <p className="text-md md:text-lg text-gray-700 font-body mb-6">
          Únete a nuestro retiro guiado por un <strong>Life Wellness Coach</strong> y vive tres días de reconexión, mindfulness y bienestar integral.
        </p>
        <ul className="text-gray-700 font-body space-y-3 mb-8">
          <li>✨ Prácticas de mindfulness en la naturaleza</li>
          <li>✨ Ejercicios de bienestar integral</li>
          <li>✨ Momentos de introspección y conexión profunda</li>
          <li>✨ Herramientas prácticas para tu día a día</li>
        </ul>
      </motion.div>


      {/* CTA Button */}
      <div className="text-center mt-12">
        <motion.button
          onClick={handleOpenContactForm}
          className="relative px-8 py-3 text-white font-medium bg-btt text-sm uppercase font-body hover:bg-white hover:text-btt hover:border hover:border-btt cursor-pointer"
        >
          Reserva tu lugar
          <div className="absolute -z-10 w-full h-full blur-lg top-0"></div>
        </motion.button>
      </div>
    </section>
  );
};

export default ImageSlider;
