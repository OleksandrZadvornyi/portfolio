import React, { useState } from 'react';
import { LuMenu, LuX, LuMail } from "react-icons/lu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <a href="#" className="text-xl font-bold text-white tracking-wider">
              OZ<span className="text-blue-500">.</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
              
              {/* Example: If you want to show the social icons here, 
                 you can now use them like this: 
              */}
              {/* <div className="flex items-center space-x-4 ml-4">
                <FaGithub className="text-gray-300 hover:text-white cursor-pointer" size={20} />
                <FaLinkedin className="text-gray-300 hover:text-white cursor-pointer" size={20} />
              </div> 
              */}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              aria-label="Open Mobile Menu"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {/* Updated icon components */}
              {isOpen ? <LuX size={24} /> : <LuMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;