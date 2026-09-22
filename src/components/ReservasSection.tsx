import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, Send, Check } from 'lucide-react';
import { motion } from 'motion/react';

const MONTH_NAMES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const DAYS_OF_WEEK = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

export function ReservasSection() {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Set initial selected date to tomorrow if not occupied
  const getInitialAvailableDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    while ([6, 12, 13, 19, 20, 26, 27].includes(d.getDate())) {
      d.setDate(d.getDate() + 1);
    }
    return d;
  };

  const [selectedDate, setSelectedDate] = useState<Date>(getInitialAvailableDate);
  const [selectedShift, setSelectedShift] = useState<'tarde' | 'noche'>('noche');
  const [eventType, setEventType] = useState<string>('Cumpleaños');
  const [guestCount, setGuestCount] = useState<string>('50');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Calendar Helpers
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();

  const prevMonthDays = new Date(year, month, 0).getDate();

  const daysGrid: { day: number; isCurrentMonth: boolean; date: Date }[] = [];

  // Previous Month's trailing days
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    const prevDay = prevMonthDays - i;
    daysGrid.push({
      day: prevDay,
      isCurrentMonth: false,
      date: new Date(year, month - 1, prevDay)
    });
  }

  // Current Month's days
  for (let i = 1; i <= daysInMonth; i++) {
    daysGrid.push({
      day: i,
      isCurrentMonth: true,
      date: new Date(year, month, i)
    });
  }

  // Next Month's leading days to complete the calendar grid (multiple of 7)
  const totalSlots = 42;
  const nextMonthDaysCount = totalSlots - daysGrid.length;
  for (let i = 1; i <= nextMonthDaysCount; i++) {
    daysGrid.push({
      day: i,
      isCurrentMonth: false,
      date: new Date(year, month + 1, i)
    });
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  };

  const isSelected = (date: Date) => {
    return selectedDate.getDate() === date.getDate() &&
      selectedDate.getMonth() === date.getMonth() &&
      selectedDate.getFullYear() === date.getFullYear();
  };

  const isPast = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  // Realistic occupied dates (Fridays / Saturdays / Sundays popular for celebrations)
  const isOccupied = (date: Date) => {
    const day = date.getDate();
    return [6, 12, 13, 19, 20, 26, 27].includes(day);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      return;
    }
    setIsSubmitted(true);
  };

  const formattedSelectedDate = selectedDate.toLocaleDateString('es-AR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <section id="reservas" className="py-24 bg-gradient-to-b from-[#F0FDFA] via-[#CCFBF1]/70 to-[#E0F2FE]/50 text-stone-800 relative overflow-hidden">
      
      {/* Subtle celebratory venue background image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src="/src/assets/images/ellugar_adentro_02.webp" 
          alt="Ambiente salón reservas" 
          className="w-full h-full object-cover opacity-10 filter blur-xs scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0FDFA]/90 via-[#CCFBF1]/80 to-[#E0F2FE]/90"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 text-teal-900 text-xs font-black uppercase tracking-widest bg-teal-200 px-4 py-2 rounded-full border border-teal-400 shadow-md">
            <span>📅 Agenda Online 2026</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-['Fredoka'] font-black text-stone-900 tracking-tight">
            Reservá tu fecha en Jafira Eventos
          </h2>
          <p className="text-stone-700 text-base sm:text-lg font-normal">
            Elegí tu fecha en el calendario interactivo y completá los datos para solicitar tu reserva de forma ágil y 100% online.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-md border border-amber-200/80 rounded-[2.5rem] p-6 sm:p-10 shadow-[0_15px_45px_rgba(245,158,11,0.08)]">
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 space-y-6"
            >
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-['Fredoka'] font-bold text-stone-900">¡Reserva Solicitada!</h3>
              <p className="text-stone-600 max-w-md mx-auto text-base">
                Gracias <span className="font-bold text-stone-900">{fullName}</span>. Hemos registrado tu pedido para el día <span className="font-bold text-emerald-700">{formattedSelectedDate}</span> ({selectedShift === 'noche' ? 'Turno Noche' : 'Turno Tarde'}). Nos comunicaremos con vos a la brevedad.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-3.5 rounded-full transition-colors text-sm shadow-sm"
              >
                Hacer otra reserva de fecha
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Visual Calendar Widget (Left Column - 7 cols) */}
                <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-stone-800 font-['Fredoka']">
                      {MONTH_NAMES[month]} {year}
                    </h3>
                    <div className="flex space-x-2">
                      <button
                        type="button"
                        onClick={handlePrevMonth}
                        className="p-2 rounded-lg hover:bg-stone-100 border border-stone-200 text-stone-600 transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNextMonth}
                        className="p-2 rounded-lg hover:bg-stone-100 border border-stone-200 text-stone-600 transition-colors"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                    {DAYS_OF_WEEK.map((day) => (
                      <div key={day} className="py-2">{day}</div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1">
                    {daysGrid.map((item, index) => {
                      const selected = isSelected(item.date);
                      const current = item.isCurrentMonth;
                      const past = isPast(item.date);
                      const today = isToday(item.date);
                      const occupied = isOccupied(item.date);

                      return (
                        <button
                          key={index}
                          type="button"
                          disabled={past || occupied}
                          onClick={() => !occupied && setSelectedDate(item.date)}
                          className={`
                            h-12 rounded-xl flex flex-col items-center justify-center relative text-sm font-semibold transition-all
                            ${!current && 'text-stone-300'}
                            ${occupied && 'bg-rose-50/90 text-rose-400 border border-rose-200/90 cursor-not-allowed'}
                            ${current && !selected && !past && !occupied && 'text-stone-700 hover:bg-emerald-50 hover:text-emerald-700'}
                            ${past && !occupied && 'text-stone-200 cursor-not-allowed'}
                            ${today && !selected && !occupied && 'border border-amber-500/50 bg-amber-50/50 text-amber-800'}
                            ${selected && 'bg-emerald-600 text-white shadow-md shadow-emerald-600/15'}
                          `}
                        >
                          <span className={occupied ? 'text-xs text-rose-400 line-through' : ''}>{item.day}</span>
                          {occupied && (
                            <span className="text-[8px] font-bold text-rose-600 uppercase tracking-tighter -mt-0.5">Ocupado</span>
                          )}
                          {today && !selected && !occupied && (
                            <span className="absolute bottom-1 w-1 h-1 bg-amber-500 rounded-full"></span>
                          )}
                          {selected && (
                            <span className="absolute bottom-1 w-1.5 h-1.5 bg-white rounded-full"></span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Calendar Legend */}
                  <div className="mt-6 pt-4 border-t border-stone-100 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-stone-500">
                    <div className="flex items-center space-x-2">
                      <div className="w-3.5 h-3.5 rounded-md bg-emerald-600 shrink-0"></div>
                      <span>Seleccionada</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3.5 h-3.5 rounded-md bg-rose-100 border border-rose-200 shrink-0"></div>
                      <span className="text-rose-600 font-medium">Ocupada</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3.5 h-3.5 rounded-md bg-stone-100 border border-stone-200 shrink-0"></div>
                      <span>Disponible</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3.5 h-3.5 rounded-md border border-amber-500/50 bg-amber-50/50 shrink-0"></div>
                      <span>Hoy</span>
                    </div>
                  </div>
                </div>

                {/* Form Inputs (Right Column - 5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                  
                  {/* Selected Date Summary Banner */}
                  <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 flex items-center justify-between shadow-xs">
                    <div>
                      <span className="block text-[11px] font-bold text-emerald-800 uppercase tracking-wider">Fecha Elegida</span>
                      <strong className="text-emerald-950 font-['Fredoka'] text-sm sm:text-base capitalize">
                        {formattedSelectedDate}
                      </strong>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Shift Selection */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-2 uppercase tracking-wider">
                      Turno de la Celebración
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedShift('tarde')}
                        className={`py-3 px-2.5 rounded-xl font-bold text-xs transition-all border ${
                          selectedShift === 'tarde'
                            ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                            : 'bg-white text-stone-600 border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        🌞 Tarde (13 a 18 hs)
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedShift('noche')}
                        className={`py-3 px-2.5 rounded-xl font-bold text-xs transition-all border ${
                          selectedShift === 'noche'
                            ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                            : 'bg-white text-stone-600 border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        🌙 Noche (20 a 03 hs)
                      </button>
                    </div>
                  </div>

                  {/* Event Type & Guest Count */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wider">Festejo</label>
                      <select 
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className="w-full bg-white border border-stone-200 rounded-xl px-3 py-3 text-stone-800 focus:outline-none focus:border-emerald-500 text-sm shadow-xs"
                      >
                        <option value="Cumpleaños">Cumpleaños</option>
                        <option value="Casamiento">Casamiento</option>
                        <option value="Bautismo">Bautismo</option>
                        <option value="Comunión">Comunión</option>
                        <option value="Corporativo">Corporativo</option>
                        <option value="Otro">Otro Festejo</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wider">Invitados</label>
                      <select 
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        className="w-full bg-white border border-stone-200 rounded-xl px-3 py-3 text-stone-800 focus:outline-none focus:border-emerald-500 text-sm shadow-xs"
                      >
                        <option value="30">Hasta 30</option>
                        <option value="50">Hasta 50</option>
                        <option value="80">Hasta 80</option>
                        <option value="120">Hasta 120</option>
                        <option value="150">150+</option>
                      </select>
                    </div>
                  </div>

                  {/* Personal Info fields (Without Notas o Consultas) */}
                  <div className="space-y-3.5 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">Nombre y Apellido *</label>
                      <input 
                        type="text"
                        placeholder="Ej. María González"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-stone-800 focus:outline-none focus:border-emerald-500 text-sm shadow-xs"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-stone-700 mb-1">WhatsApp / Tel *</label>
                        <input 
                          type="tel"
                          placeholder="Ej. 2215551234"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-stone-800 focus:outline-none focus:border-emerald-500 text-sm shadow-xs"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-stone-700 mb-1">Correo</label>
                        <input 
                          type="email"
                          placeholder="tu@correo.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-stone-800 focus:outline-none focus:border-emerald-500 text-sm shadow-xs"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button - Changed to only "Reservar" */}
                  <button 
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 text-base transform hover:scale-[1.01]"
                  >
                    <Send className="w-5 h-5" />
                    <span>Reservar</span>
                  </button>

                </div>

              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
