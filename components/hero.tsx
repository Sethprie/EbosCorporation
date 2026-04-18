"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden noise">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left accent gradient */}
        {isMobile ? (
          <div className="absolute top-20 -left-20 w-72 h-72 bg-primary rounded-full filter blur-3xl opacity-20 dark:opacity-15 hero-blob" />
        ) : (
          <motion.div
            className="absolute top-20 -left-20 w-72 h-72 bg-primary rounded-full filter blur-3xl opacity-20 dark:opacity-15 hero-blob"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
        {/* Right accent gradient */}
        {isMobile ? (
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-secondary rounded-full filter blur-3xl opacity-15 dark:opacity-10 hero-blob" />
        ) : (
          <motion.div
            className="absolute bottom-20 -right-20 w-96 h-96 bg-secondary rounded-full filter blur-3xl opacity-15 dark:opacity-10 hero-blob"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
        {/* Center glow - simplified on mobile */}
        {isMobile ? (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full filter blur-[100px] opacity-10 dark:opacity-5 hero-blob" />
        ) : (
          <motion.div
            key="center-glow"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full filter blur-[100px] opacity-10 dark:opacity-5 hero-blob"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-2 sm:px-4 max-w-6xl mx-auto w-full">
        {/* Brand name */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-2 break-words"
        >
          <span className="text-primary">EBOS</span>
          <br />
          <span className="text-foreground">CORPORATION</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl text-secondary font-mono mb-6 px-2"
        >
          Lleva tu visual a un nuevo nivel
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-sm sm:max-w-md md:max-w-2xl mx-auto mb-8 px-2"
        >
          Transforma tu creatividad con Insane Designs Entertainment
        </motion.p>

        {/* Roles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-8 px-2"
        >
          {["Artista Visual", "Diseñador", "Director", "VFX"].map((role, index) => (
            <span
              key={role}
              className={`px-3 py-2 border text-sm font-mono uppercase tracking-wider ${
                index % 2 === 0 ? "border-primary text-primary" : "border-secondary text-secondary"
              }`}
            >
              {role}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-primary"
        >
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
