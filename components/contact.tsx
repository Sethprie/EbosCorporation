"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Instagram, Facebook, Music2, Send } from "lucide-react"

const socialLinks = [
  {
    name: "Instagram",
    handle: "@remsyto",
    url: "https://instagram.com/remsyto",
    icon: Instagram,
    color: "#E4405F",
  },
  {
    name: "TikTok",
    handle: "@remsyto",
    url: "https://tiktok.com/@remsyto",
    icon: Music2,
    color: "#00F2EA",
  },
  {
    name: "Facebook",
    handle: "Remsy Alcalá",
    url: "https://www.facebook.com/remsy.alcalaa",
    icon: Facebook,
    color: "#1877F2",
  },
  {
    name: "Instagram Empresa",
    handle: "@eboscorporation",
    url: "https://instagram.com/eboscorporation",
    icon: Instagram,
    color: "#39ff14",
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contacto" className="py-20 sm:py-32 px-4 relative overflow-hidden bg-muted/30">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary rounded-full filter blur-[200px] opacity-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-mono text-sm uppercase tracking-widest">Conectemos</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            ¿Listo para crear?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            El arte puede conectar almas y transformar realidades. 
            Escríbeme y hagamos algo increíble juntos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Send className="w-6 h-6 text-primary" />
              Redes Sociales
            </h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group flex items-center gap-4 p-4 bg-card border border-border transition-all duration-300"
                >
                  <div 
                    className="w-12 h-12 flex items-center justify-center transition-colors duration-300"
                    style={{ backgroundColor: `${social.color}20` }}
                  >
                    <social.icon 
                      className="w-6 h-6 transition-colors duration-300"
                      style={{ color: social.color }}
                    />
                  </div>
                  <div>
                    <p className="text-foreground font-bold transition-colors">
                      {social.name}
                    </p>
                    <p className="text-muted-foreground text-sm font-mono">{social.handle}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-card border border-primary p-8 relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/5" />
              
              <div className="relative z-10">
                <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  ¡Hagamos algo <span className="text-primary">INSANE</span>!
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  No importa si tu idea es grande o pequeña. Cada proyecto recibe el mismo 
                  nivel de dedicación, pasión y detalle profesional.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://instagram.com/eboscorporation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider hover:bg-secondary transition-colors duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                    DM en Instagram
                  </a>
                  <a
                    href="https://tiktok.com/@remsyto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-bold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    <Music2 className="w-5 h-5" />
                    TikTok
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
