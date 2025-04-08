
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-phatsimo-blue">Phatsimo</span>
            <span className="text-2xl font-bold text-phatsimo-red ml-1">Group</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 font-medium hover:text-phatsimo-blue transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-800 font-medium hover:text-phatsimo-blue transition-colors">
              About
            </Link>
            <Link to="/services" className="text-gray-800 font-medium hover:text-phatsimo-blue transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-gray-800 font-medium hover:text-phatsimo-blue transition-colors">
              Contact
            </Link>
            <Link to="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md animate-fade-in">
            <div className="flex flex-col py-4 px-4 space-y-4">
              <Link to="/" className="text-gray-800 font-medium hover:text-phatsimo-blue transition-colors" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="text-gray-800 font-medium hover:text-phatsimo-blue transition-colors" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link to="/services" className="text-gray-800 font-medium hover:text-phatsimo-blue transition-colors" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link to="/contact" className="text-gray-800 font-medium hover:text-phatsimo-blue transition-colors" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <Link to="/contact" className="btn-primary inline-block text-center" onClick={() => setIsOpen(false)}>
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
