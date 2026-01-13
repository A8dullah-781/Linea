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
import Lenis from "@studio-freight/lenis";

const ScrollHandler = () => {
  const location = useLocation();
  const scrollContainerRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const lenisRef = useRef(null);

  // Initialize Lenis
  useEffect(() => {
    if (!scrollContainerRef.current) return;

    lenisRef.current = new Lenis({
      el: scrollContainerRef.current,
      smooth: true,
      duration: 1.2,
      lerp: 0.08,
    });

    const raf = (time) => {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenisRef.current.destroy();
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  // State-based scroll (Contact / About)
  useEffect(() => {
    if (!location.state?.scrollTo) return;

    const scrollTarget = location.state.scrollTo === "contact" ? contactRef : aboutRef;

    const timer = setTimeout(() => {
      if (scrollTarget.current) {
        if (lenisRef.current) lenisRef.current.scrollTo(scrollTarget.current);
        else scrollTarget.current.scrollIntoView({ behavior: "smooth" });
      }
      window.history.replaceState({}, document.title);
    }, 50);

    return () => clearTimeout(timer);
  }, [location]);

  // Scroll functions to pass to Navbar
  const scrollToContact = () => {
    if (lenisRef.current) lenisRef.current.scrollTo(contactRef.current);
    else contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    if (lenisRef.current) lenisRef.current.scrollTo(aboutRef.current);
    else aboutRef.current?.scrollIntoView({ behavior: "smooth" });
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
