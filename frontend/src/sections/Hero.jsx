import React, { useState, useEffect } from "react";
import { HeroConstant } from "../constants/constants";
import Button from "../components/Button";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle through images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === HeroConstant.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image Slideshow */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${HeroConstant[currentIndex].imgURL})`,
        }}
      ></div>

      {/* Overlay for text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex justify-center items-center h-full text-white text-center px-5 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 font-sans tracking-wide">
            Transform Your Fitness with Gym AI - Smarter Plans, Faster Results
          </h1>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            {HeroConstant[currentIndex].name}
          </h2>
          <p className="text-xl mb-6 sm:text-2xl">
            Achieve your goals with dedication and consistency.
          </p>
          <div className="flex justify-center">
            <Button
              label="Explore More"
              transparent={true}
              textColor="text-white"
              borderColor="border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
