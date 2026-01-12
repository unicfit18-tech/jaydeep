
import React from 'react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Process', id: 'process' },
    { label: 'AI Planner', id: 'planner' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-amber-800 serif cursor-pointer" onClick={() => scrollTo('home')}>
              Saffron & Sage
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                  activeSection === item.id ? 'text-amber-800 border-b-2 border-amber-800' : 'text-stone-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center">
            <button
              onClick={() => scrollTo('contact')}
              className="bg-amber-800 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-amber-900 transition-all shadow-md active:scale-95"
            >
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
