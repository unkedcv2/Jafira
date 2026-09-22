import React, { useState } from 'react';
import { SunMedium, Layout, Trees, PartyPopper, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FestiveDecor } from './FestiveDecor';

export function SalonSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const highlights = [
    {
      icon: SunMedium,
      color: "bg-amber-100 text-amber-800 border-amber-300",
      title: "Luminosidad y Vistas Panorámicas",
      desc: "Salón integrado con amplios ventanales de piso a techo que conectan directamente con el parque.",
      image: "/src/assets/images/ellugar_adentro_04.webp",
      alt: "Ventanales luminosos y vista panorámica"
    },
    {
      icon: Layout,
      color: "bg-emerald-100 text-emerald-800 border-emerald-300",
      title: "Distribución Versátil y Dinámica",
      desc: "Arquitectura flexible que se adapta con facilidad a cumpleaños, fiestas infantiles, casamientos o eventos de empresa.",
      image: "/src/assets/images/ellugar_adentro_02.webp",
      alt: "Montaje y distribución versátil"
    },
    {
      icon: Trees,
      color: "bg-teal-100 text-teal-800 border-teal-300",
      title: "Galería Semicubierta y Acceso Verde",
      desc: "Transición natural entre la calidez del interior y los senderos al aire libre para disfrutar a toda hora.",
      image: "/src/assets/images/ellugar_afuera_05.webp",
      alt: "Galería semicubierta hacia el parque"
    }
  ];

  return (
    <section id="espacio" className="py-24 bg-gradient-to-b from-[#FFFDF7] via-[#FFF6E5] to-[#FEF3C7]/40 text-stone-800 relative overflow-hidden">
      
      {/* Background festive explosive confetti cannon */}
      <FestiveDecor />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 text-stone-900 text-xs font-black uppercase tracking-widest bg-amber-400 px-4 py-2 rounded-full border border-amber-500 shadow-md">
              <PartyPopper className="w-4 h-4 text-stone-900" />
              <span>Instalaciones Principales</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-['Fredoka'] font-black text-stone-900 tracking-tight leading-tight">
              El Salón: Confort y elegancia para tu fiesta
            </h2>
            
            <p className="text-stone-700 leading-relaxed text-base sm:text-lg font-normal">
              Un salón preparado para albergar todo tipo de celebraciones con la comodidad, climatización y calidez que tu evento merece. Su diseño permite crear ambientes íntimos o festejos a gran escala.
            </p>

            {/* Interactive highlight cards: Text format flips smoothly into full-card photo on hover */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between text-xs font-bold text-amber-900 bg-amber-200/60 px-3.5 py-1.5 rounded-full w-fit border border-amber-300">
                <span className="flex items-center space-x-1.5">
                  <Eye className="w-3.5 h-3.5 text-amber-700" />
                  <span>Pasá el cursor o tocá para ver cada espacio</span>
                </span>
              </div>

              {highlights.map((item, index) => {
                const Icon = item.icon;
                const isHovered = hoveredCard === index;

                return (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => setHoveredCard(isHovered ? null : index)}
                    className="relative h-28 sm:h-24 w-full bg-white rounded-2xl border-2 border-amber-300 shadow-[0_6px_20px_rgba(245,158,11,0.12)] hover:border-amber-500 transition-all duration-300 cursor-pointer overflow-hidden group"
                  >
                    {/* Default state: Icon & Text description */}
                    <div 
                      className={`absolute inset-0 p-4 sm:p-4.5 flex items-center space-x-4 transition-all duration-300 ${
                        isHovered ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
                      }`}
                    >
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border-2 ${item.color} shadow-xs group-hover:scale-105 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0 pr-2">
                        <h4 className="font-['Fredoka'] font-bold text-stone-900 text-base truncate sm:whitespace-normal">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-stone-600 font-light mt-0.5 leading-snug line-clamp-2">{item.desc}</p>
                      </div>
                    </div>

                    {/* Hover state: Pure representative image in the exact same format without text */}
                    <div 
                      className={`absolute inset-0 transition-all duration-400 ease-out ${
                        isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                      }`}
                    >
                      <img 
                        src={item.image} 
                        alt={item.alt}
                        className="w-full h-full object-cover"
                      />
                      {/* Subtle elegant gloss effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/20 via-transparent to-stone-950/20"></div>
                      <div className="absolute top-2 right-2 bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                        {item.title}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-3">
              <a 
                href="#reservas"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold px-8 py-4 rounded-full transition-all text-sm shadow-[0_12px_28px_rgba(16,185,129,0.35)] hover:scale-105 transform cursor-pointer"
              >
                <span>Consultar Disponibilidad del Salón</span>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl h-72 sm:h-84 overflow-hidden shadow-xl relative group border-2 border-amber-300"
            >
              <img 
                src="/src/assets/images/ellugar_adentro.webp" 
                alt="Salón Jafira Eventos Interior"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-5">
                <span className="text-white text-xs font-black bg-emerald-600 px-4 py-1.5 rounded-full shadow-md">Salón Principal</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl h-72 sm:h-84 overflow-hidden shadow-xl relative group mt-10 border-2 border-amber-300"
            >
              <img 
                src="/src/assets/images/ellugar_fachada.webp" 
                alt="Fachada Jafira Eventos City Bell"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-5">
                <span className="text-white text-xs font-black bg-amber-600 px-4 py-1.5 rounded-full shadow-md">Fachada y Acceso</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
