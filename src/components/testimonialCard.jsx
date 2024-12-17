import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex flex-col justify-center items-start space-y-4">
      <p className="text-gray-300 text-lg italic">"{testimonial.review}"</p>
      <div>
        <h3 className="text-white font-semibold text-xl">{testimonial.name}</h3>
        <p className="text-blue-400">{testimonial.position}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
