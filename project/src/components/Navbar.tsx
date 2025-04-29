import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md dark:bg-gray-800 dark:text-white' 
          : 'bg-transparent dark:text-white'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#home" className="text-xl font-bold text-blue-600 dark:text-blue-400">
              Dharahasan
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a 
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        } bg-white dark:bg-gray-800`}
      >
        <div className="container mx-auto px-4 py-2">
          <nav className="flex flex-col space-y-4 pb-4">
            {navLinks.map(link => (
              <a 
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;