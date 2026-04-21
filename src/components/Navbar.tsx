import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Beranda', href: '#hero' },
  { name: 'Tentang', href: '#about' },
  { name: 'Produk', href: '#products' },
  { name: 'Layanan', href: '#services' },
  { name: 'Galeri', href: '#gallery' },
  { name: 'Kontak', href: '#contact' },
];

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    setTimeout(() => {
      // If it's the hero, scroll to top
      if (href === '#hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const element = document.querySelector(href);
      if (element) {
        const navOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100); // Small delay to allow menu closing animation to start / React to update
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6 md:px-12 ${isScrolled ? 'glass py-4' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <a href="#hero" className="flex items-center gap-2 md:gap-3 group shrink-0">
          <img 
            src="logoakp.png" 
            alt="Logo PT Adipura Karya Persada" 
            className="h-10 md:h-12 w-auto object-contain shrink-0 bg-white p-1 rounded"
          />
          <div className="flex flex-col">
            <span className="font-extrabold text-xs md:text-lg tracking-widest text-light group-hover:text-white transition-colors leading-tight">ADIPURA KARYA PERSADA</span>
            <span className="text-[6px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary mt-0.5">General Contractor & Specialist</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-semibold text-light/80 hover:text-primary transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center justify-center px-8 py-4 bg-gradient-gold text-black font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all"
          >
            Hubungi Kami
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-light p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 md:hidden bg-dark border-b border-dark-gray overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-light hover:text-primary transition-colors uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="mt-2 flex items-center justify-center px-8 py-4 bg-gradient-gold text-black font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all"
              >
                Hubungi Kami
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
