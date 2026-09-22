import React from 'react';

export function FestiveDecor() {
  // Realistic confetti burst/cannon explosion pieces radiating outward from corner/sides
  const confettiExplosion = Array.from({ length: 50 }).map((_, i) => {
    const colors = [
      'bg-amber-400',
      'bg-emerald-500',
      'bg-teal-400',
      'bg-rose-400',
      'bg-yellow-300',
      'bg-violet-400',
      'bg-sky-400',
      'bg-orange-400',
      'bg-pink-400'
    ];
    const color = colors[i % colors.length];
    
    // Distribute origin across left cannon (first 25) and right cannon (last 25)
    const isLeftCannon = i < 25;
    const originX = isLeftCannon ? -5 : 105;
    const originY = 30 + (i % 5) * 10;
    
    // Spread angles and distances
    const angleRad = isLeftCannon 
      ? (-45 + (i * 4.5)) * (Math.PI / 180)
      : (225 - ((i - 25) * 4.5)) * (Math.PI / 180);
      
    const distance = 160 + ((i * 19) % 320);
    const targetX = Math.round(Math.cos(angleRad) * distance);
    const targetY = Math.round(Math.sin(angleRad) * distance);
    
    // Square sizes
    const size = (i % 3 === 0) ? 'w-3 h-3' : (i % 3 === 1) ? 'w-3.5 h-3.5' : 'w-2.5 h-2.5';
    const delay = `${(i * 0.08).toFixed(2)}s`;
    const duration = `${(3.2 + (i % 3) * 0.7).toFixed(1)}s`;
    const initialRot = (i * 35) % 360;

    return (
      <div
        key={`confetti-${i}`}
        className={`absolute ${color} ${size} rounded-[2px] opacity-80 pointer-events-none shadow-sm`}
        style={{
          left: `${originX}%`,
          top: `${originY}%`,
          ['--tx' as string]: `${targetX}px`,
          ['--ty' as string]: `${targetY}px`,
          ['--rot' as string]: `${initialRot}deg`,
          animation: `burstFlight ${duration} cubic-bezier(0.25, 1, 0.5, 1) infinite`,
          animationDelay: delay,
        }}
      />
    );
  });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Dynamic Confetti Popper Explosion */}
      {confettiExplosion}

      <style>{`
        @keyframes burstFlight {
          0% {
            opacity: 0;
            transform: translate(0, 0) rotate(var(--rot, 0deg)) scale(0.3);
          }
          15% {
            opacity: 0.95;
            transform: translate(calc(var(--tx) * 0.45), calc(var(--ty) * 0.45)) rotate(calc(var(--rot) + 180deg)) scale(1.15);
          }
          60% {
            opacity: 0.85;
            transform: translate(var(--tx), var(--ty)) rotate(calc(var(--rot) + 360deg)) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(calc(var(--tx) + 15px), calc(var(--ty) + 70px)) rotate(calc(var(--rot) + 540deg)) scale(0.85);
          }
        }
      `}</style>
    </div>
  );
}
