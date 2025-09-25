import React from 'react';
import useScrollEffect from '../hooks/useScrollEffect';

const Navigation = ({ activeSection, isScrolled }) => {
  const { scrollToSection } = useScrollEffect();

  const navItems = ['home', 'story', 'skills', 'projects', 'certifications'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-white leading-tight">
            Hayesha<span className="text-purple-400">.dev</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors duration-200 leading-tight ${
                  activeSection === item ? 'text-purple-400' : 'text-white hover:text-purple-300'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <button className="text-white hover:text-purple-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;