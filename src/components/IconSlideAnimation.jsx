
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'


import sponsor9 from "../assets/Sponsor-9.png"
import sponsor2 from "../assets/Sponsor-2.png"
import sponsor3 from "../assets/Sponsor-3.png"
import sponsor4 from "../assets/Sponsor-4.png"
import sponsor5 from "../assets/Sponsor-5.png"
import sponsor6 from "../assets/Sponsor-6.png"
import sponsor7 from "../assets/Sponsor-7.png"
import sponsor8 from "../assets/Sponsor-8.png"





const IconSlideAnimation = () => {
  const icons = [
    { src: sponsor9, label: 'Sponsor 9' },
    { src: sponsor2, label: 'Sponsor 2' },
    { src: sponsor3, label: 'Sponsor 3' },
    { src: sponsor4, label: 'Sponsor 4' },
    { src: sponsor5, label: 'Sponsor 5' },
    { src: sponsor6, label: 'Sponsor 6' },
    { src: sponsor7, label: 'Sponsor 7' },
    { src: sponsor8, label: 'Sponsor 8' },
  ];

  const iconsRef = useRef(null);
  const isInView = useInView(iconsRef, { once: true, margin: '-100px' });

  return (
    <div className='w-full overflow-hidden container mx-auto py-10 flex sm:flex-row flex-col gap-7 sm:items-center items-start'>
      {/* Left-side text */}
      <div className='w-[300px] shrink-0 px-5 text-gray-700 border-l-4 border-yellow-600 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left leading-snug'>
        Gracias al compromiso y la generosidad de empresas, instituciones y aliados que creen, como nosotros, en un mundo más solidario para los niños con cáncer.
      </div>

      {/* Scrolling icons */}
      <div className='flex animate-marquee whitespace-nowrap' ref={iconsRef}>
        {[...icons, ...icons].map((icon, index) => (
          <motion.div
            key={index}
            className='mx-7 group relative flex flex-col items-center'
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.08 }}
            whileHover={{ scale: 1.15 }}
          >
            <motion.img
              src={icon.src}
              alt={icon.label}
className='w-20 h-20 sm:w-28 sm:h-28 grayscale opacity-70 transition-all'

              whileHover={{ filter: 'grayscale(0)', opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <motion.span
              className='text-xs text-gray-600 mt-2 opacity-0 transition-opacity'
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {icon.label}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IconSlideAnimation;