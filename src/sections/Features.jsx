import React from 'react';
import FeaturesCard from "../components/FeaturesCard";
import { FeaturesConstant } from '../constants/constants';

const Features = () => {
  return (
    <section id='features' className='max-container'>
      {/* Heading Section */}
      <div className='flex flex-col justify-center items-center gap-4 mb-10'>
        <h2 className='text-4xl sm:text-5xl font-palanquin font-bold text-white'>
          Why <span className='text-coral-red'>GymAi</span> ?
        </h2>
        <p className='lg:max-w-lg text-center font-montserrat text-slate-gray'>
          Your Personalized Fitness Journey Starts Here
        </p>
      </div>

      {/* Grid layout for the features */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'>
        {FeaturesConstant.map((feature) => (
          <FeaturesCard key={feature.name} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
