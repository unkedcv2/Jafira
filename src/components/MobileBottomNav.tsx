import React from 'react';
import { Home, Building2, Calendar, Images, MapPin } from 'lucide-react';

export function MobileBottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t-2 border-amber-200/90 px-3 py-1.5 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] flex items-end justify-around">
      
      {/* 1. Inicio */}
      <a 
        href="#inicio" 
        className="flex flex-col items-center space-y-1 text-stone-600 hover:text-amber-600 transition-colors py-1 flex-1"
      >
        <Home className="w-5 h-5" />
        <span className="text-[11px] font-bold">Inicio</span>
      </a>

      {/* 2. Salón */}
      <a 
        href="#espacio" 
        className="flex flex-col items-center space-y-1 text-stone-600 hover:text-amber-600 transition-colors py-1 flex-1"
      >
        <Building2 className="w-5 h-5" />
        <span className="text-[11px] font-bold">Salón</span>
      </a>

      {/* 3. RESERVAS (In the middle, bigger and prominently highlighted) */}
      <div className="flex-1 flex justify-center -mt-7">
        <a 
          href="#reservas" 
          className="group flex flex-col items-center"
          aria-label="Reservar fecha"
        >
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-600 text-white flex flex-col items-center justify-center shadow-[0_10px_25px_rgba(245,158,11,0.5)] border-4 border-white group-hover:scale-110 group-active:scale-95 transition-all duration-200">
            <Calendar className="w-6 h-6 stroke-[2.5]" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 mt-0.5">
            Reservar
          </span>
        </a>
      </div>

      {/* 4. Galería (Replaces Parque) */}
      <a 
        href="#galeria" 
        className="flex flex-col items-center space-y-1 text-stone-600 hover:text-purple-600 transition-colors py-1 flex-1"
      >
        <Images className="w-5 h-5" />
        <span className="text-[11px] font-bold">Galería</span>
      </a>

      {/* 5. Contacto & Ubicación */}
      <a 
        href="#contacto" 
        className="flex flex-col items-center space-y-1 text-stone-600 hover:text-emerald-600 transition-colors py-1 flex-1"
      >
        <MapPin className="w-5 h-5" />
        <span className="text-[11px] font-bold">Ubicación</span>
      </a>

    </div>
  );
}
