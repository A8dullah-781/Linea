import {
  FaBehance,
  FaDribbble,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="md:bg-[#3b2416] bg-[#f5e6cf] text-[#3b2416] md:text-[#f5e6cf] px-6 md:px-16 py-14">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10">

        <img className="block md:hidden -my-6 w-[40vw]" src="/images/lineaLogo.png" alt="" />
        {/* Left */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-[300] md:font-[200] tracking-widest leading-tight">
            LET’S WORK <br /> TOGETHER
          </h2>

          <div className="flex gap-4 text-lg">
  <FaBehance className="cursor-pointer transition-all duration-300 hover:text-white hover:scale-110" />
  <FaDribbble className="cursor-pointer transition-all duration-300 hover:text-white hover:scale-110" />
  <FaLinkedinIn className="cursor-pointer transition-all duration-300 hover:text-white hover:scale-110" />
  <FaFacebookF className="cursor-pointer transition-all duration-300 hover:text-white hover:scale-110" />
  <FaInstagram className="cursor-pointer transition-all duration-300 hover:text-white hover:scale-110" />
</div>

        </div>

        {/* Right */}
        <div className="md:flex flex-col hidden gap-4 max-w-md w-full">
          <span className="text-sm tracking-wider">
            SUBSCRIBE FOR NEWSLETTER
          </span>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 px-4 py-2 rounded-2xl border border-[#3b2416] bg-[#f5e6cf] text-[#f5e6cf] placeholder:text-[#3b2416]  md:text-[#3b2416] outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 w-[30%] text-[#f5e6cf] bg-[#3b2416] rounded-2xl border border-[#3b2416] hover:bg-[#f9e0b6] md:bg-[#f5e6cf] md:text-[#3b2416]"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="my-10 h-px bg-[#f5e6cf]/30" />

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between text-sm gap-4">
        <span>© 2025 – All rights reserved</span>

        <div className="flex gap-6">
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
