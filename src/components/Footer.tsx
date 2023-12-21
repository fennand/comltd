// Footer.tsx

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="../logo.png" alt="Footer Logo" className="h-16 mr-2" />
      </div>

      <div className="text-right">
        <p>9 Clarkson Road, Glasgow, G44 4EH UK</p>
        <p>Email: saima@commoditylimited.com</p>
        <p>Phone: +44 7821 117802</p>
      </div>
    </footer>
  );
};

export default Footer;
