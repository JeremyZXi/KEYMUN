import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change navbar color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
      <>
        <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="flex items-center space-x-2">
                  {/* Logo placeholder that changes with scroll */}
                  <img
                      src={scrolled ? "/api/placeholder/32/32" : "/api/placeholder/32/32"}
                      alt="ModelUN Logo"
                      className="h-8 w-8"
                      style={{
                        filter: scrolled ? 'invert(0%)' : 'invert(100%)',
                        backgroundColor: scrolled ? '#000' : '#4299e1'
                      }}
                  />
                  <span className={`font-bold text-xl ${scrolled ? 'text-black' : 'text-white'}`}>KMUN</span>
                </a>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="/" className={`${scrolled ? 'text-black hover:text-blue-700' : 'text-white hover:text-blue-500'} px-3 py-2 rounded-md text-sm font-medium`}>Home</a>
                  <a href="/events" className={`${scrolled ? 'text-gray-700 hover:text-blue-700' : 'text-gray-300 hover:text-blue-500'} px-3 py-2 rounded-md text-sm font-medium`}>Events</a>
                  <a href="/resources" className={`${scrolled ? 'text-gray-700 hover:text-blue-700' : 'text-gray-300 hover:text-blue-500'} px-3 py-2 rounded-md text-sm font-medium`}>Resources</a>
                  <a href="/about-us" className={`${scrolled ? 'text-gray-700 hover:text-blue-700' : 'text-gray-300 hover:text-blue-500'} px-3 py-2 rounded-md text-sm font-medium`}>About</a>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="flex md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className={`inline-flex items-center justify-center p-2 rounded-md ${
                        scrolled ? 'text-gray-700 hover:text-black hover:bg-gray-200' : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                    } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
                    aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? (
                      <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                      <Menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu - Position fixed to viewport */}
          <div
              className={`${isOpen ? 'fixed' : 'hidden'} md:hidden inset-0 top-16 bg-black bg-opacity-30`}
              onClick={() => setIsOpen(false)}
          >
            <div
                className={`${scrolled ? 'bg-white' : 'bg-slate-900 backdrop-blur-sm'} absolute top-0 left-0 right-0`}
                onClick={(e) => e.stopPropagation()}
            >
              <div className="px-4 pt-2 pb-3 space-y-1">
                <a
                    href="/"
                    className={`block px-3 py-2 rounded-md text-base font-medium ${scrolled ? 'text-black' : 'text-white'}`}
                    onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
                <a
                    href="/events"
                    className={`block px-3 py-2 rounded-md text-base font-medium ${scrolled ? 'text-gray-700' : 'text-gray-300'}`}
                    onClick={() => setIsOpen(false)}
                >
                  Events
                </a>
                <a
                    href="/resources"
                    className={`block px-3 py-2 rounded-md text-base font-medium ${scrolled ? 'text-gray-700' : 'text-gray-300'}`}
                    onClick={() => setIsOpen(false)}
                >
                  Resources
                </a>
                <a
                    href="/about-us"
                    className={`block px-3 py-2 rounded-md text-base font-medium ${scrolled ? 'text-gray-700' : 'text-gray-300'}`}
                    onClick={() => setIsOpen(false)}
                >
                  About
                </a>
              </div>
            </div>
          </div>
        </nav>
        {/* Add an invisible spacer to prevent content from being hidden under the navbar */}
        <div className="h-16"></div>
      </>
  );
};

export default Navbar;

