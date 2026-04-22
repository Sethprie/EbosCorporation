"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Home, Instagram, Music, MessageSquare, Facebook, Phone, Briefcase, Globe, Twitter } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface SocialLink {
  id: string
  name: string
  url: string
  icon: React.ReactNode
  color: string
  hoverColor: string
}

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

const socialLinks: SocialLink[] = [
  {
    id: "instagram",
    name: "INSTAGRAM",
    url: "https://www.instagram.com/eboscorporation",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" fill="currentColor"/>
      </svg>
    ),
    color: "bg-gradient-to-br from-purple-600 via-pink-600 to-red-600",
    hoverColor: "hover:from-purple-700 hover:via-pink-700 hover:to-red-700"
  },
  {
    id: "tiktok",
    name: "TIK TOK",
    url: "https://www.tiktok.com/@eboscorporation",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.08.02 4.16-.02 6.23-.05 1.68-.62 3.32-1.6 4.61-1.57 2.09-4.21 3.23-6.8 2.99-2.5-.2-4.86-1.66-6.02-3.86-1.15-2.13-1.27-4.82-.33-7.07.92-2.21 2.92-3.96 5.22-4.59.92-.25 1.89-.31 2.84-.23-.01.88-.03 1.75-.04 2.62-.9-.13-1.86-.09-2.72.27-.85.36-1.58.95-2.1 1.71-.77 1.18-.95 2.71-.48 4.04.45 1.29 1.53 2.33 2.85 2.72 1.31.39 2.79.21 3.93-.59.84-.59 1.43-1.48 1.65-2.48.15-.67.17-1.36.15-2.04-.02-3.92 0-7.84-.01-11.76z" fill="currentColor"/>
      </svg>
    ),
    color: "bg-gradient-to-br from-black via-gray-900 to-black",
    hoverColor: "hover:from-gray-800 hover:via-gray-700 hover:to-black"
  },
  {
    id: "x",
    name: "X",
    url: "https://x.com/remsyto",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
      </svg>
    ),
    color: "bg-gray-900",
    hoverColor: "hover:bg-gray-700"
  },
  {
    id: "facebook",
    name: "FACEBOOK",
    url: "https://www.facebook.com/remsy.alcalaa",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
      </svg>
    ),
    color: "bg-blue-600",
    hoverColor: "hover:bg-blue-700"
  },
  {
    id: "whatsapp",
    name: "WHATSAPP",
    url: "https://api.whatsapp.com/send?phone=4142030245",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.075c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="currentColor"/>
      </svg>
    ),
    color: "bg-green-600",
    hoverColor: "hover:bg-green-700"
  },
  {
    id: "portafolios",
    name: "PORTAFOLIOS",
    url: "https://www.behance.net/remsyalcal96af",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 7h-7v-2c0-2.761-2.239-5-5-5s-5 2.239-5 5v2h-7v15h24v-15zm-16-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm14 15h-20v-11h20v11z" fill="currentColor"/>
      </svg>
    ),
    color: "bg-blue-500",
    hoverColor: "hover:bg-blue-600"
  }
]

export function BioLink() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
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
      {/* Ghost Eyes Layer - matching hero section */}
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
              style={{
                filter: 'blur(1.5px)',
                mixBlendMode: 'screen',
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Background Blobs - matching hero section */}
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
      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <div className="relative w-44 h-44 mx-auto mb-6">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-2xl"
          />
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-full h-full flex items-center justify-center"
          >
            <Image
              src="/hero/logo-verde.png"
              alt="EBOS Corporation"
              fill
              className="object-contain drop-shadow-2xl"
              loading="eager"
            />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-2"
        >
          <p className="text-primary text-lg font-mono tracking-wider mb-3">
            @eboscorporation
          </p>
          <p className="text-secondary text-2xl max-w-md mx-auto font-light mb-4">
            Lleva tu visual a un nuevo nivel
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
        </motion.div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="w-full max-w-lg space-y-3 relative z-10"
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 + index * 0.1 }}
            onHoverStart={() => setHoveredLink(link.id)}
            onHoverEnd={() => setHoveredLink(null)}
            className={`group relative block w-full px-5 py-4 rounded-xl border border-primary/30 backdrop-blur-sm transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl bg-card hover:bg-primary/10 hover:border-primary/50`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <motion.div
                  animate={{
                    scale: hoveredLink === link.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                  className="text-primary"
                >
                  {link.icon}
                </motion.div>
                <span className="font-semibold text-foreground text-base tracking-wide">{link.name}</span>
              </div>
              
              <motion.div
                animate={{
                  x: hoveredLink === link.id ? 8 : 0,
                  opacity: hoveredLink === link.id ? 1 : 0.5
                }}
                transition={{ duration: 0.2 }}
                className="text-primary/80"
              >
                <ArrowUpRight size={18} />
              </motion.div>
            </div>
            
          </motion.a>
        ))}
      </motion.div>

      {/* Home Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-10 text-center"
      >
        <Link
          href="/"
          className="inline-flex items-center space-x-3 px-8 py-3 border border-primary/30 rounded-full text-primary hover:text-primary-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300 backdrop-blur-sm"
        >
          <Globe size={18} />
          <span className="text-sm font-medium">Web Oficial</span>
        </Link>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="mt-8 text-center relative z-10"
      >
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 opacity-80">
          Transforma tu creatividad con Insane Designs Entertainment
        </p>
        <div className="flex items-center justify-center space-x-1 text-muted-foreground text-xs">
          <span>© 2024</span>
          <span className="text-primary font-mono">EBOS</span>
        </div>
      </motion.div>
    </section>
  )
}
