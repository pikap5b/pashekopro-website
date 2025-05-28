import React from 'react';
import { Link } from 'react-router-dom';
import { PaintBucket, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <PaintBucket size={32} className="text-primary-400 mr-2" />
              <div>
                <h2 className="text-xl font-bold text-white font-heading">PashekoPro</h2>
                <p className="text-xs text-neutral-400">under constructions ltd</p>
              </div>
            </Link>
            <p className="text-neutral-300 mb-4">
              Professional painting services in Cyprus. Quality workmanship and customer satisfaction guaranteed.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-heading">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#wall-painting" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Wall Painting
                </Link>
              </li>
              <li>
                <Link to="/services#wall-design" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Wall Design Styles
                </Link>
              </li>
              <li>
                <Link to="/services#flooring" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Flooring Painting
                </Link>
              </li>
              <li>
                <Link to="/services#tileworks" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Tileworks
                </Link>
              </li>
              <li>
                <Link to="/services#plasterboard" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Plasterboard Works
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-heading">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-neutral-300">
                  Limassol, Cyprus
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary-400 mr-2 flex-shrink-0" />
                <a href="tel:+35799123456" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  +357 99 123 456
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary-400 mr-2 flex-shrink-0" />
                <a href="mailto:info@pashekopro.com" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  info@pashekopro.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-8 pt-6 text-center text-neutral-400 text-sm">
          <p>&copy; {new Date().getFullYear()} PashekoPro under constructions ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;