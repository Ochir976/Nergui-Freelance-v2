import React, { useState, useEffect } from 'react';
import { Menu, Search } from 'lucide-react';

interface NavbarProps {
  onOpenAuth: (mode: 'signin' | 'signup') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAuth }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-white/80 backdrop-blur-xl border-b border-slate-100' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-[80rem] mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="font-display font-bold text-3xl tracking-tighter text-slate-900 flex items-center gap-1">
            nergui<span className="text-accent">.</span>
          </a>
          
          <div className={`hidden lg:flex items-center transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
             <div className="relative">
                <input 
                  type="text" 
                  placeholder="Та ямар үйлчилгээ хайж байна вэ?" 
                  className="pl-4 pr-10 py-2.5 bg-slate-100 border-none rounded-full text-sm w-80 focus:ring-2 focus:ring-accent outline-none"
                />
                <Search className="w-4 h-4 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2" />
             </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 font-medium text-sm">
          <a href="#" className="hover:text-accent transition-colors">Nergui Pro</a>
          <a href="#" className="hover:text-accent transition-colors">Мэрэгжилтэн хайх</a>
          <a href="#" className="hover:text-accent transition-colors">Ажил хайх</a>
          
          <button 
            onClick={() => onOpenAuth('signin')}
            className="hover:text-accent transition-colors"
          >
            Нэвтрэх
          </button>
          
          <button 
            onClick={() => onOpenAuth('signup')}
            className="px-6 py-2.5 rounded-full bg-accent text-white hover:bg-accentHover hover:shadow-button-glow transition-all duration-300"
          >
            Нэгдэх
          </button>
        </nav>

        <button className="md:hidden p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;