import React from 'react';

const FeaturesCard = ({ imgURL, name }) => {
  return (
    <div className='flex flex-1 flex-col w-full bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-all duration-200 rounded-lg shadow-lg relative'>
      {/* Background Image */}
      <img
        src={imgURL}
        alt={name}
        className='w-full h-[300px] object-cover rounded-t-lg'
      />
      
      {/* Card Name Below the Image */}
      <div className='flex justify-center items-center text-center p-4 bg-[#1a1a1a80] rounded-b-lg'>
        <h3 className='text-2xl font-semibold text-white font-palanquin'>{name}</h3>
      </div>

      {/* Optional hover effect */}
      <div className='absolute inset-0 hover:bg-[#00000080] transition-all duration-300 rounded-lg'></div>
    </div>
  );
};

export default FeaturesCard;
