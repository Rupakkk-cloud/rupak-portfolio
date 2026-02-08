import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Focus', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          className="flex items-center gap-2 group"
          onClick={(e) => handleNavClick(e, '#home')}
        >
          <div className="bg-brand-600 text-white p-2.5 rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-brand-500/30">
            <Terminal size={22} />
          </div>
          <span className="text-xl font-display font-bold text-slate-800 tracking-tight group-hover:text-brand-600 transition-colors">
            Rupak<span className="text-brand-600">.dev</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-brand-600 hover:bg-brand-50/50 rounded-full transition-all"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <div className="pl-2">
            <a
              href="#contact"
              className="px-6 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-full hover:bg-brand-600 transition-colors shadow-lg shadow-slate-900/20 hover:shadow-brand-500/30 transform hover:-translate-y-0.5 duration-200"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-brand-600 transition-colors bg-white/50 rounded-lg backdrop-blur-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-xl">
          <div className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-3 text-slate-600 hover:bg-brand-50 hover:text-brand-600 font-medium rounded-xl transition-colors"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;