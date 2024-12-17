import React from "react";

const PricingCard = ({ plan }) => {
  const { title, price, description, features, buttonText, buttonVariant, highlight } = plan;

  return (
    <div
      className={`relative border border-gray-700 rounded-2xl p-8 backdrop-blur-md shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500 ${
        highlight ? "border-blue-500" : "border-gray-600"
      }`}
      style={{
        background: "rgba(255, 255, 255, 0.1)", // Glassmorphism
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h3 className="text-3xl font-semibold text-white text-center mb-4">{title}</h3>
      <p className="text-5xl font-bold text-blue-400 text-center mb-6">{price}</p>
      <p className="text-gray-300 text-center mb-8">{description}</p>
      <ul className="space-y-3 text-gray-200 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-green-400">✔</span> {feature}
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
          buttonVariant === "primary"
            ? "bg-blue-500 hover:bg-blue-400 text-white"
            : buttonVariant === "secondary"
            ? "bg-green-500 hover:bg-green-400 text-white"
            : "border border-gray-500 text-gray-300 hover:bg-gray-700"
        }`}
      >
        {buttonText}
      </button>
      {highlight && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
          Most Popular
        </div>
      )}
    </div>
  );
};

export default PricingCard;
