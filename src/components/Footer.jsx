import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">SoftSell</h3>
            <p className="text-gray-400 mb-4">
              Making software license resale simple, secure, and profitable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#why-choose-us" className="text-gray-400 hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">License Valuation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Quick Selling</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Secure Transactions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Business Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Enterprise Packages</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Software Lane</li>
              <li>Tech City, TC 98765</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@softsell.com</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {currentYear} SoftSell. All rights reserved.</p>
          <p className="mt-2 text-sm flex items-center justify-center">
            Made with <Heart size={14} className="mx-1 text-red-500" /> by SoftSell Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;