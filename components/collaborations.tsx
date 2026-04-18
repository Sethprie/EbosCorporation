"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Music, Building2, Stethoscope, Users } from "lucide-react"

const collaborators = [
  {
    name: "Reis Bélico",
    type: "Artista Musical",
    genre: "Trap / Old School Venezuela",
    icon: Music,
  },
  {
    name: "Scrop",
    type: "Artista Musical", 
    genre: "Trap / Old School Venezuela",
    icon: Music,
  },
  {
    name: "Adson Alejandro",
    type: "Artista Musical",
    genre: "Trap Venezuela",
    icon: Music,
  },

  {
    name: "Empresas de Marketing",
    type: "Compañías",
    genre: "Dirección Visual",
    icon: Building2,
  },
  {
    name: "Profesionales RD",
    type: "Doctores",
    genre: "República Dominicana",
    icon: Stethoscope,
  },
]

export function Collaborations() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="colaboraciones" className="py-20 sm:py-32 px-4 relative overflow-hidden">


      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-mono text-sm uppercase tracking-widest">Conexiones reales</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Colaboraciones
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            He tenido la oportunidad de colaborar con artistas de gran talento y trayectoria, 
            personas reales, con historia y esencia.
          </p>
        </motion.div>

        {/* Collaborators grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {collaborators.map((collab, index) => (
            <motion.div
              key={collab.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card border border-border p-6 transition-all duration-300 overflow-hidden"
            >
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-14 h-14 bg-muted flex items-center justify-center flex-shrink-0">
                  <collab.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {collab.name}
                  </h3>
                  <p className="text-secondary text-sm font-mono">{collab.type}</p>
                  <p className="text-muted-foreground text-sm mt-1">{collab.genre}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="bg-card border border-border p-8 relative">
            <Users className="w-12 h-12 text-primary mx-auto mb-6" />
            <p className="text-xl sm:text-2xl text-foreground leading-relaxed mb-4">
              "Más allá de los nombres, lo que realmente valoro es que gente con 
              <span className="text-primary"> calidad humana</span> haya confiado en mí."
            </p>
            <p className="text-muted-foreground">
              Siento que el arte es un intercambio de energía: cuando das lo mejor de ti con autenticidad, 
              esa energía vuelve.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
