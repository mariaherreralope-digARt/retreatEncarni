import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import logo from '../assets/logo-footer.png';

const footerLinks = {
  'Explora': [
    { name: 'Retiros de bienestar', href: '#' },
    { name: 'Cursos y programas', href: '#' },
    { name: 'Coaching individual', href: '#' },
    { name: 'Testimonios', href: '#' },
  ],
  'Descubre': [
    { name: 'Quiénes somos', href: '#' },
    { name: 'Nuestra filosofía', href: '#' },
    { name: 'Preguntas frecuentes', href: '#' },
    { name: 'Blog', href: '#' },
  ],
  'Conecta': [
    { name: 'Contacto', href: '#' },
    { name: 'Newsletter', href: '#' },
    { name: 'Redes sociales', href: '#' },
    { name: 'Eventos', href: '#' },
  ],
  'Legal': [
    { name: 'Política de privacidad', href: '#' },
    { name: 'Términos y condiciones', href: '#' },
    { name: 'Aviso legal', href: '#' },
  ],
};

const Footer = () => {
  return (
    <footer className=' bg-gradient-to-b from-transparent via-primary/30 to-secondary'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-12'>

          {/* brand column */}
          <div className='lg:col-span-4'>
            <div className='flex gap-2 items-center mb-4'>
              <img
                src={logo}
                alt="Logo Bienestar"
                className="h-12 rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300 object-contain"
              />
              <span className='text-xl font-heading font-bold text-btt'>happy&healthy</span>
            </div>

            <p className='text-gray-600 mb-6 font-body md:w-3/4'>
              Creamos espacios de transformación personal a través de retiros, cursos y coaching uno a uno. Inspírate, crece y vive en equilibrio.
            </p>

            <div className='flex gap-4'>
              <a href="#" className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-200'>
                <FaFacebookF className="size-5" />
              </a>
              <a href="#" className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-btt hover:text-white transition-all duration-200'>
                <FaInstagram className="size-5" />
              </a>
              <a href="#" className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-secondary hover:text-white transition-all duration-200'>
                <FaTiktok className="size-5" />
              </a>
            </div>
          </div>

          {/* footer nav items */}
          <div className='lg:col-span-8'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className='text-lg mb-4 uppercase font-heading text-primary font-bold'>{category}</h3>
                  <ul className='space-y-2'>
                    {links.map((link, index) => (
                      <li key={index}>
                        <a href={link.href} className='text-gray-600 font-body hover:text-gray-900'>
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* footer bottom section */}
        <div className='border-t border-gray-200 mt-12 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-600 font-body text-sm'>
              © {new Date().getFullYear()} happy&healthy. Todos los derechos reservados.
            </p>
            <p className='text-gray-600 text-sm'>
              Web realizada por digARt - María Herrera ✨
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
