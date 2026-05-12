import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 bg-black/95 backdrop-blur-xl glitter-border' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`${isScrolled ? 'text-gold' : 'text-black'} md:hidden hover:text-gold transition-colors`}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-12">
          {['Collections', 'Couture', 'Heritage'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 relative group ${
                isScrolled ? 'text-white/80 hover:text-gold' : 'text-black hover:text-gold'
              }`}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Brand Logo */}
        <a href="/" className={`absolute left-1/2 -translate-x-1/2 text-2xl md:text-4xl font-serif font-black tracking-tighter transition-colors duration-500 ${
          isScrolled ? 'text-gold' : 'text-maroon'
        }`}>
          JIYA
        </a>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <button className={`hidden sm:block transition-colors ${isScrolled ? 'text-white hover:text-gold' : 'text-black hover:text-gold'}`}>
            <Search size={20} />
          </button>
          <button className={`relative transition-colors ${isScrolled ? 'text-white hover:text-gold' : 'text-black hover:text-gold'}`}>
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-gold rounded-full" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { x: 0 } : { x: '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed inset-0 h-screen bg-black z-40 md:hidden flex flex-col items-center justify-center gap-12"
      >
        {['Collections', 'Couture', 'Heritage', 'Shop', 'About'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-3xl font-serif italic text-gold/80 hover:text-gold transition-all"
          >
            {item}
          </a>
        ))}
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-8 right-8 text-gold"
        >
          <X size={32} />
        </button>
      </motion.div>
    </nav>
  );
}
