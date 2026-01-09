import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaLinkedin, FaFacebookF, FaBehance, FaDribbble, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = ({ scrollToContact, scrollToAbout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDir, setScrollDir] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigate = useNavigate();

  const menuItems = ["Home", "Services", "Portfolio", "About Us"];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setScrollDir("down");
      } else {
        setScrollDir("up");
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleMenuClick = (item) => {
    setIsOpen(false);

    if (item === "Home") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (item === "About Us") {
      // If we are on home page, scroll to section, else navigate home first
      if (window.location.pathname === "/") {
        scrollToAbout();
      } else {
        navigate("/");
        setTimeout(() => scrollToAbout(), 100); // small delay to wait for page render
      }
    } else if (item === "Services") {
      navigate("/services");
    } else if (item === "Portfolio") {
      navigate("/projects");
    }
  };

  return (
    <>
      {/* Navbar for all devices */}
      <nav
        className={`flex h-[8vh] md:h-[8vh] lg:h-[12vh] w-screen bg-[#FFEBC6] justify-between items-center px-6 text-[#3E2519] fixed top-0 left-0 transition-transform duration-300 z-50
        ${scrollDir === "down" && !isOpen ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div>
          <img className="w-[30vw] md:w-[14vw] lg:w-[10vw]" src="/images/lineaLogo.webp" alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-[1.1vw] items-center gap-10">
          {menuItems.map((item) => (
            <li
              key={item}
              className="relative text-[1.6vw] lg:text-[1.2vw] group cursor-pointer"
              onClick={() => handleMenuClick(item)}
            >
              {item}
              <span className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-[#3E2519] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
            </li>
          ))}
          <button
            onClick={scrollToContact}
            className="uppercase border mr-8 transition-all hover:bg-[#3E2519] hover:text-white lg:text-[1.2vw] text-[1.6vw] border-[#3E2519] rounded-lg px-2 py-2"
          >
            Free Consultation
          </button>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-2xl cursor-pointer z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-[#FFEBC6] z-50 transform transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="absolute top-6 right-6 text-3xl cursor-pointer z-50 md:hidden" onClick={() => setIsOpen(false)}>
          <FaTimes />
        </div>

        <div className="flex flex-col justify-between py-6 items-center h-full gap-8">
          <div className="flex mt-[6vh] items-center flex-col">
            <img className="py-2 mb-6 w-[50vw]" src="/images/lineaLogo.webp" alt="" />
            <ul className="flex flex-col items-center gap-6 text-xl font-semibold">
              {menuItems.map((item) => (
                <li key={item} className="cursor-pointer" onClick={() => handleMenuClick(item)}>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                setIsOpen(false);
                scrollToContact();
              }}
              className="uppercase border bg-[#3E2519] text-white border-[#3E2519] rounded-lg px-6 py-3 mt-4"
            >
              Free Consultation
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <div className="flex gap-6 text-2xl">
              <FaLinkedin />
              <FaFacebookF />
              <FaBehance />
              <FaDribbble />
              <FaInstagram />
            </div>
            <p className="mt-4 text-sm">&copy; 2025 - All rights reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
