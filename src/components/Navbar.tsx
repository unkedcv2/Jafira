import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Fixed at the top, perfectly centered, floating above the video and content
    <header className="fixed top-3 inset-x-0 z-50 px-3 sm:px-6 flex justify-center pointer-events-none">
      
      {/* Header Island that smoothly shrinks when scrolling */}
      <div 
        className={`pointer-events-auto w-full transition-all duration-300 ease-out rounded-full border shadow-lg ${
          isScrolled 
            ? 'max-w-2xl md:max-w-4xl py-1.5 md:py-2 px-4 sm:px-6 bg-white/95 backdrop-blur-md border-amber-400/90 shadow-[0_8px_25px_rgba(0,0,0,0.12)]' 
            : 'max-w-3xl md:max-w-5xl py-2 sm:py-3 md:py-3.5 px-5 sm:px-8 bg-white/90 backdrop-blur-md border-amber-300/80 shadow-[0_12px_40px_rgba(217,119,6,0.16)]'
        }`}
      >
        <div className="flex items-center justify-center md:justify-between gap-4 w-full">
          
          {/* Brand Logo: 
              - On Mobile: Centered in the middle, nice and big!
              - On Desktop: 50% larger than before (h-18 / lg:h-20 default, h-12 / lg:h-14 scrolled) */}
          <a 
            href="#inicio" 
            className="flex items-center justify-center group py-0.5 shrink-0" 
            aria-label="Jafira Eventos Inicio"
          >
            <img 
              src="/src/assets/logos/jafira_logo.svg" 
              alt="Jafira Logo" 
              className={`w-auto object-contain transition-all duration-300 transform group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(245,158,11,0.18)] ${
                isScrolled 
                  ? 'h-10 sm:h-11 md:h-12 lg:h-14' 
                  : 'h-12 sm:h-14 md:h-18 lg:h-20'
              }`}
            />
          </a>

          {/* Desktop Navigation - Tightly grouped with 50% larger logo layout */}
          <nav className={`hidden md:flex items-center transition-all duration-300 text-stone-800 uppercase font-bold tracking-wider ${
            isScrolled ? 'space-x-4 lg:space-x-5 text-xs' : 'space-x-5 lg:space-x-7 text-xs sm:text-sm'
          }`}>
            <a href="#inicio" className="hover:text-amber-600 transition-colors py-1">Inicio</a>
            <a href="#espacio" className="hover:text-amber-600 transition-colors py-1">El Salón</a>
            <a href="#parque" className="hover:text-emerald-600 transition-colors py-1">El Parque</a>
            <a href="#galeria" className="hover:text-purple-600 transition-colors py-1">Galería</a>
            <a href="#contacto" className="hover:text-emerald-600 transition-colors py-1">Ubicación</a>
            
            {/* Reservas button with clean Calendar icon */}
            <a 
              href="#reservas" 
              className={`inline-flex items-center space-x-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-full shadow-sm hover:shadow-emerald-600/25 transition-all transform hover:scale-105 font-bold ${
                isScrolled ? 'px-3.5 py-1.5 text-xs' : 'px-4.5 py-2 text-xs sm:text-sm'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reservas</span>
            </a>
          </nav>

        </div>
      </div>
    </header>
  );
}
