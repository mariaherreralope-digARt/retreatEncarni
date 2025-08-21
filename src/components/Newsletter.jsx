
import { HiArrowRight } from 'react-icons/hi2';


const Newsletter = () => {
  return (
    <section className=' mx-auto bg-gradient-to-b from-primary/90 via-primary/20 to-transparent px-4 sm:px-6 lg:px-8 py-5'>
      <div className='bg-gradient-to-r from-btt via-primary to-secondary overflow-hidden'>

        <div className='relative md:px-16 py-16 px-6 md:py-15'>
          {/* gradient bg */}
          <div >

            <div className='relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12'>
              {/* left content */}
              <div className='text-white max-w-lg text-center md:text-left'>
              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 font-heading'>Mantente conectado, mantente inspirado</h2>
              <p className='text-red-100 text-sm font-body sm:text-base'>Suscríbete a nuestro boletín y recibe en tu correo consejos, reflexiones y novedades sobre retiros, cursos y sesiones de coaching.</p>
              </div>
              {/* right content */}
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-0 '>
              <input type="email" placeholder='Tu dirección de correo' className='w-full bg-white sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4  focus:outline-none' />
              <button className='w-full sm:w-auto cursor-pointer bg-btt text-white px-6 hover:border hover:border-btt hover:bg-white hover:text-btt sm:px-8 py-3 sm:py-4   flex items-center gap-2 font-body'>
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