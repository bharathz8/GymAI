import React from 'react';
import { faqConstants } from '../constants/constants';
import FAQCard from "../components/FAQCard";

const FAQSection = () => {
    return (
        <section id='FAQs' className="bg-transparent py-8">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Frequently <span className='text-red-500'>Asked </span>Questions</h2>
            <div className="space-y-6">
              {faqConstants.map((faq) => (
                <FAQCard key={faq.id} faq={faq} />
              ))}
            </div>
          </div>
        </section>
      );
};

export default FAQSection;
