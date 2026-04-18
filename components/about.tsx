"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Star, Sparkles } from "lucide-react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="historia" className="py-20 sm:py-32 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary rounded-full filter blur-[150px] opacity-10" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-secondary rounded-full filter blur-[120px] opacity-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-mono text-sm uppercase tracking-widest">El alma detrás del arte</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4">
            El Significado de La Ebos
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <Heart className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground text-lg leading-relaxed">
                La Ebos representa <span className="text-primary">alegría, sentido, amor y unión</span>. 
                Es el trabajo sin descanso, el detalle final que otros quizás no notan, 
                pero que para mí lo es todo.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Star className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground text-lg leading-relaxed">
                Siempre empecé por <span className="text-secondary">amor al arte</span>. 
                Por la alegría de crear con mis propias manos lo que un día solo existía en mi mente.
                Cuando era niño y tomé un lápiz por primera vez, parecía imposible llegar hasta aquí…
                pero para ese niño, nada era imposible.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Sparkles className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground text-lg leading-relaxed">
                Mi abuela fue quien me dio mi primera computadora, quien se alegraba solo con verme.
                Ella es el <span className="text-primary">alma oculta de La Ebos</span>, 
                la raíz de mi arte, la chispa que me enseñó a crear desde el amor.
              </p>
            </div>
          </motion.div>

          {/* Right - Quote box */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-card border-l-4 border-primary p-8 relative">
              <div className="absolute -top-4 -left-4 text-6xl text-primary opacity-30">&ldquo;</div>
              <blockquote className="text-2xl sm:text-3xl font-bold text-foreground leading-relaxed mb-6">
                No busco fama. Busco <span className="text-primary">conexión</span>. 
                Busco que la gente sienta, que el arte toque el alma.
              </blockquote>
              <p className="text-muted-foreground text-lg">
                La Ebos no es solo una marca, sino un reflejo de todo lo que fuimos, 
                de todo lo que aún somos.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                  I
                </div>
                <div>
                  <p className="text-foreground font-bold">Insane</p>
                  <p className="text-secondary text-sm font-mono">@remsyto</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Philosophy section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
            La Filosofía
          </h3>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="p-6 border border-border">
              <h4 className="text-primary font-bold mb-2">Motivación</h4>
              <p className="text-muted-foreground text-sm">
                La energía interna que me empuja a crear, incluso cuando no hay inspiración.
              </p>
            </div>
            <div className="p-6 border border-border">
              <h4 className="text-secondary font-bold mb-2">Constancia</h4>
              <p className="text-muted-foreground text-sm">
                El arte visual es una carrera de resistencia, no de velocidad.
              </p>
            </div>
            <div className="p-6 border border-border">
              <h4 className="text-primary font-bold mb-2">Autenticidad</h4>
              <p className="text-muted-foreground text-sm">
                Encontrar tu propio estilo, esa firma invisible que te hace único.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
