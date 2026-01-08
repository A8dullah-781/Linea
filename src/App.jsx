import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Work from './components/Work';
import Testmonial from './components/Testmonial';
import Contact from './utils/Contact';
import Footer from './utils/Footer';
import Featured from './components/Featured';
import FeaturedTwo from './components/FeaturedTwo';
import LocomotiveScroll from 'locomotive-scroll';
import MainServices from '../src/pages/MainServices.jsx'
import Projects from '../src/pages/Projects.jsx'

const App = () => {
  
  const locomotiveScroll = new LocomotiveScroll();
  
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="overflow-x-hidden">
        <Navbar scrollToContact={scrollToContact} scrollToAbout={scrollToAbout} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About ref={aboutRef} />
                <Featured />
                <FeaturedTwo />
                <Service />
                <Work />
                <Testmonial />
                <Contact ref={contactRef} />
              </>
            }
          />
          <Route path="/services" element={<MainServices />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
