import React, { forwardRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = forwardRef((props, ref) => {
  useEffect(() => {
    gsap.fromTo(
      "#contact",
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#contact",
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <div
      ref={ref}
      id="contact"
      className="flex px-[5vw] bg-[#3E2519] md:bg-[#FEF1D9] items-start md:items-center flex-col md:flex-row gap-6 md:gap-0 py-8 md:py-0"
    >
      {/* ── Left: text ── */}
      <div className="md:py-[8vh] md:text-[#3E2519] text-[#FEF1D9] gap-4 md:gap-6 flex flex-col justify-evenly items-start w-full md:w-[55%]">
        <div className="uppercase tracking-wide text-[8vw] md:text-left text-center w-full md:text-[4vw] whitespace-nowrap leading-none font-semibold">
          Let's Design Your <br /> Space with <br /> Vision
        </div>

        {/* shown on tablet + desktop */}
        <div className="hidden md:block text-[clamp(11px,1.4vw,16px)]">
          <div className="font-semibold mb-1">Why Work With Linea Interiors?</div>
          <ul className="list-disc px-5 space-y-1">
            <li>Thoughtful, function-driven design</li>
            <li>Clear process from concept to execution</li>
            <li>Attention to materials, proportions, and flow</li>
            <li>Designs that feel intentional — not overdone</li>
          </ul>
        </div>

        <div className="font-semibold hidden md:block text-[clamp(11px,1.4vw,18px)] pr-[8vw] leading-relaxed">
          We typically respond within 24 hours. All inquiries are reviewed
          personally by our design team.
        </div>
      </div>

      {/* ── Right: form ── */}
      <div className="flex justify-center items-center w-full md:w-[45%] pb-6 md:pb-0">
        <div className="bg-[#3E2519] md:bg-[#FEF1D9] border border-[#FEF1D9] md:border-[#3E2519] md:text-[#3E2519] text-white rounded-3xl lg:my-10 w-full md:w-[90%] lg:w-[80%]">
          <form
            action="https://formsubmit.co/your-email@example.com"
            method="POST"
            className="flex p-5 md:p-6 flex-col gap-3 md:gap-4"
          >
            {/* Title — visible on mobile + tablet, hidden on desktop via lg:hidden */}
            <h2 className="text-3xl md:text-[clamp(20px,2.5vw,32px)] uppercase md:tracking-widest text-center font-[200] block md:hidden">
              Get in Touch
            </h2>
            {/* Desktop title */}
            <h2 className="hidden lg:block text-[clamp(20px,2vw,28px)] uppercase tracking-widest text-center font-[200]">
              Get in Touch
            </h2>

            <div className="flex flex-col gap-1">
              <label className="text-sm md:text-[clamp(11px,1.1vw,15px)]" htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                className="md:bg-[#3E2519] text-[#3E2519] md:text-[#FEF1D9] bg-[#FEF1D9] px-3 py-2 rounded-3xl text-sm md:text-[clamp(11px,1.1vw,15px)]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm md:text-[clamp(11px,1.1vw,15px)]" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="md:bg-[#3E2519] text-[#3E2519] md:text-[#FEF1D9] bg-[#FEF1D9] px-3 py-2 rounded-3xl text-sm md:text-[clamp(11px,1.1vw,15px)]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm md:text-[clamp(11px,1.1vw,15px)]" htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="3"
                required
                className="md:bg-[#3E2519] text-[#3E2519] md:text-[#FEF1D9] bg-[#FEF1D9] px-3 py-2 rounded-3xl resize-none text-sm md:text-[clamp(11px,1.1vw,15px)]"
              />
            </div>

            <button
              type="submit"
              className="mt-1 md:bg-[#3E2519] text-[#3E2519] md:text-[#FEF1D9] bg-[#FEF1D9] lg:hover:bg-[#f9e0b6] lg:hover:text-[#3E2519] lg:hover:border-[#3E2519] transition-all duration-300 border w-[70%] md:w-[80%] lg:w-[60%] py-2 md:py-3 rounded-xl text-sm md:text-[clamp(11px,1.1vw,15px)]"
            >
              Request a consultation
            </button>

            <input type="hidden" name="_captcha" value="false" />
          </form>
        </div>
      </div>
    </div>
  );
});

export default Contact;