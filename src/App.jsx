import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Featured from './components/Featured'
import FeaturedTwo from './components/FeaturedTwo'
import Service from './components/Service'
import Testmonial from './components/Testmonial'
import Contact from './utils/Contact'
import Footer from './utils/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Home/>
      <About/>
      <Featured/>
      <FeaturedTwo/>
      <Service/>
      <Testmonial/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App