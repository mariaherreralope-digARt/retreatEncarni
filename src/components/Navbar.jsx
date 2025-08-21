import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
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
        className="fixed top-0 font-body right-0 left-0 backdrop-blur-lg bg-transparent shadow-sm z-50"
      >
        <div className="w-full mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-10 md:h-20 h-20">
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
                    ? "text-gray-600 after:w-full"
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
            className="hidden md:block bg-btt text-sm text-white px-6 py-2.5  hover:bg-white hover:text-btt hover:border hover:border-btt font-medium uppercase transition-all "
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
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
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
              <div className="container mx-auto px-6 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    onClick={() => {
                      setActiveLink(link.href);
                      setIsMenuOpen(false);
                    }}
                    className={`block text-sm font-medium py-2 ${
                      activeLink === link.href
                        ? "text-yellow-600"
                        : "text-gray-600 hover:text-gray-900"
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
                  className="w-full bg-yellow-600 font-body text-white px-6 py-2.5 rounded-lg hover:bg-yellow-700 font-medium transition-all hover:shadow-lg hover:shadow-yellow-100"
                >
                  Contáctanos
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
