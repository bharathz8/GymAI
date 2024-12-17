import React, { useState } from 'react';
import { faqConstants } from '../constants/constants';

const FAQCard = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => setIsOpen(!isOpen);

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3
        className="text-white text-lg font-semibold cursor-pointer"
        onClick={toggleAnswer}
      >
        {faq.question}
      </h3>
      {isOpen && <p className="text-gray-300 mt-2">{faq.answer}</p>}
    </div>
  );
};

export default FAQCard;

