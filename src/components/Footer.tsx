import React from 'react';

export function Footer() {
  return (
    <footer className="bg-stone-100 text-stone-600 py-16 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand Logo - Much larger, without 'Jafira Eventos' text */}
        <div className="space-y-3 text-center md:text-left flex flex-col items-center md:items-start">
          <a href="#inicio" className="block transform hover:scale-105 transition-transform">
            <img 
              src="/assets/logos/jafira_logo.svg" 
              alt="Jafira Logo" 
              className="h-20 sm:h-28 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.06)]" 
            />
          </a>
          <p className="text-xs text-stone-500 max-w-sm">
            Salón de eventos con amplio parque en City Bell, La Plata. El lugar ideal para celebrar tus momentos más importantes.
          </p>
        </div>

        {/* Quick Nav links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold">
          <a href="#inicio" className="hover:text-emerald-600 transition-colors">Inicio</a>
          <a href="#espacio" className="hover:text-emerald-600 transition-colors">El Salón</a>
          <a href="#parque" className="hover:text-emerald-600 transition-colors">Parque</a>
          <a href="#reservas" className="hover:text-emerald-600 transition-colors">Reservas</a>
          <a href="tel:02214814466" className="hover:text-emerald-600 transition-colors font-bold text-emerald-600">0221 481-4466</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-stone-200 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} Jafira Eventos. Todos los derechos reservados. Calle 473 Bis 1364, City Bell, La Plata.
      </div>
    </footer>
  );
}
