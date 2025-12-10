import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Company', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded bg-gradient-to-br from-sky-600 to-blue-800 flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform duration-300">
                JS
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white leading-none">JSNC</span>
              <span className="text-[10px] text-slate-400 tracking-wider group-hover:text-sky-400 transition-colors">NETWORK COMMUNICATION</span>
            </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 rounded-full border border-sky-600 text-sky-400 text-sm hover:bg-sky-600 hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(14,165,233,0.1)] hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]">
            Get Quote
          </a>
        </div>

        <button 
          className="md:hidden text-white hover:text-sky-400 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-40 transition-transform duration-300 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  className="text-2xl font-bold text-white hover:text-sky-500 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                    {item.label}
                </a>
            ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;