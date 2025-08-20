import React from 'react';
import { motion } from 'framer-motion';

import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";

const products = [
  {
    image: product1,
    title: "Polo",
    // description: "Soft cotton t-shirt with an astrology-inspired design.",
    price: "€24.99",
    link: "/product/cosmic-tee"
  },
  {
    image: product2,
    title: "Taza",
    // description: "11oz ceramic mug featuring sacred symbols in gold.",
    price: "€5.50",
    link: "/product/geometry-mug"
  },
  {
    image: product3,
    title: "Camiseta",
    // description: "A beautifully designed journal to align your thoughts.",
    price: "€19.90",
    link: "/product/abundance-journal"
  },
  {
    image: product4,
    title: "Bolsa de Tela",
    // description: "Eco-friendly cotton tote with spiritual artwork.",
    price: "€17.00",
    link: "/product/high-vibes-tote"
  },
  {
    image: product5,
    title: "Sudadera Adulto",
    // description: "Minimalist wall art to inspire inner clarity.",
    price: "€12.99",
    link: "/product/third-eye-poster"
  },
  {
    image: product6,
    title: "Packs Regalo Solidario",
    // description: "Coleccion de productos con el alma de José Manuel.",
    price: "€159.99",
    // link: "/product/chakra-hoodie"
  }
];

const PODProducts = () => {
  return (
    <section id='tiendasolidaria' className='bg-white w-full py-20 container mx-auto px-4 sm:px-6 lg:px-8'>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='w-full text-center'
      >
        <h2 className='text-3xl md:text-4xl font-bold mb-6'>Regala productos que sanan. Compra con propósito.</h2>
        <p className='text-gray-600 mb-12'>Cada compra ayuda a un niño a recibir tratamiento, atención emocional y una razón para sonreír. <br />Nuestros productos llevan el alma de José Manuel en cada trazo. Son más que objetos: son símbolos de amor y lucha.</p>
      </motion.div>

      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        {products.map((product, index) => (
          <motion.div
            key={index}
            className='bg-yellow-200/30 rounded-2xl overflow-hidden shadow-md group transition-transform hover:scale-[1.02] duration-300'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: 'spring', stiffness: 100, damping: 16 }}
          >
            <div className='w-full h-60 bg-gray-100'>
              <img src={product.image} alt={product.title} className='w-full h-full object-cover' />
            </div>
            <div className='p-4'>
              <h3 className='text-lg font-semibold mb-1 text-emerald-300'>{product.title}</h3>
              <p className='text-sm text-gray-500 mb-3'>{product.description}</p>
              <div className='flex justify-between items-center'>
                <span className='text-yellow-500 font-bold'>{product.price}</span>
                <a
                  href={product.link}
                  className='text-sm bg-red-500 text-white px-4 py-1.5 rounded-full hover:bg-red-700 transition'
                >
                  Comprar
                </a>
                
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PODProducts;
