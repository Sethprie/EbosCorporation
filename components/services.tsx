"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { 
  Palette, 
  Film, 
  Sparkles, 
  Camera, 
  Smartphone, 
  PaintBucket,
  Box,
  Layers,
  Wand2,
  ArrowRight
} from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Art Personalizado",
    description: "Diseños únicos que reflejan tu esencia y visión artística.",
    price: "Desde $50",
  },
  {
    icon: Layers,
    title: "Cover Arts",
    description: "Portadas impactantes para tu música que destacan en cualquier plataforma.",
    price: "Desde $80",
  },
  {
    icon: PaintBucket,
    title: "Ilustración",
    description: "Ilustraciones digitales con estilo único y detalle profesional.",
    price: "Desde $100",
  },
  {
    icon: Box,
    title: "Animación 2D & 3D",
    description: "Da vida a tus ideas con animaciones fluidas y cautivadoras.",
    price: "Desde $200",
  },
  {
    icon: Camera,
    title: "Producciones Audiovisuales",
    description: "Videos musicales y contenido visual de alta calidad.",
    price: "Cotizar",
  },
  {
    icon: Film,
    title: "Video Edit & VFX",
    description: "Edición profesional con efectos visuales impactantes.",
    price: "Desde $150",
  },
  {
    icon: Smartphone,
    title: "Filtros para TikTok",
    description: "Filtros personalizados que harán viral tu contenido.",
    price: "Desde $100",
  },
  {
    icon: Sparkles,
    title: "Murales & Graffitis",
    description: "Arte urbano que transforma espacios en obras maestras.",
    price: "Cotizar",
  },
  {
    icon: Wand2,
    title: "Realidad Aumentada",
    description: "Experiencias inmersivas que fusionan lo digital con lo real.",
    price: "Cotizar",
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="servicios" className="py-20 sm:py-32 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-mono text-sm uppercase tracking-widest">Lo que hacemos</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Servicios
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Tarifas competitivas y calidad profesional. Desde diseño gráfico hasta producciones audiovisuales.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-card border border-border p-6 rounded-lg"
            >
              <div>
                <service.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-secondary font-mono font-bold text-sm">
                      {service.price}
                    </span>
                    <Link
                      href="#contacto"
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 rounded-full text-primary text-xs font-mono transition-all duration-300"
                    >
                      Cotizar
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}
