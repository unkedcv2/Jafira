import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SalonSection } from './components/SalonSection';
import { ParqueSection } from './components/ParqueSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ReservasSection } from './components/ReservasSection';
import { GaleriaSection } from './components/GaleriaSection';
import { ContactoSection } from './components/ContactoSection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { FestiveSectionDivider } from './components/FestiveSectionDivider';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF7ED] text-stone-800 font-['Outfit',sans-serif] selection:bg-amber-500 selection:text-white pb-16 md:pb-0 relative overflow-x-hidden">
      <Navbar />
      <Hero />

      {/* Joyful Festive Highlights Banner - Floating Warm Cards over seamless warm background */}
      <section className="relative z-20 -mt-8 sm:-mt-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 border-2 border-amber-300 shadow-[0_20px_50px_rgba(245,158,11,0.18)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-2 border-b md:border-b-0 md:border-r border-amber-200 pb-6 md:pb-0 md:pr-8">
              <div className="inline-flex items-center space-x-2 text-stone-900 font-black text-xs uppercase tracking-wider bg-amber-400 px-3.5 py-1 rounded-full border border-amber-500 mb-1">
                <span>🎈 Espacio Único</span>
              </div>
              <h3 className="text-xl font-['Fredoka'] font-black text-stone-900">Salón para Celebrar</h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                Comodidad, climatización integral y versatilidad adaptada a cada tipo de festejo o evento.
              </p>
            </div>

            <div className="space-y-2 border-b md:border-b-0 md:border-r border-amber-200 pb-6 md:pb-0 md:pr-8">
              <div className="inline-flex items-center space-x-2 text-white font-black text-xs uppercase tracking-wider bg-emerald-600 px-3.5 py-1 rounded-full border border-emerald-700 mb-1">
                <span>🌳 Naturaleza Viva</span>
              </div>
              <h3 className="text-xl font-['Fredoka'] font-black text-stone-900">Parque Arbolado</h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                Espacios verdes al aire libre, sombra natural y atardeceres mágicos para tus invitados.
              </p>
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 text-white font-black text-xs uppercase tracking-wider bg-rose-500 px-3.5 py-1 rounded-full border border-rose-600 mb-1">
                <span>📍 Ubicación Selecta</span>
              </div>
              <h3 className="text-xl font-['Fredoka'] font-black text-stone-900">Corazón de City Bell</h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                Acceso ágil en una zona residencial tranquila y distinguida, con fácil estacionamiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Playful Festive Bunting Divider into Salon - Zero white background gap */}
      <FestiveSectionDivider variant="bunting" bgClass="bg-gradient-to-b from-[#FFF7ED] to-[#FFF6E5]" />

      <SalonSection />

      {/* Playful Festive Streamers Divider into Parque - Blends warm golden into garden green */}
      <FestiveSectionDivider variant="streamers" bgClass="bg-gradient-to-b from-[#FEF3C7]/40 to-[#ECFDF5]" />

      <ParqueSection />

      {/* Playful Festive Bunting Divider into Reviews - Blends garden emerald into festive coral rose */}
      <FestiveSectionDivider variant="bunting" bgClass="bg-gradient-to-b from-[#CCFBF1]/50 to-[#FFF1F2]" />

      <ReviewsSection />

      {/* Playful Festive Streamers Divider into Reservas - Blends coral rose into luminous ocean teal */}
      <FestiveSectionDivider variant="streamers" bgClass="bg-gradient-to-b from-[#FFF7ED] to-[#F0FDFA]" />

      <ReservasSection />

      {/* Playful Festive Garland into Galería - Blends ocean teal into celebration violet/fuchsia */}
      <FestiveSectionDivider variant="bunting" bgClass="bg-gradient-to-b from-[#E0F2FE]/50 to-[#FAF5FF]" />

      <GaleriaSection />

      {/* Playful Festive Streamers into Contacto - Blends celebration violet into warm golden sand */}
      <FestiveSectionDivider variant="streamers" bgClass="bg-gradient-to-b from-[#FFF7ED] to-[#FFFDF7]" />

      <ContactoSection />

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
