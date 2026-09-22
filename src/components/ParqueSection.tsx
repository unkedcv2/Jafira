import React, { useState } from 'react';
import { Trees, Sun, Moon, Eye } from 'lucide-react';
import { motion } from 'motion/react';

export function ParqueSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const parkFeatures = [
    {
      icon: Trees,
      color: "bg-emerald-100 text-emerald-800 border-emerald-300",
      title: "Arboleda y Sombra Natural",
      desc: "Especies añosas que brindan un reparo fresco y una atmósfera verde inigualable durante todo el año.",
      image: "/src/assets/images/ellugar_afuera_04.webp",
      alt: "Arboleda y senderos verdes en el parque"
    },
    {
      icon: Sun,
      color: "bg-amber-100 text-amber-800 border-amber-300",
      title: "Atardeceres Únicos",
      desc: "Excelente orientación solar para recepciones al caer el sol y celebraciones diurnas con luz dorada.",
      image: "/src/assets/images/ellugar_02.webp",
      alt: "Atardecer mágico en el parque de City Bell"
    },
    {
      icon: Moon,
      color: "bg-teal-100 text-teal-800 border-teal-300",
      title: "Ambientación Nocturna",
      desc: "Iluminación cálida en senderos y copas de árboles para crear una atmósfera de fiesta al anochecer.",
      image: "/src/assets/images/ellugar_afuera_06.webp",
      alt: "Jardines iluminados de noche en Jafira Eventos"
    }
  ];

  return (
    <section id="parque" className="py-24 bg-gradient-to-b from-[#ECFDF5] via-[#D1FAE5]/80 to-[#CCFBF1]/50 text-stone-800 relative overflow-hidden">
      
      {/* Scenic Atmospheric Background Image with Soft Nature Tint */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src="/src/assets/images/ellugar_afuera_04.webp" 
          alt="Parque de fondo" 
          className="w-full h-full object-cover object-center opacity-15 filter blur-xs scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#ECFDF5]/90 via-[#D1FAE5]/85 to-[#CCFBF1]/95"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Images Showcase */}
          <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl h-72 sm:h-84 overflow-hidden shadow-xl relative group border-2 border-emerald-400"
            >
              <img 
                src="/src/assets/images/ellugar_afuera_04.webp" 
                alt="Parque Jafira Eventos City Bell"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-5">
                <span className="text-white text-xs font-black bg-emerald-600 px-4 py-1.5 rounded-full shadow-md">Parque & Naturaleza</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl h-72 sm:h-84 overflow-hidden shadow-xl relative group mt-10 border-2 border-emerald-400"
            >
              <img 
                src="/src/assets/images/ellugar_02.webp" 
                alt="Atardecer en el Parque"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-5">
                <span className="text-white text-xs font-black bg-amber-600 px-4 py-1.5 rounded-full shadow-md">Atardecer Mágico</span>
              </div>
            </motion.div>
          </div>

          {/* Text & Interactive Reveal Cards */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center space-x-2 text-white text-xs font-black uppercase tracking-widest bg-emerald-700 px-4 py-2 rounded-full border border-emerald-800 shadow-md">
              <Trees className="w-4 h-4 text-emerald-200" />
              <span>Naturaleza en City Bell</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-['Fredoka'] font-black text-stone-900 tracking-tight leading-tight">
              El Parque: Tu fiesta rodeada de aire puro
            </h2>
            
            <p className="text-stone-700 leading-relaxed text-base sm:text-lg font-normal">
              Un entorno natural privilegiado con césped impecable y frondosos árboles que se transforma en el corazón de festejos diurnos o recepciones nocturnas bajo las estrellas.
            </p>

            {/* Interactive highlight cards: Text flips into high-res photo without text on hover */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between text-xs font-bold text-emerald-900 bg-emerald-200/70 px-3.5 py-1.5 rounded-full w-fit border border-emerald-400">
                <span className="flex items-center space-x-1.5">
                  <Eye className="w-3.5 h-3.5 text-emerald-800" />
                  <span>Pasá el cursor o tocá para ver cada espacio</span>
                </span>
              </div>

              {parkFeatures.map((feat, index) => {
                const Icon = feat.icon;
                const isHovered = hoveredCard === index;

                return (
                  <div 
                    key={index}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => setHoveredCard(isHovered ? null : index)}
                    className="relative h-28 sm:h-24 w-full bg-white rounded-2xl border-2 border-emerald-300 shadow-[0_6px_20px_rgba(16,185,129,0.12)] hover:border-emerald-500 transition-all duration-300 cursor-pointer overflow-hidden group"
                  >
                    {/* Default state: Icon & Text description */}
                    <div 
                      className={`absolute inset-0 p-4 sm:p-4.5 flex items-center space-x-4 transition-all duration-300 ${
                        isHovered ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
                      }`}
                    >
                      <div className={`w-11 h-11 rounded-xl ${feat.color} border-2 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0 pr-2">
                        <h4 className="font-['Fredoka'] font-bold text-stone-900 text-base truncate sm:whitespace-normal">{feat.title}</h4>
                        <p className="text-xs sm:text-sm text-stone-600 font-light mt-0.5 leading-snug line-clamp-2">{feat.desc}</p>
                      </div>
                    </div>

                    {/* Hover state: Pure representative image in the exact same format without text */}
                    <div 
                      className={`absolute inset-0 transition-all duration-400 ease-out ${
                        isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                      }`}
                    >
                      <img 
                        src={feat.image} 
                        alt={feat.alt}
                        className="w-full h-full object-cover"
                      />
                      {/* Subtle elegant gloss effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/20 via-transparent to-stone-950/20"></div>
                      <div className="absolute top-2 right-2 bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                        {feat.title}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <a 
                href="#reservas"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold px-8 py-4 rounded-full transition-all text-sm shadow-[0_12px_28px_rgba(16,185,129,0.35)] hover:scale-105 transform cursor-pointer"
              >
                <span>Reservar Fecha en el Parque</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
