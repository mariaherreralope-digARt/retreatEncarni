
import { HiArrowRight } from 'react-icons/hi2';


const Newsletter = () => {
  return (
    <section className=' mx-auto px-4 sm:px-6 lg:px-8 py-5'>
      <div className='bg-gradient-to-r from-yellow-500 via-emerald-300600 to-emerald-500 rounded-2xl overflow-hidden'>

        <div className='relative md:px-16 py-16 px-6 md:py-15'>
          {/* gradient bg */}
          <div >

            <div className='relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12'>
              {/* left content */}
              <div className='text-white max-w-lg text-center md:text-left'>
              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 '>Suscríbete a nuestro boletín</h2>
              <p className='text-red-100 text-sm sm:text-base'>¿Quieres conocer cómo cambia una vida gracias a ti? Suscríbete a nuestro boletín mensual y sé parte de este sueño en construcción.</p>
              </div>
              {/* right content */}
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-0 '>
              <input type="email" placeholder='Tu dirección de correo' className='w-full bg-white sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl = sm:rounded-r-none focus:outline-none' />
              <button className='w-full sm:w-auto cursor-pointer bg-yellow-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-lg flex items-center gap-2'>
                <span>Conectar</span>
                <HiArrowRight className="size-5" />
              </button>
            </div>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  )
}

export default Newsletter