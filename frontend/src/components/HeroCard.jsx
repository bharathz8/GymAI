import React, { useState, useEffect } from "react";
import { HeroConstant } from "../constants/constants";
import Button from "../components/Button";

const HeroCard = () => {
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
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${HeroConstant[currentIndex].imgURL})`,
          transition: "background-image 1s ease-in-out",
        }}
      ></div>

      {/* Overlay for text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4 sm:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
          Transform Your Fitness with Gym AI - Smarter Plans, Faster Results
        </h1>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          {HeroConstant[currentIndex].name}
        </h2>
        <p className="text-lg sm:text-xl mb-6 max-w-2xl">
          Achieve your goals with dedication and consistency.
        </p>
        <Button
          label="Explore More"
          transparent={true}
          textColor="text-white"
          borderColor="border-white"
        />
      </div>
    </section>
  );
};

export default HeroCard;
