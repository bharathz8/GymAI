// src/components/Pricing.jsx
import React, { useEffect, useState } from "react";
import { PricingConstants } from "../constants/constants";
import PricingCard from "../components/PricingCard";
import { useRecoilState } from "recoil";
import { visibleAtom } from "../recoil/Atom";

const Pricing = () => {
  
  const [isVisible, setIsVisible] = useRecoilState(visibleAtom);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="px-4" id="Pricing">
      <div className='flex flex-col justify-center items-center gap-4 mb-10'>
        <h2 className='text-4xl sm:text-5xl font-palanquin font-bold text-white'>
          Our <span className='text-red-500'>Pricing</span> Plans
        </h2>
        <p className='lg:max-w-lg text-center font-montserrat text-slate-gray'>
        Unlock your potential with plans that are simple, smart, and unstoppable
        </p>
      </div>
      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {PricingConstants.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
