import React from "react";

// Subcomponent for Social Links
const SocialLinks = () => (
  <div className="flex mt-4 md:mt-0 space-x-4">
    <a href="#" className="text-gray-400 hover:text-white">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="#" className="text-gray-400 hover:text-white">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="#" className="text-gray-400 hover:text-white">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="#" className="text-gray-400 hover:text-white">
      <i className="fab fa-linkedin-in"></i>
    </a>
  </div>
);

// Subcomponent for Navigation Links
const NavigationLinks = () => (
  <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
    <li>
      <a href="#" className="text-gray-400 hover:text-white">
        Home
      </a>
    </li>
    <li>
      <a href="#" className="text-gray-400 hover:text-white">
        Features
      </a>
    </li>
    <li>
      <a href="#" className="text-gray-400 hover:text-white">
        Pricing
      </a>
    </li>
    <li>
      <a href="#" className="text-gray-400 hover:text-white">
        Contact
      </a>
    </li>
    <li>
      <a href="#" className="text-gray-400 hover:text-white">
        About Us
      </a>
    </li>
  </ul>
);

// Main Footer Component
const Footer = () => {
  return (
    <section id="ContactUs" className="bg-gray-900 py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
        {/* Left Side - Contact Form */}
        <div className="w-full md:w-1/2 pr-8">
          <h4 className="text-white font-semibold text-lg mb-4">Get in Touch</h4>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-gray-900 text-white p-2 rounded-md"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-800 text-white p-2 rounded-md"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full bg-gray-800 text-white p-2 rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Navigation and Social Links */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <div className="mb-6 text-center md:text-left">
            <h3 className="text-white text-xl font-semibold">GymAI</h3>
            <p className="text-gray-400 mt-2 text-sm">
              Empowering your fitness journey with smart solutions.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mb-6">
            <NavigationLinks />
          </div>

          {/* Social Links */}
          <div>
            <SocialLinks />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 mt-8 text-sm">
        © 2024 GymAI. All Rights Reserved.
      </div>

    </section>
  );
};

export default Footer;
