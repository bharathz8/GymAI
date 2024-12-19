import React, { useEffect, useState } from "react";
import { testimonialConstants } from "../constants/constants";
import TestimonialCard from "../components/testimonialCard";
import { useRecoilState } from "recoil";
import { reviewIndexAtom } from "../recoil/Atom";

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useRecoilState(reviewIndexAtom);

  // Auto-rotate testimonials every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialConstants.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex bg-transparent flex-col md:flex-row items-center justify-between py-16 px-8">
      {/* Left Side: Testimonial Information */}
      <div className="w-full md:w-1/2 space-y-8">
        <h2 className="text-4xl font-bold text-white">What <span className="text-red-500">Our Users</span> Say</h2>
        <TestimonialCard testimonial={testimonialConstants[currentIndex]} />
      </div>

      {/* Right Side: Phone Frame with Changing Image */}
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <div
          className="relative w-64 h-128 bg-black border-8 border-gray-500 rounded-3xl overflow-hidden"
          style={{ height: "500px" }}
        >
          {/* Phone Frame */}
          <img
            src={testimonialConstants[currentIndex].image}
            alt="Testimonial"
            className="w-full h-full object-cover transition-all duration-1000"
          />
          <div className="absolute top-2 left-2 right-2 h-4 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
