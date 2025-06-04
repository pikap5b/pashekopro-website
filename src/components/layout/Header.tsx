import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PaintBucket, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: t('navigation.home'), path: '/' },
    { name: t('navigation.services'), path: '/services' },
    { name: t('navigation.gallery'), path: '/gallery' },
    { name: t('navigation.blog'), path: '/blog' },
    { name: t('navigation.contact'), path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <PaintBucket size={32} className="text-primary-500 mr-2" />
            <div>
              <h1 className="text-xl font-bold text-primary-500 font-heading">PashekoPro</h1>
              <p className="text-xs text-neutral-600">under constructions ltd</p>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-primary-500 border-b-2 border-primary-500'
                    : 'text-neutral-700 hover:text-primary-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/quote"
              className="px-6 py-2 bg-primary-500 text-white rounded-md font-medium hover:bg-primary-600 transition-colors duration-200"
            >
              {t('home.cta')}
            </Link>
          </div>

          <button
            className="md:hidden text-neutral-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t mt-2"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium py-2 transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-primary-500 border-l-4 border-primary-500 pl-2'
                      : 'text-neutral-700 hover:text-primary-500 pl-2'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/quote"
                className="px-6 py-2 bg-primary-500 text-white rounded-md font-medium hover:bg-primary-600 transition-colors duration-200 text-center mt-2"
              >
                {t('home.cta')}
              </Link>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;