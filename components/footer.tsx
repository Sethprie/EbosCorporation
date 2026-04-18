"use client"

import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and tagline */}
          <div className="flex items-center gap-3">
            <div>
              <h3 className="text-xl font-bold">
                <span className="text-primary">EBOS</span> CORPORATION
              </h3>
              <p className="text-muted-foreground text-sm font-mono">Insane Designs Entertainment</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors">Inicio</a>
            <a href="#servicios" className="text-muted-foreground hover:text-primary transition-colors">Servicios</a>
            <a href="#historia" className="text-muted-foreground hover:text-primary transition-colors">Historia</a>
            <a href="#colaboraciones" className="text-muted-foreground hover:text-primary transition-colors">Colaboraciones</a>
            <a href="#contacto" className="text-muted-foreground hover:text-primary transition-colors">Contacto</a>
          </div>

          {/* Credits */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {currentYear} EBOS Corporation
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Hecho con <span className="text-secondary">♥</span> y mucha energía
            </p>
          </div>
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm italic max-w-2xl mx-auto">
            "El verdadero éxito no es llegar, sino seguir disfrutando el proceso."
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
