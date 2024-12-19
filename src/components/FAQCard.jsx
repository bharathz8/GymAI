import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { openAtom } from '../recoil/Atom';

const FAQCard = ({ faq }) => {
  const [openID, setOpenID] = useRecoilState(openAtom);

  const toggleAnswer = () => {
    setOpenID(openID === faq.id ? null : faq.id);
  }

  const isOpen = openID === faq.id;

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

