import React from "react";

const HeroCard = ({ imgURL, name }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${imgURL})`,
        }}
      ></div>

      {/* Overlay for text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex justify-center items-center h-full text-white text-center px-5 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 font-sans tracking-wide">
            Transform Your Fitness with Gym AI - Smarter Plans, Faster Results
          </h1>
          <h2 className="text-3xl text-red-500 sm:text-4xl font-semibold mb-6">
            {name}
          </h2>
          <p className="text-xl mb-6 sm:text-2xl">
            Achieve your goals with dedication and consistency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
