import React, { useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home.jsx";
import About from "./components/About";
import Service from "./components/Service";
import Work from "./components/Work";
import Testmonial from "./components/Testmonial";
import Contact from "./utils/Contact";
import Footer from "./utils/Footer";
import Featured from "./components/Featured";
import FeaturedTwo from "./components/FeaturedTwo";
import MainServices from "./pages/MainServices.jsx";
import Projects from "./pages/Projects.jsx";
import WorkOne from "./pages/WorkOne.jsx";
import WorkTwo from "./pages/WorkTwo.jsx";
import WorkThree from "./pages/WorkThree.jsx";
import WorkFour from "./pages/WorkFour.jsx";

import LocomotiveScroll from "locomotive-scroll";

const ScrollHandler = ({ children }) => {
  const location = useLocation();
  const scrollContainerRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  // Initialize LocomotiveScroll
  useEffect(() => {
    if (!scrollContainerRef.current) return;
    const loco = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
    });

    return () => {
      if (loco) loco.destroy();
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    if (scrollContainerRef.current && scrollContainerRef.current._locomotive) {
      scrollContainerRef.current._locomotive.scrollTo(0, {
        duration: 0,
        disableLerp: true,
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  // Scroll functions
  const scrollToContact = () => {
    if (scrollContainerRef.current && scrollContainerRef.current._locomotive) {
      scrollContainerRef.current._locomotive.scrollTo(contactRef.current);
    } else {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    if (scrollContainerRef.current && scrollContainerRef.current._locomotive) {
      scrollContainerRef.current._locomotive.scrollTo(aboutRef.current);
    } else {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={scrollContainerRef} id="app-scroll-container" className="overflow-x-hidden">
      <Navbar scrollToContact={scrollToContact} scrollToAbout={scrollToAbout} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home contactRef={contactRef} />
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
  );
};

const App = () => (
  <Router>
    <ScrollHandler />
  </Router>
);

export default App;
