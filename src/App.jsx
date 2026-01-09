import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home.jsx';
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
import WorkOne from './pages/WorkOne.jsx';
import WorkTwo from './pages/WorkTwo.jsx';
import WorkThree from './pages/WorkThree.jsx';
import WorkFour from './pages/WorkFour.jsx';

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
      <Home contactRef={contactRef} /> {/* Pass contactRef */}
      <About ref={aboutRef} />
      <Featured />
      <FeaturedTwo />
      <Service />
      <Work />
      <Testmonial />
      <Contact ref={contactRef} />
      <Footer />
    </>
  }
/>

          <Route path="/services" element={<MainServices />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projectOne" element={<WorkOne />} />
          <Route path="/projectTwo" element={<WorkTwo />} />
          <Route path="/projectThree" element={<WorkThree />} />
          <Route path="/projectFour" element={<WorkFour />} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;
