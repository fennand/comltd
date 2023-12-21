// Layout.tsx or any component that contains your header

import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-200 text-black p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="../logo.png" alt="Logo" className="h-24 mr-2" />
      </div>

      <nav>
        <ul className="flex">
          <li className="mr-4">
            <a href="/">Home</a>
          </li>
          <li className="mr-4">
            <a href="/about">About</a>
          </li>
          <li className="mr-4">
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
