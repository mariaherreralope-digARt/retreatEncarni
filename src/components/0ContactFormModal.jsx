import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";

const ContactFormModal = ({ isOpen, onClose }) => {
  return (
    
        
      <AnimatePresence>
        {isOpen && (
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
   
  );
};

export default ContactFormModal;