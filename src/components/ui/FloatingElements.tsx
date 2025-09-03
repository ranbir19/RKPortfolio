import React from 'react'

const FloatingElements: React.FC = () => {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      {/* Soft gradient blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vmin] h-[40vmin] rounded-full bg-primary/20 blur-3xl animate-blob [animation-duration:16s]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vmin] h-[50vmin] rounded-full bg-accent/25 blur-3xl animate-blob [animation-duration:20s] [animation-delay:2s]"></div>
      <div className="absolute top-[20%] right-[15%] w-[28vmin] h-[28vmin] rounded-full bg-pink-500/15 blur-3xl animate-blob [animation-duration:18s] [animation-delay:4s]"></div>

      {/* Floating small dots */}
      {[...Array(14)].map((_, i) => (
        <span
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-white/30 animate-float-dot"
          style={{
            left: `${(i * 7) % 100}%`,
            top: `${(i * 13) % 100}%`,
            animationDelay: `${(i % 7) * 0.7}s`,
            animationDuration: `${8 + (i % 5)}s`,
          }}
        />
      ))}

      <style>{`
        @keyframes blob {
          0% { transform: translate(0,0) scale(1); }
          33% { transform: translate(10px, -20px) scale(1.05); }
          66% { transform: translate(-12px, 10px) scale(0.98); }
          100% { transform: translate(0,0) scale(1); }
        }
        .animate-blob { animation: blob 18s ease-in-out infinite; }
        @keyframes float-dot {
          0% { transform: translateY(0); opacity: .6; }
          50% { transform: translateY(-18px); opacity: 1; }
          100% { transform: translateY(0); opacity: .6; }
        }
        .animate-float-dot { animation: float-dot 9s ease-in-out infinite; }
      `}</style>
    </div>
  )
}

export default FloatingElements
