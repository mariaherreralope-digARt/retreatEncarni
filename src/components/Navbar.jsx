import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";


import { useModal } from "./ModalContext";
import GlobalModal from "./GlobalModal"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#inicio");

  const { openModal } = useModal();

  const navLinks = [
    { href: "#quiensoy", label: "Quien Soy" },
    { href: "#cursos", label: "Cursos" },
    { href: "#retiros", label: "Retiros" },
    { href: "#coaching", label: "Coaching" },
    { href: "#testimonios", label: "Testimonios" },
  ];

  const handleOpenContactForm = () => {
    openModal(<GlobalModal />);
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 font-body right-0 left-0 shadow-sm z-30"
      >
        <div className="w-full backdrop-blur-lg bg-transparent mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-10 h-20">
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

          {/* Contact button (desktop) */}
          <motion.button
            onClick={handleOpenContactForm}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.2,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className="hidden md:block bg-btt text-sm text-white px-6 py-2.5 hover:bg-white hover:text-btt hover:border hover:border-btt font-light uppercase transition-all"
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
                    handleOpenContactForm();
                  }}
                  className="w-auto bg-btt font-body text-white px-6 py-2.5 hover:bg-white hover:border hover:border-btt hover:text-btt font-medium transition-all"
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
