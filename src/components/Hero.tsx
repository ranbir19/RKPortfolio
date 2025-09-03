import React from 'react'
import { Linkedin, Instagram, Mail, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import profileImage from '@/assets/ranbir-profile-real.jpg'
import TypingAnimation from '@/components/ui/TypingAnimation'

function HeroPhotoWithHeart({ profileImage }) {
  const [hearts, setHearts] = React.useState([])
  const [origin, setOrigin] = React.useState({ x: 50, y: 50 })
  const [lens, setLens] = React.useState({ x: 50, y: 50 })
  const containerRef = React.useRef(null)

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    const id = Math.random().toString(36).slice(2)
    setHearts((prev) => [...prev, { x: `${x}%`, y: `${y}%`, id }])
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== id))
    }, 1100)
  }

  return (
    <div className="relative group w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80">
      {/* Clickable photo container */}
      <div
        ref={containerRef}
        className="relative w-full h-full rounded-full overflow-hidden bg-background ring-1 ring-white/10 cursor-pointer flex items-center justify-center"
        onClick={handleClick}
        onMouseMove={(e) => {
          const el = containerRef.current
          if (!el) return
          const rect = el.getBoundingClientRect()
          const x = ((e.clientX - rect.left) / rect.width) * 100
          const y = ((e.clientY - rect.top) / rect.height) * 100
          setOrigin({ x, y })
          setLens({ x, y })
        }}
        onMouseLeave={() => {
          setOrigin({ x: 50, y: 50 })
          setLens({ x: 50, y: 50 })
        }}
      >
        {/* Photo wrapper scales on hover; image inside continues floating */}
        <div
          className="relative z-10 w-full h-full rounded-full overflow-hidden transform-gpu transition-transform duration-700 group-hover:scale-105"
          style={{ transformOrigin: `${origin.x}% ${origin.y}%` }}
        >
          <img
            src={profileImage}
            alt="Ranbir Kalia - AI/ML Developer"
            className="w-full h-full object-cover rounded-full animate-float-slow will-change-transform"
            style={{ aspectRatio: '1/1' }}
          />
        </div>

        {/* Creative lens highlight that follows cursor */}
        <div
          className="pointer-events-none absolute rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{
            left: `${lens.x}%`,
            top: `${lens.y}%`,
            width: '55%',
            height: '55%',
            transform: 'translate(-50%, -50%)',
            background:
              'radial-gradient(circle, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.10) 40%, rgba(255,255,255,0) 70%)',
            filter: 'blur(2px)',
            zIndex: 15,
          }}
        />

        {/* Sweep highlight */}
        <div className="pointer-events-none absolute inset-0 rounded-full overflow-hidden z-20">
          <div className="absolute -inset-12 bg-gradient-to-tr from-white/25 to-transparent translate-x-[-60%] rotate-12 animate-sweep [animation-duration:2600ms] [animation-delay:800ms]"></div>
        </div>

        {/* Sparkle Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping [animation-delay:0.2s]"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-ping [animation-delay:0.7s]"></div>
          <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-white rounded-full animate-ping [animation-delay:1.2s]"></div>
        </div>

        {/* Hearts on click */}
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className="absolute"
            style={{ left: heart.x, top: heart.y, transform: 'translate(-50%, -50%)', zIndex: 50, filter: 'drop-shadow(0 0 16px #be185d)' }}
          >
            <span className="relative block">
              <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500 via-red-400 to-yellow-400 blur-2xl opacity-60 animate-heart-glow" />
              <svg className="animate-better-heart" width={80} height={80} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="heartGradientMid" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#be185d" />
                    <stop offset="0.5" stopColor="#db2777" />
                    <stop offset="1" stopColor="#fb7185" />
                  </linearGradient>
                </defs>
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="url(#heartGradientMid)" />
              </svg>
            </span>
          </span>
        ))}

        <style>{`
          @keyframes better-heart {
            0% { transform: scale(0.2) rotate(-20deg); opacity: 0.7; }
            20% { transform: scale(1.3) rotate(10deg); opacity: 1; }
            40% { transform: scale(1.1) rotate(-10deg); opacity: 1; }
            60% { transform: scale(1) rotate(0deg); opacity: 1; }
            80% { transform: scale(1.05) rotate(5deg); opacity: 0.8; }
            100% { transform: scale(0.2) rotate(-20deg); opacity: 0; }
          }
          .animate-better-heart { animation: better-heart 1.1s cubic-bezier(.17,.67,.83,.67); }
          @keyframes heart-glow { 0% { opacity: 0.2; transform: scale(0.5); } 30% { opacity: 0.7; transform: scale(1.2); } 60% { opacity: 0.6; transform: scale(1); } 100% { opacity: 0; transform: scale(0.5); } }
          .animate-heart-glow { animation: heart-glow 1.1s cubic-bezier(.17,.67,.83,.67); }
          @keyframes float-slow { 0% { transform: translateY(0); } 50% { transform: translateY(-6px); } 100% { transform: translateY(0); } }
          .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
          @keyframes sweep { 0% { transform: translateX(-60%) rotate(12deg); } 100% { transform: translateX(140%) rotate(12deg); } }
          .animate-sweep { animation: sweep 2.8s ease-in-out infinite; }
        `}</style>
      </div>

      {/* Hover-only border overlay that scales without affecting the image */}
      <div className="pointer-events-none absolute inset-0 -m-1 rounded-full ring-2 ring-primary/60 ring-offset-2 ring-offset-background transition-transform duration-500 group-hover:scale-110"></div>
    </div>
  )
}

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero px-4 pt-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Mobile: Profile Image above heading */}
        <div className="block md:hidden mb-6 flex justify-center">
          <div className="relative group w-40 h-40 sm:w-80 sm:h-80 md:w-96 md:h-96 overflow-visible">
            <div className="w-full h-full">
              <HeroPhotoWithHeart profileImage={profileImage} />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <div className="space-y-4">
            <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-tight">
              <span className="text-white">Hi, I'm </span>
              <span className="inline-block">
                <TypingAnimation text="Ranbir Kalia" speed={120} colorClass="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              AI/ML Developer & Social Media Manager
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0 leading-relaxed">
            B.Tech student specializing in Artificial Intelligence and Machine Learning. 
            Managing @med_studyblr_ with 45K+ followers while developing innovative AI solutions 
            and leading tech initiatives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button onClick={scrollToContact} size="lg" variant="gradient" className="text-lg px-8 py-3">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button onClick={scrollToPortfolio} variant="outline" size="lg" className="text-lg px-8 py-3">
              <Download className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center md:justify-start pt-4 relative z-10">
            <a href="https://instagram.com/ranbirkalia3" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/ranbir-kalia-27184b219/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ranbirkalia@gmail.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Desktop: Profile Image right of heading */}
        <div className="hidden md:flex items-center justify-center md:justify-end overflow-visible">
          <div className="relative group w-80 h-80 flex items-center justify-center">
            <div className="w-full h-full">
              <HeroPhotoWithHeart profileImage={profileImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero