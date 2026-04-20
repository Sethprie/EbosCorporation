"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

interface GhostEye {
  id: number
  x: number
  y: number
  scale: number
  duration: number
  delay: number
  repeatDelay: number
  rotate: number
}

function generateEyes(): GhostEye[] {
  const totalEyes = 4
  const availableQuadrants = [1, 2, 3, 4, 6, 7, 8, 9] // Evitamos el 5 (centro/logo)
  const shuffled = [...availableQuadrants].sort(() => Math.random() - 0.5)

  return Array.from({ length: totalEyes }, (_, i) => {
    const quadrant = shuffled[i]
    const row = Math.floor((quadrant - 1) / 3)
    const col = (quadrant - 1) % 3

    // Rango amplio de escala para variedad de tamaños (pequeños y grandes)
    const finalScale = 0.2 + Math.random() * 0.6;

    return {
      id: Math.random(),
      x: (col * 33.3) + (Math.random() * 20 + 5),
      y: (row * 33.3) + (Math.random() * 20 + 5),
      scale: finalScale, 
      duration: 6 + Math.random() * 6, // Movimiento lento y fluido
      delay: Math.random() * 10,
      repeatDelay: Math.random() * 5,
      rotate: Math.random() * 60 - 30,
    }
  })
}

export function Hero() {
  const [isMobile, setIsMobile] = useState(false)
  const [eyes, setEyes] = useState<GhostEye[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setEyes(generateEyes())
    setMounted(true)

    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!mounted) return <section className="min-h-screen bg-black" />

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden noise"
      style={{
        backgroundImage: 'url(/hero/fondo-1080.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Ghost Eyes Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {eyes.map((eye) => (
          <motion.div
            key={eye.id}
            className="absolute"
            style={{
              left: `${eye.x}%`,
              top: `${eye.y}%`,
              rotate: eye.rotate,
              transformOrigin: "center center", 
            }}
            animate={{
              // Opacidad máxima de 0.6 para mantener el efecto espectral
              opacity: [0, 0.1, 0.6, 0.6, 0.1, 0],
              scale: [eye.scale * 0.9, eye.scale, eye.scale * 1.05, eye.scale * 0.9],
            }}
            transition={{
              duration: eye.duration,
              delay: eye.delay,
              repeat: Infinity,
              repeatDelay: eye.repeatDelay,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/hero/ojo.png"
              alt=""
              width={450}
              height={450}
              className="w-auto h-auto"
              priority // Optimización para eliminar advertencia de LCP
              style={{
                filter: 'blur(1.5px)',
                mixBlendMode: 'screen',
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Background Blobs (Sutiles) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {!isMobile && (
          <>
            <motion.div
              className="absolute top-1/4 -left-10 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl"
              animate={{ x: [0, 30, 0], opacity: [0.05, 0.1, 0.05] }}
              transition={{ duration: 12, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-1/4 -right-10 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl"
              animate={{ x: [0, -30, 0], opacity: [0.05, 0.08, 0.05] }}
              transition={{ duration: 15, repeat: Infinity }}
            />
          </>
        )}
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="flex justify-center mb-8"
        >
          <Image
            src="/hero/logo-verde.png"
            alt="EBOS Corporation"
            width={600}
            height={300}
            className="w-auto max-w-xs sm:max-w-lg"
            priority // Optimización de LCP para el logo
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-2xl sm:text-3xl text-secondary font-mono mb-4"
        >
          Lleva tu visual a un nuevo nivel
        </motion.p>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 opacity-80">
          Transforma tu creatividad con Insane Designs Entertainment
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {["Artista Visual", "Diseñador", "Director", "VFX"].map((role, i) => (
            <span
              key={role}
              className={`px-4 py-2 border text-xs font-mono uppercase tracking-widest ${
                i % 2 === 0 ? "border-primary text-primary" : "border-secondary text-secondary"
              }`}
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/40"
      >
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown size={18} />
      </motion.div>
    </section>
  )
}