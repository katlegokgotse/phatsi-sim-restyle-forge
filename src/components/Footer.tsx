import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-phatsimo-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <div className="mb-4">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-white">Phatsimo</span>
                <span className="text-2xl font-bold text-phatsimo-gold ml-1">Group</span>
              </Link>
            </div>
            <p className="text-gray-300 mb-6">
              Unlocking business potential through innovative solutions and trusted partnerships.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-phatsimo-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-phatsimo-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-phatsimo-gold transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-phatsimo-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Business Consulting
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Strategic Planning
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Financial Advisory
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Market Research
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 shrink-0 mt-1" size={20} />
                <span className="text-gray-300">
                  HEAD OFFICE<br />
                  Johannesburg<br />
                  Physical Address<br />
                  67 Peggy Vera Road<br />
                  Kibler Park<br />
                  2091<br />
                  PO Box 2060<br />
                  Southdale<br />
                  2135
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 shrink-0" size={20} />
                <div className="flex flex-col">
                  <a href="tel:+27119433790" className="text-gray-300 hover:text-white transition-colors">
                    +27 11 943 3790
                  </a>
                  <a href="tel:+27119433773" className="text-gray-300 hover:text-white transition-colors">
                    +27 11 943 3773
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 shrink-0" size={20} />
                <a href="mailto:info.phatsimo@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  info.phatsimo@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Phatsimo Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
