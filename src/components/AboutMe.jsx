import aboutImg from "../assets/aboutImg.png";

const AboutMe = () => {
  return (
    <section id='about' className='max-w-7xl mx-auto px-8 md:px-24 py-16 md:py-24'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20'>

        {/* LEFT column: Text */}
        <div className='md:w-2/5 w-full'>
          {/* <p className='text-green-800 font-semibold'>ABOUT ME</p> */}
              <h2 className="text-2xl text-primary md:text-3xl font-heading mb-0">happy & healthy</h2>
              <h3 className="text-lg text-btt font-body mb-4 italic ">Tu camino hacia el Ikigai</h3>
      <p className="max-w-3xl mx-auto text-sm md:text-md font-body leading-relaxed text-gray-700 mb-6">
        Para mí, <strong>Happy & Healthy</strong> significa vivir en armonía con uno mismo y con los demás.  
        No se trata solo de bienestar físico, sino de una felicidad auténtica que surge cuando cuidamos nuestras emociones, nuestra mente y nuestra alma.
      </p>
      <p className="max-w-3xl mx-auto text-sm md:text-md font-body leading-relaxed text-gray-700 mb-6">
        Soy <strong>Encarni L. Cerrillo, PhD</strong> y Life Coach especializada en Inteligencia Emocional, PNL, Mindfulness, y gestión del estrés y la ansiedad.  
        Mi propósito con <strong>Happy & Healthy</strong> es acompañarte en un viaje de transformación personal, ayudándote a vivir con mayor equilibrio, plenitud y propósito.
      </p>
      <p className="max-w-3xl mx-auto text-sm md:text-mdfont-body leading-relaxed text-gray-700 mb-6">
        Creo firmemente que la verdadera salud y felicidad nacen de dentro: cuando mente, corazón y propósito están alineados.  
        Por eso, mi enfoque se basa en <strong>Ikigai</strong>, ayudándote a descubrir tu razón de ser y a vivir una vida más consciente, plena y alineada con tu verdadero propósito.
      </p>
      <p className="max-w-3xl mx-auto text-sm md:text-md font-body leading-relaxed text-gray-700">
        Mi misión es guiarte para que encuentres tu equilibrio interior, descubras tu fuerza interior, y crees la vida que mereces, combinando bienestar emocional, mental y espiritual en cada paso de tu camino.
      </p>
          {/* <a href='#' className='text-blue-600 font-semibold flex items-center gap-2 hover:gap-4 transition-all duration-300 mt-5'>
            Step Into the Community <span className='text-xl'>→</span>
          </a> */}
        </div>

        {/* RIGHT column: Image */}
        <div className='md:w-3/5 w-full'>
          <img
            src={aboutImg}
            alt="about"
            className='w-full max-w-sm mx-auto h-auto object-cover'
          />
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
