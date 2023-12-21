import Link from "next/link";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gray-200 text-black p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image src="../logo.png" alt="Logo" className="h-24 mr-2" />
      </div>

      <nav>
        <ul className="flex">
          <li className="mr-4">
            <Link href="/">Home</Link>
          </li>
          <li className="mr-4">
            <Link href="/about">About</Link>
          </li>
          <li className="mr-4">
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
