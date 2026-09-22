import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      line1: "El lugar perfecto para celebrar",
      line2: "a lo grande en City Bell",
      highlightWord: "celebrar",
      description: "Jafira Eventos combina un salón versátil con un imponente parque arbolado. El escenario ideal para cumpleaños, bodas y momentos inolvidables."
    },
    {
      line1: "Momentos mágicos en un",
      line2: "parque arbolado único",
      highlightWord: "parque arbolado",
      description: "Espacios verdes, naturaleza y confort de primer nivel para que tus invitados disfruten cada instante bajo el sol o al atardecer."
    },
    {
      line1: "Tu fiesta soñada con",
      line2: "amigos y familia",
      highlightWord: "amigos y familia",
      description: "Atención personalizada, privacidad y toda la calidez en una ubicación residencial privilegiada para crear recuerdos inolvidables."
    }
  ];

  // Auto-rotate phrases every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <section id="inicio" className="relative text-stone-900 pt-28 sm:pt-36 pb-20 lg:pb-32 overflow-hidden">
      
      {/* Video Background - High clarity, flowing directly behind the fixed floating header */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-90">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover scale-105 filter brightness-95 contrast-105"
          poster="/assets/images/ellugar_fachada.webp"
        >
          <source src="/assets/videos/jafira_Video_hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gentle protective gradient allowing video to be visible through the header and sides */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-amber-50/30 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FFF7ED] z-10 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="max-w-3xl space-y-6">
          
          {/* Animated 3-phrase slide with strict 2-line structure */}
          <div className="min-h-[140px] sm:min-h-[160px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h1 className="text-4xl sm:text-6xl font-['Fredoka'] font-black text-stone-900 tracking-tight leading-[1.1]">
                  <span className="block">{slide.line1}</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-emerald-600 to-teal-600">
                    {slide.line2}
                  </span>
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Description */}
          <div className="min-h-[60px] sm:min-h-[70px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-stone-700 text-lg sm:text-xl font-normal leading-relaxed"
              >
                {slide.description}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center space-x-2 pt-1 pb-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'w-8 bg-amber-500 shadow-xs' 
                    : 'w-2.5 bg-stone-300 hover:bg-stone-400'
                }`}
                aria-label={`Ir a frase ${index + 1}`}
              />
            ))}
          </div>

          {/* Primary Action Button - Hidden on mobile devices, visible on tablet and desktop */}
          <div className="pt-2 hidden md:block">
            <a 
              href="#reservas" 
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-white font-extrabold text-base sm:text-lg px-9 py-4 rounded-full shadow-[0_12px_30px_rgba(245,158,11,0.35)] transition-all transform hover:scale-105"
            >
              <Calendar className="w-5 h-5 text-white" />
              <span>Reserva tu lugar</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
