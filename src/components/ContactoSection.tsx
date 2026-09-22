import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, MessageCircle, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export function ContactoSection() {
  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-[#FFFDF7] via-[#FFF8EE] to-[#FFF6E5] text-stone-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="inline-flex items-center space-x-2 text-stone-900 text-xs font-black uppercase tracking-widest bg-amber-400 px-4 py-2 rounded-full border border-amber-500 shadow-md">
            <MapPin className="w-4 h-4 text-stone-900" />
            <span>Atención y Ubicación</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-['Fredoka'] font-black text-stone-900 tracking-tight">
            Vení a Conocer Jafira Eventos
          </h2>
          <p className="text-stone-700 text-base sm:text-lg font-normal">
            Estamos en una de las zonas más bellas y tranquilas de City Bell. Coordiná tu visita personalizada para recorrer el salón y el parque.
          </p>
        </motion.div>

        {/* Prominent Map & Direct Contact Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Information & Action Cards (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="bg-white border-2 border-amber-300 rounded-[2.5rem] p-6 sm:p-8 shadow-xl shadow-amber-900/5 space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                  Sede Exclusiva
                </span>
                <h3 className="text-2xl sm:text-3xl font-['Fredoka'] font-black text-stone-900 mt-2">
                  Jafira Eventos • City Bell
                </h3>
              </div>
              
              <div className="space-y-4 text-sm text-stone-700">
                <div className="flex items-start space-x-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 border-2 border-amber-300 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 text-base mb-0.5 font-bold">Dirección</strong>
                    <span className="text-stone-600 leading-relaxed">
                      Calle 473 Bis 1364 (entre 19 y 20), City Bell, La Plata, Provincia de Buenos Aires.
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 border-2 border-emerald-300 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 text-base mb-0.5 font-bold">Teléfono Directo</strong>
                    <a href="tel:02214814466" className="text-emerald-700 font-extrabold hover:underline text-base">
                      0221 481-4466
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 border-2 border-teal-300 shadow-xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 text-base mb-0.5 font-bold">Horarios de Visita Previa</strong>
                    <span className="text-stone-600">Lunes a Domingos con cita previa. Coordinamos el horario que te quede más cómodo.</span>
                  </div>
                </div>
              </div>

              {/* Direct Instant Action Buttons */}
              <div className="pt-2 space-y-3">
                <a
                  href="https://wa.me/5492214814466?text=Hola%20Jafira%20Eventos!%20Quisiera%20coordinar%20una%20visita%20para%20conocer%20el%20salón%20y%20el%20parque."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-extrabold py-3.5 px-6 rounded-2xl shadow-lg hover:shadow-green-600/25 transition-all flex items-center justify-center space-x-2.5 text-sm transform hover:scale-[1.02]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Escribinos por WhatsApp</span>
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Calle+473+Bis+1364+City+Bell+La+Plata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white hover:bg-stone-50 text-stone-800 font-bold py-3.5 px-6 rounded-2xl border-2 border-stone-200 shadow-sm transition-all flex items-center justify-center space-x-2 text-sm"
                >
                  <span>Abrir en Google Maps</span>
                  <ExternalLink className="w-4 h-4 text-emerald-600" />
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-amber-200/80 flex items-center justify-between">
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">Redes Sociales</span>
                <div className="flex items-center space-x-3">
                  <a 
                    href="https://www.instagram.com/jafira_eventos" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-stone-800 hover:text-rose-600 transition-colors font-bold text-xs bg-amber-50 hover:bg-amber-100 px-3.5 py-2 rounded-xl border border-amber-200"
                  >
                    <Instagram className="w-4 h-4 text-rose-600" />
                    <span>Instagram</span>
                  </a>
                  <a 
                    href="https://www.facebook.com/jafira.eventos" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-stone-800 hover:text-blue-600 transition-colors font-bold text-xs bg-amber-50 hover:bg-amber-100 px-3.5 py-2 rounded-xl border border-amber-200"
                  >
                    <Facebook className="w-4 h-4 text-blue-600" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Interactive Google Map in full prominent display (7 columns) */}
          <div className="lg:col-span-7">
            <div className="h-full min-h-[420px] bg-white border-2 border-amber-300 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-amber-900/10 relative flex flex-col">
              
              {/* Map header bar */}
              <div className="bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-400 px-6 py-3.5 flex items-center justify-between text-stone-900 font-extrabold text-sm border-b border-amber-400">
                <span className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-stone-900" />
                  <span>Ubicación Satelital • City Bell</span>
                </span>
                <span className="text-xs bg-white/80 px-2.5 py-0.5 rounded-full font-bold">
                  Calle 473 Bis 1364
                </span>
              </div>

              {/* Embedded Interactive Map */}
              <div className="flex-1 w-full relative min-h-[380px]">
                <iframe 
                  title="Mapa Interactivo Jafira Eventos City Bell"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.4674728514035!2d-58.0494444!3d-34.8697222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2dd8b8c2c8f49%3A0x6b71f30141e6e0d2!2sC.%20473%20Bis%201364%2C%20City%20Bell%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
