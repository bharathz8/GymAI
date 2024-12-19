import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { navLinks } from "../constants/constants.js";
import { useRecoilState } from "recoil";
import { menuAtom } from "../recoil/Atom.jsx";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useRecoilState(menuAtom);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed bg-transparent top-0 left-0 z-20 w-full">
      <nav className="flex justify-between items-center px-6 py-4 max-container">
        {/* Logo */}
        <a href="/" className="text-white font-bold text-2xl md:text-3xl">
          GymAi
        </a>


        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex gap-10">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-[#d1d1d1] hover:text-gray-500 font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <button className="hidden lg:flex bg-transparent text-white border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-gray-800 items-center gap-2 transition duration-300">
          <FontAwesomeIcon icon={faRightToBracket} />
          Login
        </button>

        {/* Hamburger Icon for Mobile */}
        <div
          className="lg:hidden text-white text-2xl cursor-pointer z-30"
          onClick={handleToggle}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-90 z-20 flex flex-col items-center justify-center space-y-6 text-white transform ${menuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300`}
        >
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg font-medium hover:text-gray-400"
              onClick={handleToggle} // Close menu on link click
            >
              {item.label}
            </a>
          ))}
          <button
            className="bg-transparent text-white border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-gray-800 flex items-center gap-2 transition duration-300"
            onClick={handleToggle} // Close menu on button click
          >
            <FontAwesomeIcon icon={faRightToBracket} />
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
