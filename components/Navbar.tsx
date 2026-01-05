
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Quality', href: '#why-us' },
    { name: 'Network', href: '#network' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass py-3 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo / Brand Name */}
        <a href="#" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-sky-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg transition-transform group-hover:rotate-12">
            J
          </div>
          <div className="flex flex-col">
            <span className="text-gray-900 font-bold text-xl leading-none tracking-tight">Jerden Smiles</span>
            <span className="text-[10px] text-sky-600 font-bold uppercase tracking-widest">Dental Clinic</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group py-2 text-sm font-bold text-gray-700 hover:text-sky-600 transition-colors uppercase tracking-widest"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 bg-sky-600 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-sky-700 transition-all shadow-md hover:shadow-sky-200 active:scale-95"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <button 
          className="lg:hidden p-2 text-gray-900 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-gray-900 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-full left-0 w-full glass shadow-2xl transition-all duration-300 origin-top ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
        <div className="container mx-auto px-6 py-8 flex flex-col space-y-6 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-bold text-gray-800 hover:text-sky-600 transition-colors uppercase tracking-widest"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="w-full py-4 bg-sky-600 text-white rounded-2xl font-bold uppercase tracking-widest text-sm shadow-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Appointment
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
