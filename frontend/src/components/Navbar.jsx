import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent py-4 px-8 z-20">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <h2 className="text-white text-xl font-semibold">Enzigma</h2>
        <div className="space-x-6">
          <a
            href="#about"
            className="text-white hover:text-gray-200 transition duration-300"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-white hover:text-gray-200 transition duration-300"
          >
            Contact
          </a>

          <a
            href="#contact"
            className="text-white hover:text-gray-200 transition duration-300"
          >
            Docs
          </a>

          <a
            href="#contact"
            className="text-white hover:text-gray-200 transition duration-300"
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
