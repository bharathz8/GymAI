import React from 'react';

const FeaturesCard = ({ imgURL, name }) => {
  return (
    <div className='flex flex-1 flex-col w-full bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-all duration-300 transform hover:scale-105 rounded-lg shadow-xl relative overflow-hidden'>
      {/* Background Image */}
      <img
        src={imgURL}
        alt={name}
        className='w-full h-[300px] object-cover rounded-t-lg transition-transform duration-300 transform hover:scale-110'
      />
      
      {/* Card Name Below the Image */}
      <div className='flex justify-center items-center text-center p-4 bg-gradient-to-t from-black via-transparent to-transparent rounded-b-lg'>
        <h3 className='text-3xl font-semibold text-white font-palanquin tracking-wide'>{name}</h3>
      </div>

      {/* Optional hover effect */}
      <div className='absolute inset-0 bg-black opacity-30 hover:opacity-50 transition-all duration-300 rounded-lg'></div>
    </div>
  );
};

export default FeaturesCard;
