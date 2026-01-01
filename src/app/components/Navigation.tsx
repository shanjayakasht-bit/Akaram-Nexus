import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-[#C9A962]/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group"
          >
            <div className="flex flex-col">
              <span className="text-2xl tracking-wider transition-colors" style={{ fontFamily: 'var(--font-serif)' }}>
                AKARAM
              </span>
              <span className="text-xs tracking-[0.3em] text-[#C9A962] transition-colors" style={{ fontFamily: 'var(--font-sans)' }}>
                NEXUS
              </span>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-12">
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm tracking-wider text-[#F5F5F5]/70 hover:text-[#C9A962] transition-colors duration-300"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-sm tracking-wider text-[#F5F5F5]/70 hover:text-[#C9A962] transition-colors duration-300"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-sm tracking-wider text-[#F5F5F5]/70 hover:text-[#C9A962] transition-colors duration-300"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-[#C9A962] text-black tracking-wider text-sm hover:bg-[#D4B975] transition-all duration-300"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Connect
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
