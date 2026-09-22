import React from 'react';

interface FestiveSectionDividerProps {
  variant?: 'bunting' | 'streamers' | 'bubbles';
  bgClass?: string;
}

export function FestiveSectionDivider({ variant = 'bunting', bgClass = '' }: FestiveSectionDividerProps) {
  if (variant === 'bunting') {
    // Festive party pennants / banderines garland
    const flags = [
      { color: 'text-amber-500', bg: '#F59E0B' },
      { color: 'text-emerald-500', bg: '#10B981' },
      { color: 'text-rose-500', bg: '#F43F5E' },
      { color: 'text-teal-500', bg: '#14B8A6' },
      { color: 'text-amber-400', bg: '#FBBF24' },
      { color: 'text-orange-500', bg: '#F97316' },
      { color: 'text-emerald-600', bg: '#059669' },
      { color: 'text-rose-400', bg: '#FB7185' },
      { color: 'text-amber-500', bg: '#F59E0B' },
      { color: 'text-teal-600', bg: '#0D9488' },
      { color: 'text-orange-400', bg: '#FB923C' },
      { color: 'text-emerald-500', bg: '#10B981' },
    ];

    return (
      <div className={`relative w-full overflow-hidden py-4 select-none pointer-events-none z-20 ${bgClass}`}>
        {/* Subtle curved festive string holding the party flags */}
        <div className="max-w-5xl mx-auto px-4 relative">
          <svg className="w-full h-8 overflow-visible" viewBox="0 0 1000 32" fill="none">
            <path 
              d="M0 10 Q 250 28, 500 12 T 1000 10" 
              stroke="#D97706" 
              strokeWidth="1.5" 
              strokeDasharray="4 4"
              opacity="0.7"
            />
          </svg>

          {/* Pennant flags hanging from string */}
          <div className="flex justify-between items-start -mt-6 px-2 sm:px-6">
            {flags.map((flag, i) => (
              <div 
                key={i} 
                className="transform transition-transform hover:scale-125 duration-300"
                style={{
                  transform: `translateY(${Math.sin((i / flags.length) * Math.PI) * 8}px) rotate(${(i % 2 === 0 ? 4 : -4)}deg)`
                }}
              >
                <svg width="22" height="24" viewBox="0 0 24 28" fill="none" className="drop-shadow-sm">
                  <polygon points="0,0 24,0 12,28" fill={flag.bg} />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'streamers') {
    // Playful ribbon wave with colorful confetti dots
    return (
      <div className={`relative w-full overflow-hidden py-5 select-none pointer-events-none z-20 ${bgClass}`}>
        <div className="max-w-4xl mx-auto flex items-center justify-center space-x-3 px-4">
          <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-amber-500 to-emerald-500 rounded-full"></div>
          
          <div className="flex items-center space-x-2.5">
            <span className="w-3 h-3 rounded-full bg-amber-500 shadow-md animate-bounce" style={{ animationDelay: '0s' }}></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-md animate-bounce" style={{ animationDelay: '0.15s' }}></span>
            <span className="w-3.5 h-3.5 rounded-full bg-rose-500 shadow-md animate-bounce" style={{ animationDelay: '0.3s' }}></span>
            <span className="w-2 h-2 rounded-full bg-orange-500 shadow-md animate-bounce" style={{ animationDelay: '0.45s' }}></span>
            <span className="w-3 h-3 rounded-full bg-teal-500 shadow-md animate-bounce" style={{ animationDelay: '0.6s' }}></span>
          </div>

          <div className="h-0.5 flex-1 bg-gradient-to-r from-emerald-500 via-amber-500 to-transparent rounded-full"></div>
        </div>
      </div>
    );
  }

  // 'bubbles' - Cheerful celebration dots
  return (
    <div className={`relative w-full overflow-hidden py-4 select-none pointer-events-none z-20 ${bgClass}`}>
      <div className="max-w-3xl mx-auto flex items-center justify-around px-8 opacity-85">
        <div className="w-3 h-3 rounded-full bg-amber-500 shadow-xs"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-xs"></div>
        <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-xs"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-xs"></div>
        <div className="w-3.5 h-3.5 rounded-full bg-teal-500 shadow-xs"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-xs"></div>
      </div>
    </div>
  );
}
