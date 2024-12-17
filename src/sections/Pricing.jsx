// src/components/Pricing.jsx
import React, { useEffect, useState } from "react";
import { PricingConstants } from "../constants/constants";
import PricingCard from "../components/PricingCard";

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="py-20 px-4" id="pricing">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-100 mb-4">Our Pricing Plans</h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Pick the perfect plan for your journey—simple, transparent, and effective.
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
