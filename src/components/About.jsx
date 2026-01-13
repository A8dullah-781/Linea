import React, { forwardRef, useRef, useEffect, useState } from "react";
import Count from "../utils/Count";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = forwardRef((props, ref) => {
  // Refs for GSAP
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const textRef = useRef(null);
  const textRefTwo = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const countersRef = useRef(null);
  const mobileTextRef = useRef(null);
  const mobileCountersRef = useRef(null);

  // State to trigger Count start
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top 90%",
      },
    });

    // Title & subtitle
    tl.fromTo(
      [titleRef.current, subtitleRef.current],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", stagger: 0.2 }
    );

    // Left image & main text
    tl.fromTo(
      [leftImageRef.current, textRef.current],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", stagger: 0.2 },
      "-=0.5"
    );

    // Right image & secondary text
    tl.fromTo(
      [rightImageRef.current, textRefTwo.current],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.7"
    );

    // Mobile text & counters
    tl.fromTo(
      [mobileTextRef.current, mobileCountersRef.current],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", stagger: 0.2 },
      "-=0.6"
    );

    // Counters (desktop) with onStart to trigger count
    tl.fromTo(
      countersRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        onStart: () => setStartCount(true), // ✅ Trigger counting when animation starts
      },
      "-=0.5"
    );
  }, [ref]);

  return (
    <div ref={ref} id="about" className="w-screen h-full md:px-[5vw] pt-3 md:pt-0 px-8 bg-[#FFEBC6]">

      {/* Title + subtitle */}
      <div className="uppercase mb-5 flex md:flex-row flex-col justify-between md:pt-5 lg:py-10 items-center">
        <div ref={titleRef} className="md:text-[4.5vw] text-[14vw] font-[200]">
          About&nbsp;&nbsp;Us
        </div>
        <div ref={subtitleRef} className="md:text-[1.5vw] text-[3vw]">
          Harmony, Materiality & Feeling
        </div>
      </div>

      {/* Main section */}
      <div className="flex w-full md:h-1/2 h-full flex-col md:flex-row">
        {/* Left Image */}
        <div ref={leftImageRef} className="h-full w-full md:w-[40%] hidden md:flex items-center">
          <img className="rounded-4xl" src="/images/roomOne.webp" alt="roomOne" />
        </div>
        {/* Text */}
        <div ref={textRef} className="h-full md:pl-5 flex justify-center md:mt-5 lg:mt-10 items-center text-[2.8vw] text-center md:text-left md:text-[1.3vw] w-full md:w-[60%]">
          <p>
            Design isn’t just about looks—it’s about creating an experience that resonates with the people who inhabit a space. We specialize in crafting interiors that are not only visually stunning but also highly functional, where every detail is thoughtfully considered and every corner tells a story. Our approach blends creativity with practicality, ensuring that each space is as inspiring to live in as it is to behold.
          </p>
        </div>
      </div>

      {/* Counters and right image */}
      <div className="flex w-full md:py-15 h-full md:h-1/2 flex-col md:flex-row">
        <div className="h-full flex flex-col pr-5 text-right gap-10 text-[1.3vw] pl-15 w-[60%]">
          <div ref={textRefTwo} className="lg:-mt-5 md:-mt-10 hidden md:block">
            <p>
              Our 12-member team blends creativity, expertise, and precision. From designers to project managers, we work together to transform ideas into inspiring, functional spaces that leave a lasting impression.
            </p>
          </div>
          {/* Counters desktop */}
          <div ref={countersRef} className="hidden md:flex md:-mt-5 lg:-mt-0.5 flex-row justify-evenly items-center">
            <div className="flex flex-col justify-center items-center">
              <div className="lg:text-[4.5vw] md:text-[3vw]">
                {startCount && <Count target={11} step={1} speed={110} />}+
              </div>
              <p className="text-[1vw]">Arcitects & Designers</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="lg:text-[4.5vw] md:text-[3vw]">
                {startCount && <Count target={130} step={10} speed={70} />}+
              </div>
              <p className="text-[1vw]">Projects</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="lg:text-[4.5vw] md:text-[3vw]">
                {startCount && <Count target={5} step={1} speed={140} />}+
              </div>
              <p className="text-[1vw]">Years Of Experience</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div ref={rightImageRef} className="h-full w-full md:w-[40%] py-3 md:py-0 flex items-center">
          <img className="rounded-4xl md:-mt-15" src="/images/roomTwo.webp" alt="roomTwo" />
        </div>

        {/* Mobile text */}
        <div ref={mobileTextRef} className="md:-mt-5 text-center md:text-left block md:hidden text-[2.8vw] md:text-[1.3vw]">
          <p>
            Our 12-member team blends creativity, expertise, and precision. From designers to project managers, we work together to transform ideas into inspiring, functional spaces that leave a lasting impression.
          </p>
        </div>

        {/* Mobile counters */}
        <div ref={mobileCountersRef} className="flex flex-row md:hidden py-8 justify-evenly items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="text-[10vw]">{startCount && <Count target={11} step={1} speed={110} />}+</div>
            <p className="text-[2.5vw]">Arcitects & Designers</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-[10vw]">{startCount && <Count target={130} step={10} speed={70} />}+</div>
            <p className="text-[2.5vw]">Projects</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-[10vw]">{startCount && <Count target={5} step={1} speed={140} />}+</div>
            <p className="text-[2.5vw]">Years Of Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
