import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FiX } from "react-icons/fi";

import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#inicio");
  const [contactFormOpen, setContactFormOpen] = useState(false);

  const navLinks = [
    { href: "#quiensoy", label: "Quien Soy" },
    { href: "#cursos", label: "Cursos" },
    { href: "#retiros", label: "Retiros" },
    { href: "#coaching", label: "Coaching" },
    { href: "#testimonios", label: "Testimonios" },
  ];

  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 font-body right-0 left-0  shadow-sm z-30"
      >
        <div className="w-full backdrop-blur-lg bg-transparent mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-10  h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={() => setActiveLink("#inicio")}
            className="flex items-center mt-4 focus:outline-none focus:ring-0"
          >
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2.8, delay: 0.5 }}
              src={logo}
              alt="Happy & Healthy"
              className="h-40 relative z-10"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.5 + index * 0.1,
                }}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`text-sm uppercase font-body font-light relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:bg-secondary after:transition-all ${
                  activeLink === link.href
                    ? "text-primary after:w-full"
                    : "text-btt hover:text-secondary after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Contact button */}
          <motion.button
            onClick={openContactForm}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.2,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className="hidden md:block bg-btt text-sm text-white px-6 py-2.5  hover:bg-white hover:text-btt hover:border hover:border-btt font-light uppercase transition-all "
          >
            Contacta
          </motion.button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <HiX className="w-8 h-8 bg-btt hover:bg-white hover:border hover:border-btt hover:text-btt text-white rounded-full p-2 transition duration-300" />
            ) : (
              <HiMenu className="w-8 h-8 bg-btt hover:bg-white hover:border hover:border-btt hover:text-btt text-white rounded-full p-2 transition duration-300" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="md:hidden bg-gray-300 border-t border-gray-100 py-4"
            >
              <div className="container text-center mx-auto px-6 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    onClick={() => {
                      setActiveLink(link.href);
                      setIsMenuOpen(false);
                    }}
                    className={`block text-sm font-medium font-body py-2 ${
                      activeLink === link.href
                        ? "text-btt"
                        : "text-gray-600hover:text-gray-900"
                    }`}
                    href={link.href}
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    openContactForm();
                  }}
                  className="w-auto bg-btt font-body text-white px-6 py-2.5 hover:bg-white hover:border hover:border-btt hover:text-btt font-medium transition-all  "
                >
                  Contáctanos
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
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

      </motion.nav>
    </>
  );
};

export default Navbar;
