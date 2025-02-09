import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { smoothScroll } from '../utils/smoothScroll';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700 transition-all duration-300 shadow-sm hover:shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex justify-between items-center">
          <a 
            href="#home" 
            onClick={smoothScroll}
            className="text-xl font-bold text-gray-900 dark:text-white hover:scale-105 transition-transform duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 after:bottom-0 after:transition-all hover:after:w-full"
          >
            Kasun Lakshitha
          </a>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {['home', 'projects', 'skills', 'education', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={smoothScroll}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 after:bottom-0 after:transition-all hover:after:w-full"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <div className="flex items-center gap-4 border-l pl-4 border-gray-200 dark:border-gray-700">
              <a 
                href="https://github.com/Kasunlakshitha998" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/kasun-lakshitha-53a9472a6/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="KasunLakshitha998@gmail.com" 
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-gray-200 dark:border-gray-700 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {['about', 'projects', 'skills', 'education', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => {
                    smoothScroll(e);
                    setIsMenuOpen(false);
                  }}
                  className="px-2 py-1 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <ThemeToggle />
              <a 
                href="https://github.com/Kasunlakshitha998" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/kasun-lakshitha-53a9472a6/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="kasunlakshitha998@gmail.com" 
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;