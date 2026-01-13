import React, { useRef, useState, useEffect } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { serviceInfo } from "../../constants/constants";
import { useLocation, Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Service = ({ scrollToContact }) => {
  const [showAll, setShowAll] = useState(false);


  const visibleServices = showAll
    ? serviceInfo
    : serviceInfo.slice(0, 2);

  const contactRef = useRef(null);
  const location = useLocation();

  // GSAP refs
  const titleRef = useRef(null);
  const desktopBoxesRef = useRef([]);
  const mobileBoxRef = useRef();

  // Scroll to contact if navigated via state
  useEffect(() => {
    if (location.state?.scrollTo === "contact") {
      setTimeout(() => {
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  // Expose scrollToContact for Navbar
  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (scrollToContact) scrollToContact.current = handleScrollToContact;
  }, []);

  // GSAP Scroll-trigger animations (desktop only)
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#services-section",
        start: "top 80%",
      },
    });

    // Animate title
    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
  tl.fromTo(
      mobileBoxRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", stagger: 0.2 },
      "-=0.7"
    );
    // Animate desktop absolute boxes
    tl.fromTo(
      desktopBoxesRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", stagger: 0.2 },
      "-=0.5"
    );
  
  }, []);


  return (
    <div id="services-section" className="h-full px-[5vw] pb-10 w-screen bg-[#3E2519] md:bg-[#FEF1D9]">
      {/* Section title */}
      <div
        ref={titleRef}
        className="md:text-[4.5vw] text-[12vw] text-center md:text-left uppercase text-[#FEF1D9] md:text-[#3E2519] py-5 font-[200]"
      >
        Our services
      </div>

      {/* Desktop cards */}
      <div className="rounded-2xl hidden md:block relative overflow-hidden w-full">
        <img src="/images/servicesBg.webp" alt="servicesbg" />
        <div
          ref={(el) => (desktopBoxesRef.current[0] = el)}
          className="h-[47%] flex flex-col p-[1.5vw] justify-between items-start box w-[50%] rounded-2xl bg-[#FFEBC6] absolute top-0 right-0"
        >
          <div>
            <div className="uppercase text-[3vw] font-medium">interior design</div>
            <p className="text-[1.5vw]">
              Thoughtful layouts and material choices designed to create balanced, functional, and visually refined interior spaces.
            </p>
          </div>
          <Link to="/services">
            <div className="flex flex-row gap-3 hover:scale-105 transition-all duration-150 justify-center items-center">
              <div className="arrow bg-[#3E2519] font-lighter -rotate-45 text-white text-[2.5vw] rounded-full p-2">
                <IoMdArrowForward />
              </div>
              <div className="text-[1.5vw]">More Services</div>
            </div>
          </Link>
        </div>
        <div
          ref={(el) => (desktopBoxesRef.current[1] = el)}
          className="h-[47%] w-[50%] flex flex-col p-[1.5vw] justify-between items-start rounded-2xl bg-[#FFEBC6] absolute bottom-0 left-0"
        >
          <div>
            <div className="uppercase text-[3vw] font-medium">3d Visualization</div>
            <p className="text-[1.5vw]">
              Clear and realistic 3D concepts that help clients visualize the final interior before execution begins.
            </p>
          </div>
          <Link to="/services">
            <div className="flex flex-row gap-3 hover:scale-105 transition-all duration-150 justify-center items-center">
              <div className="arrow bg-[#3E2519] font-lighter -rotate-45 text-white text-[2.5vw] rounded-full p-2">
                <IoMdArrowForward />
              </div>
              <div className="text-[1.5vw]">Discover More</div>
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile cards */}
          <div  className="block bg-[#3E2519] py-8 md:hidden">
     
       {serviceInfo.map((item, index) => {
         const hidden = !showAll && index >= 2;
     
         return (
           <div ref={mobileBoxRef}
             key={item.id}
             className={`
               flex justify-center mb-4 items-center
               transition-all duration-1000 ease-in-out
               ${hidden ? "max-h-0 opacity-0 scale-95 overflow-hidden" : "max-h-[100vh] opacity-100 scale-100"}
             `}
           >
             <div className="bg-[#FFEBC6] overflow-hidden rounded-2xl h-full w-[80vw] flex flex-col">
               <img
                 src={item.image}
                 alt={item.title}
                 className="h-[30vh] w-full object-cover"
               />
     
               <div className="p-4 flex flex-col gap-3">
                 <h2 className="uppercase text-[4.4vw] text-center font-medium">
                   {item.title}
                 </h2>
     
                 <p className="text-[2.4vw] text-center leading-relaxed">
                   {item.description}
                 </p>
               </div>
             </div>
           </div>
         );
       })}
     
       {serviceInfo.length > 2 && (
         <div className="flex justify-center mt-4">
           <button
             onClick={() => setShowAll(!showAll)}
             className="uppercase border bg-[#FFEBC6] border-[#3E2519] text-[#3E2519] px-6 py-3 rounded-2xl transition-all duration-300 active:scale-95"
           >
             {showAll ? "Show Less" : "View More"}
           </button>
         </div>
       )}
     </div>

    </div>
  );
};

export default Service;
