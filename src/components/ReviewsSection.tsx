import React from 'react';
import { Star, Quote, CheckCircle2, MessageSquareHeart } from 'lucide-react';
import { motion } from 'motion/react';

export function ReviewsSection() {
  const reviews = [
    {
      author: "Florencia Méndez",
      time: "Hace 2 semanas",
      rating: 5,
      avatar: "FM",
      avatarBg: "bg-rose-600 text-white",
      eventType: "Cumple infantil y familiar",
      text: "¡Excelente lugar! Festejamos el cumple de mi nene y todo salió impecable. El parque es hermoso para que los chicos corran al aire libre, y el salón está súper cuidado y cómodo."
    },
    {
      author: "Mariano Castelli",
      time: "Hace 1 mes",
      rating: 5,
      avatar: "MC",
      avatarBg: "bg-amber-600 text-white",
      eventType: "Bautismo y Almuerzo",
      text: "Hermoso salón en una zona muy tranquila de City Bell. Los invitados quedaron fascinados con los árboles y la galería exterior. Muy buena iluminación tanto de día como de noche."
    },
    {
      author: "Valeria Gómez",
      time: "Hace 2 meses",
      rating: 5,
      avatar: "VG",
      avatarBg: "bg-teal-700 text-white",
      eventType: "Fiesta de 15",
      text: "Celebramos los 15 de mi hija y superó las expectativas. El espacio es muy versátil, el personal estuvo siempre predispuesto y las instalaciones impecables. Muy recomendable."
    },
    {
      author: "Lucas Benítez",
      time: "Hace 3 meses",
      rating: 5,
      avatar: "LB",
      avatarBg: "bg-emerald-600 text-white",
      eventType: "Evento de Fin de Año",
      text: "Lo alquilamos para un evento de fin de año con la empresa. La combinación del parque con el salón cubierto es ideal. Muy cómodo el acceso en City Bell y estacionamiento sencillo."
    }
  ];

  return (
    <section id="opiniones" className="py-24 bg-gradient-to-b from-[#FFF1F2] via-[#FFE4E6]/60 to-[#FFF7ED] text-stone-800 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-14"
        >
          {/* Google Rating Badge */}
          <div className="inline-flex items-center space-x-2.5 bg-white px-5 py-2.5 rounded-full border-2 border-rose-300 shadow-md">
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24Z"/>
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15Z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z"/>
            </svg>
            <div className="flex items-center space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-['Fredoka'] font-black text-stone-900 text-sm ml-1">4.9 / 5</span>
            <span className="text-xs text-rose-900 font-extrabold bg-rose-100 px-2.5 py-0.5 rounded-full border border-rose-300">
              Reseñas Verificadas
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-['Fredoka'] font-black text-stone-900 tracking-tight">
            Lo que dicen quienes ya festejaron con nosotros
          </h2>
          <p className="text-stone-700 text-base sm:text-lg font-normal">
            Experiencias reales de familias, agasajados y empresas que eligieron Jafira Eventos en City Bell.
          </p>
        </motion.div>

        {/* Reviews Grid: Exactly 4 in a single horizontal row on desktop! */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-5 sm:p-6 lg:p-5 border-2 border-rose-200/90 shadow-[0_8px_30px_rgba(244,63,94,0.06)] hover:border-rose-400 hover:shadow-xl transition-all flex flex-col justify-between relative group"
            >
              <div className="absolute top-4 right-4 text-rose-200 group-hover:text-rose-300 transition-colors pointer-events-none">
                <Quote className="w-8 h-8 opacity-50" />
              </div>

              <div className="space-y-3">
                {/* Stars & Event Tag */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center space-x-0.5">
                    {Array.from({ length: rev.rating }).map((_, starIdx) => (
                      <Star key={starIdx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-rose-50 text-rose-800 px-2.5 py-0.5 rounded-full border border-rose-200 w-fit line-clamp-1">
                    {rev.eventType}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed font-normal italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-3 pt-4 mt-4 border-t border-rose-100">
                <div className={`w-9 h-9 rounded-full ${rev.avatarBg} font-black text-xs flex items-center justify-center shadow-xs shrink-0`}>
                  {rev.avatar}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center space-x-1">
                    <span className="font-bold text-stone-900 text-xs sm:text-sm truncate">{rev.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  </div>
                  <span className="text-[10px] text-stone-500 font-normal block truncate">{rev.time} • Google</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action within reviews */}
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-stone-900 hover:text-rose-600 text-sm font-extrabold bg-white px-8 py-3.5 rounded-full border-2 border-rose-300 shadow-md transition-all hover:scale-105"
          >
            <MessageSquareHeart className="w-4 h-4 text-rose-500" />
            <span>Ver más opiniones en Google Maps</span>
            <span className="text-rose-600 font-bold">↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}
