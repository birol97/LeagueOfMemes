'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './navbar.css'; // Import your CSS for navbar styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Initial scroll check on component mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`py-2 ${isScrolled ? 'py-1' : 'py-4'}  text-white fixed top-0 w-full transition-all duration-300 z-50`}>
      <div className="flex items-center justify-between mx-auto max-w-6xl">
        {/* Logo and Title */}
        <div className="flex items-center">
          <a href="/">
            <Image src="/logo.jpg" alt="Logo" width={isScrolled ? 30 : 60} height={isScrolled ? 30 : 40} />
          </a>
          <span className={`ml-2 text-xl font-semibold ${isScrolled ? 'text-sm' : 'text-xl'}`}>LeagueOf <span>MEMES</span></span>
        </div>

        {/* Hamburger Menu Icon, positioned to the right */}
        <button onClick={toggleMenu} className="text-white sm:hidden">
          {isOpen ? (
            <svg className="w-6 h-6 fill-current text-white mx-7" viewBox="0 0 50 50" width="50px" height="50px">
              <path d="M 0,13 50,13 50,18 0,18 Z M 13,0 18,0 18,50 13,50 Z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 fill-current text-white  mx-7" viewBox="0 0 50 50" width="50px" height="50px">
              <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/>
            </svg>
          )}
        </button>

        {/* Empty Mobile Header div removed for clarity */}

        {/* Navigation Links */}
        <nav className={`hidden sm:flex space-x-4`}>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#download">Download</a>
          <a href="#community">Community</a>
          <a href="#faqs">FAQs</a>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-2 pb-3 space-y-2">
          <a href="#about" className="block py-2">About</a>
          <a href="#features" className="block py-2">Features</a>
          <a href="#download" className="block py-2">Download</a>
          <a href="#community" className="block py-2">Community</a>
          <a href="#faqs" className="block py-2">FAQs</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;