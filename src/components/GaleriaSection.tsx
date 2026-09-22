import React, { useState, useEffect, useRef, useMemo } from 'react';
import { X, ChevronLeft, ChevronRight, Film, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function GaleriaSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const images = [
    { src: "/assets/images/ellugar_01.webp", title: "Vista General del Salón" },
    { src: "/assets/images/ellugar_02.webp", title: "Atardecer en el Parque" },
    { src: "/assets/images/ellugar_adentro_02.webp", title: "Montaje de Fiesta y Pistas" },
    { src: "/assets/images/ellugar_adentro_03.webp", title: "Detalles y Ambientación" },
    { src: "/assets/images/ellugar_adentro_04.webp", title: "Salón Climatizado" },
    { src: "/assets/images/ellugar_afuera_04.webp", title: "Parque Arbolado y Senderos" },
    { src: "/assets/images/ellugar_afuera_05.webp", title: "Espacios Verdes y Jardines" },
    { src: "/assets/images/ellugar_afuera_06.webp", title: "Jardines Iluminados al Anochecer" },
    { src: "/assets/images/ellugar_cumpleaños3.webp", title: "Celebraciones Exclusivas" }
  ];

  // Double the images array to enable an uninterrupted infinite gliding loop
  const displayImages = [...images, ...images];

  // Continuous synchronized gliding motion
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!isPaused && trackRef.current) {
        const container = trackRef.current;
        const maxScroll = container.scrollWidth / 2;
        
        // Steady elegant speed (42px per second)
        container.scrollLeft += 42 * delta;

        // Seamless loop reset
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft -= maxScroll;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const handleStep = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const step = 320;
      trackRef.current.scrollBy({
        left: direction === 'left' ? -step : step,
        behavior: 'smooth'
      });
    }
  };

  // Festive confetti explosion generated whenever an image is opened
  const confettiExplosion = useMemo(() => {
    if (!selectedImage) return [];
    const partyColors = [
      '#F59E0B', '#F97316', '#EF4444', '#EC4899', 
      '#8B5CF6', '#10B981', '#06B6D4', '#FBBF24', 
      '#3B82F6', '#14B8A6', '#D946EF', '#84CC16'
    ];

    return Array.from({ length: 80 }).map((_, i) => {
      const angle = (i / 80) * 360 + (Math.random() * 24 - 12);
      const rad = (angle * Math.PI) / 180;
      // Burst distance from center outwards
      const distance = 160 + Math.random() * 520;
      const targetX = Math.cos(rad) * distance;
      const targetY = Math.sin(rad) * distance * 0.85;
      const size = 7 + Math.random() * 11;
      const isRect = i % 2 === 0;
      const color = partyColors[i % partyColors.length];
      const duration = 1.4 + Math.random() * 1.4;
      const delay = Math.random() * 0.15;
      const rot = Math.random() * 720 - 360;

      return {
        id: i,
        targetX,
        targetY,
        size,
        isRect,
        color,
        duration,
        delay,
        rot
      };
    });
  }, [selectedImage]);

  return (
    <section id="galeria" className="py-24 bg-gradient-to-b from-[#FAF5FF] via-[#F3E8FF]/70 to-[#FFF7ED] text-stone-800 relative overflow-hidden">
      
      {/* Subtle party photographic atmosphere background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src="/assets/images/ellugar_cumpleaños3.webp" 
          alt="Fiestas y celebraciones" 
          className="w-full h-full object-cover opacity-10 filter blur-xs scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF5FF]/90 via-[#F3E8FF]/80 to-[#FFF7ED]/95"></div>
      </div>

      {/* Contained within centered max-w-6xl container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with warm celebratory accents */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-purple-900 text-xs font-black uppercase tracking-widest bg-purple-200 px-4 py-2 rounded-full border border-purple-400 shadow-md">
              <Film className="w-4 h-4 text-purple-900" />
              <span>Recorrido en Movimiento Continuo</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-['Fredoka'] font-black text-stone-900 tracking-tight">
              Nuestros Espacios en Acción
            </h2>
            <p className="text-stone-700 text-base sm:text-lg font-normal leading-relaxed">
              Las imágenes van pasando juntas en movimiento suave continuo. <span className="font-extrabold text-emerald-800">Hacé doble clic en cualquier foto</span> para verla en pantalla completa.
            </p>
          </div>

          {/* Navigation Controls & Double-Click Tip */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="hidden sm:flex items-center space-x-1.5 text-xs font-extrabold text-amber-900 bg-amber-200/80 border border-amber-400 px-3.5 py-2 rounded-full shadow-xs">
              <ZoomIn className="w-3.5 h-3.5 text-amber-800" />
              <span>Doble clic para ampliar</span>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => handleStep('left')}
                className="p-3 rounded-full bg-white hover:bg-amber-100 text-stone-800 transition-colors border-2 border-amber-300 shadow-md"
                aria-label="Retroceder galería"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleStep('right')}
                className="p-3 rounded-full bg-white hover:bg-amber-100 text-stone-800 transition-colors border-2 border-amber-300 shadow-md"
                aria-label="Avanzar galería"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Beautifully Framed and Contained Gallery Showcase */}
        <div 
          className="relative bg-white rounded-[2.5rem] border-2 border-amber-300 p-4 sm:p-7 shadow-2xl shadow-amber-900/10 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Subtle warm gradient masks at container edges to frame the motion elegantly inside the box */}
          <div className="absolute top-0 left-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10 rounded-l-[2.5rem]"></div>
          <div className="absolute top-0 right-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10 rounded-r-[2.5rem]"></div>

          {/* Synchronized Continuous Moving Track */}
          <div 
            ref={trackRef}
            className="flex gap-5 overflow-x-hidden py-3 scrollbar-none select-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displayImages.map((img, idx) => (
              <div 
                key={idx}
                onDoubleClick={() => setSelectedImage(img.src)}
                className="w-[270px] sm:w-[320px] h-[340px] bg-stone-100 rounded-3xl overflow-hidden shadow-md group relative cursor-pointer shrink-0 border-2 border-amber-200 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-amber-400"
                title="Hacé doble clic para abrir"
              >
                <img 
                  src={img.src} 
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 pointer-events-none"
                />
                
                {/* Visual Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-900/10 to-transparent flex flex-col justify-end p-5 transition-opacity">
                  <span className="text-white text-base font-['Fredoka'] font-bold leading-snug drop-shadow-sm">
                    {img.title}
                  </span>
                  <span className="text-amber-300 text-[11px] font-bold tracking-wide mt-1 inline-flex items-center space-x-1 opacity-90 group-hover:opacity-100">
                    <ZoomIn className="w-3 h-3" />
                    <span>Doble clic para ver en grande</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom helper text inside frame */}
          <div className="mt-4 pt-3 border-t border-amber-200 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-600 gap-2">
            <span className="flex items-center space-x-2 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Pausá el movimiento apoyando el cursor sobre las fotos</span>
            </span>
            <span className="font-bold text-amber-900">
              Jafira Eventos • Galería de Momentos
            </span>
          </div>
        </div>

      </div>

      {/* Lightbox Modal on Double Click with Party Confetti Explosion & Bottom-Left Jafira Logo */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 overflow-hidden"
            onClick={() => setSelectedImage(null)}
          >
            {/* Background Confetti Explosion behind the image */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center z-0">
              {confettiExplosion.map((p) => (
                <motion.div
                  key={p.id}
                  initial={{ x: 0, y: 0, scale: 0, opacity: 1, rotate: 0 }}
                  animate={{ 
                    x: p.targetX, 
                    y: [0, p.targetY - 50, p.targetY + 40], 
                    scale: [0, 1.3, 1], 
                    opacity: [1, 1, 0.9],
                    rotate: p.rot 
                  }}
                  transition={{ 
                    duration: p.duration, 
                    delay: p.delay,
                    ease: "easeOut"
                  }}
                  className="absolute shadow-sm"
                  style={{
                    width: p.isRect ? p.size * 2 : p.size,
                    height: p.size,
                    backgroundColor: p.color,
                    borderRadius: p.isRect ? '3px' : '50%',
                  }}
                />
              ))}
            </div>

            {/* Jafira Logo fixed at Bottom-Left */}
            <div className="fixed bottom-5 sm:bottom-8 left-5 sm:left-8 z-30 pointer-events-none">
              <img 
                src="/assets/logos/jafira_logo.svg" 
                alt="Jafira Eventos" 
                className="h-11 sm:h-16 w-auto drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] filter brightness-110"
              />
            </div>

            {/* Image Container */}
            <motion.div 
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 24, stiffness: 280 }}
              className="relative z-10 max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center" 
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white bg-stone-800/90 hover:bg-stone-700 p-2.5 rounded-full transition-all border border-stone-600 shadow-xl"
                aria-label="Cerrar foto"
              >
                <X className="w-6 h-6" />
              </button>
              <img 
                src={selectedImage} 
                alt="Foto ampliada" 
                className="max-h-[82vh] max-w-full rounded-3xl object-contain shadow-[0_20px_60px_rgba(0,0,0,0.7)] border-2 border-stone-700/80"
              />
              <p className="text-white/80 text-sm mt-3 font-medium drop-shadow-sm">
                Hacé clic afuera o presioná la cruz para cerrar
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
