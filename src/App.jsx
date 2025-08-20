import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
// import IconSlideAnimation from './components/IconSlideAnimation'
// import StayOptions from './components/StayOptions'
import AboutMe from './components/AboutMe'
import OptionsCards from './components/OptionsCards'
import CardsCollection from './components/CardsCollection'  
import ImageSlider   from './components/ImageSlider'
// import JoinCommunity from './components/JoinCommunity'
import EventCards from './components/EventCards'
// import PricingSection from './components/PricingSection'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import CookieConsentBanner from './components/CookieConsentBanner'

function App() {

  return (
    <main className='relative min-h-screen overflow-x-hidden'>
    <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-red-800/20 to-yellow-600/20 rounded-full blur-[80px] -z-10'></div>
    <div className='overflow-hidden'>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      {/* <IconSlideAnimation/> */}
      
      {/* <EventCards/> */}
      <OptionsCards/>
      <ImageSlider/>
      <CardsCollection/>
      <Testimonials/>
      <Newsletter/>
      <Footer/>
      <CookieConsentBanner/>

    </div>
    </main>
  )
}

export default App