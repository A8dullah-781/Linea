import React from "react";

const Contact = () => {
  return (
    <div className="flex px-[5vw] bg-[#3E2519] md:bg-[#FEF1D9] items-center flex-col md:flex-row ">
      <div className="py-[4vh] md:py-[8vh] md:text-[#3E2519] text-[#FEF1D9] flex flex-col justify-evenly items-start w-full md:w-[55%]  ">
        <div className="uppercase text-[10vw] md:text-left text-center md:text-[4vw] whitespace-nowrap leading-none font-semibold ">Let’s Design Your <br /> Space with <br /> Vision</div>
        <div className="hidden md:block">
          <div className="font-semibold">Why Work With Linea Interiors?</div>
          <ul className="list-disc px-6">
            <li>Thoughtful, function-driven design</li>
            <li>Clear process from concept to execution</li>
            <li>Attention to materials, proportions, and flow</li>
            <li>Designs that feel intentional — not overdone</li>
          </ul>
        </div>
        <div className="font-semibold hidden md:block text-[1.5vw] pr-[13vw]">
          We typically respond within 24 hours. All inquiries are reviewed
          personally by our design team.
        </div>
      </div>
      <div className="h-full flex  justify-center items-center w-full md:w-[45%] ">
       <div className="bg-[#3E2519] border-1 border-[#FEF1D9] text-white rounded-3xl lg:my-10 mb-6 md:mb-0  h-[70%] w-[90%]"> 
         <form
        action="https://formsubmit.co/your-email@example.com"
        method="POST"
        className="flex p-6 flex-col justify-evenly gap-4"
      >
        <h2 className="text-4xl lg:block block md:hidden font-[200]">Get in Touch</h2>

        <div className="flex flex-col gap-1">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            className="text-[#3E2519] bg-[#FEF1D9] px-3 py-2 rounded-3xl"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="text-[#3E2519] px-3 bg-[#FEF1D9] py-2 rounded-3xl"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="3"
            required
            className="text-[#3E2519] px-3 bg-[#FEF1D9] py-2 rounded-3xl resize-none"
          />
        </div>

        <button
          type="submit"
          className="mt-2 text-xs bg-[#FEF1D9] w-[60%]  text-[#3E2519] py-3 rounded-2xl hover:bg-[#f9e0b6]"
        >Request a consultation
        </button>

        <input type="hidden" name="_captcha" value="false" />
      </form>
       </div>
      </div>
    </div>
  );
};

export default Contact;
