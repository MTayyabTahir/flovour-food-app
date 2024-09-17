import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideRef = useRef(null);

  const slides = [
    <h1 className="text-center m-5 p-5 text-[140px] text-green-500 font-bold">
      Lovely Taste
    </h1>,
    <h1 className="text-center m-5 p-5 text-[140px] text-green-500 font-bold">
      Daily Deals
    </h1>,
    <h1 className="text-center m-5 p-5 text-[140px] text-green-500 font-bold">
      Fresh Foods
    </h1>,
    <h1 className="text-center m-5 p-5 text-[140px] text-green-500 font-bold">
      Flavor Food
    </h1>,
  ];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Clean up interval
  }, []);

  // Animation effect using GSAP
  useEffect(() => {
    gsap.fromTo(
      slideRef.current,
      { opacity: 0, y: 100 }, // Starting state
      {
        opacity: 1,
        y: 0, // End state
        duration: 1,
        ease: "power3.out", // Smooth easing
      }
    );
  }, [activeSlide]);

  const handleNextSlide = () => {
    gsap.to(slideRef.current, {
      opacity: 0,
      y: -100, // Animate out before changing slide
      duration: 1,
      ease: "power3.in",
      onComplete: () => {
        setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
      },
    });
  };

  const handlePrevSlide = () => {
    gsap.to(slideRef.current, {
      opacity: 0,
      y: -100,
      duration: 1,
      ease: "power3.in",
      onComplete: () => {
        setActiveSlide((prevSlide) =>
          prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
      },
    });
  };

  return (
    <div>
      <div id="indicators-carousel" className="relative w-full">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div
            ref={slideRef}
            className="absolute inset-0 flex items-center justify-center"
          >
            {slides[activeSlide]}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handleNextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Slider;
