import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import logo from '../assets/logo-dibujo.png';

const footerLinks = {
  'Conócenos': [
    { name: 'Nuestra historia', href: '#' },
    { name: 'El legado de José Manuel', href: '#' },
    { name: 'Misión y valores', href: '#' },
    { name: 'Preguntas frecuentes', href: '#' },
  ],
  'Nuestro impacto': [
    { name: 'Historias reales', href: '#' },
    { name: 'Proyectos deportivos', href: '#' },
    { name: 'Niños beneficiados', href: '#' },
    { name: 'Transparencia', href: '#' },
  ],
  'Súmate': [
    { name: 'Tienda solidaria', href: '#' },
    { name: 'Hazte donante mensual', href: '#' },
    { name: 'Eventos y actividades', href: '#' },
    { name: 'Colabora con tu empresa', href: '#' },
  ],
  'Contacto': [
    { name: 'Escríbenos', href: '#' },
    { name: 'Redes sociales', href: '#' },
    { name: 'Newsletter', href: '#' },
    { name: 'Prensa y medios', href: '#' },
  ],
};

const Footer = () => {
  return (
    <footer className='bg-gray-50'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-12'>

          {/* brand column */}
          <div className='lg:col-span-4'>
            <div className='flex gap-2 items-center mb-4'>
              <img
                src={logo}
                alt="Logo Fábrica de Sueños y Valores"
                className="h-12 rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300 object-contain"
              />
              <span className='text-xl font-medium text-lime-800'>Fábrica de Sueños y Valores</span>
            </div>

            <p className='text-gray-600 mb-6 md:w-3/4'>
              Transformamos dibujos en esperanza. Ayudamos a niños con cáncer a través del legado de José Manuel y fomentamos el deporte como motor de vida. Gracias por ser parte de este sueño.
            </p>

            <div className='flex gap-4'>
              <a href="#" className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-lime-800 hover:text-white transition-all duration-200'>
                <FaFacebookF className="size-5" />
              </a>
              <a href="#" className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-lime-800 hover:text-white transition-all duration-200'>
                <FaInstagram className="size-5" />
              </a>
              <a href="#" className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-lime-800 hover:text-white transition-all duration-200'>
                <FaTiktok className="size-5" />
              </a>
            </div>
          </div>

          {/* footer nav items */}
          <div className='lg:col-span-8'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className='text-lg mb-4 uppercase text-lime-800 font-bold'>{category}</h3>
                  <ul className='space-y-2'>
                    {links.map((link, index) => (
                      <li key={index}>
                        <a href={link.href} className='text-gray-600 hover:text-gray-900'>
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
            <p className='text-gray-600 text-sm'>
              © {new Date().getFullYear()} Fábrica de Sueños y Valores. Todos los derechos reservados.
            </p>
            <p className='text-gray-600 text-sm'>
              Con amor y propósito desde Córdoba ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
