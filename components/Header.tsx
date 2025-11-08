import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About Us' },
    { to: '/admissions', text: 'Admissions' },
    { to: '/programs', text: 'Programs' },
    { to: '/news', text: 'News & Events' },
    { to: '/gallery', text: 'Gallery' },
    { to: '/contact', text: 'Contact' },
  ];

  const activeLinkStyle = {
    color: '#c5b358',
    borderBottom: '2px solid #c5b358',
  };

  const navLinkClass = "py-2 px-1 text-white hover:text-uol-gold transition-colors duration-300";

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-uol-blue/95 shadow-lg backdrop-blur-sm' : 'bg-uol-blue'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-white tracking-wider">UOLI</span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center">
            <nav className="flex items-center space-x-6">
              {navLinks.map(link => (
                <NavLink 
                  key={link.to} 
                  to={link.to}
                  className={navLinkClass}
                  style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                >
                  {link.text}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-uol-blue/95 backdrop-blur-sm`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map(link => (
              <NavLink 
                key={link.to} 
                to={link.to} 
                onClick={() => setIsOpen(false)}
                className={navLinkClass}
                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
              >
                {link.text}
              </NavLink>
            ))}
        </div>
      </div>
    </header>
  );
};

export default Header;