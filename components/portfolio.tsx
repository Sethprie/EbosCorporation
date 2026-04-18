'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play } from 'lucide-react'
import Image from 'next/image'

type PortfolioItem = {
  id: string
  title: string
  category: 'all' | 'video' | 'design' | 'illustration' | 'filters'
  image: string
  type: 'image' | 'video'
}

const portfolioItems: PortfolioItem[] = [
  { id: '1', title: 'Cover Art 0', category: 'design', image: '/portfolio/cover-arts/cover-art0.jpg', type: 'image' },
  { id: '2', title: 'VFX Explosion', category: 'video', image: '/portfolio/videos/video0.mp4', type: 'video' },
  { id: '3', title: 'Logo 0', category: 'design', image: '/portfolio/logos/logo0.jpg', type: 'image' },
  { id: '4', title: 'Logo 1', category: 'design', image: '/portfolio/logos/logo1.jpg', type: 'image' },
  { id: '5', title: 'Ozzy Illustration', category: 'illustration', image: '/portfolio/ilustrations/ozzy.jpg', type: 'image' },
  { id: '6', title: 'Piccolo Illustration', category: 'illustration', image: '/portfolio/ilustrations/piccolo.jpg', type: 'image' },
  { id: '7', title: 'Remsy Illustration', category: 'illustration', image: '/portfolio/ilustrations/remsy.jpg', type: 'image' },
  { id: '8', title: 'Video 1', category: 'video', image: '/portfolio/videos/video1.mp4', type: 'video' },
]

const categories = [
  { id: 'all', label: 'Todo' },
  { id: 'video', label: 'Video & VFX' },
  { id: 'design', label: 'Diseño & Cover Arts' },
  { id: 'illustration', label: 'Ilustración & Animación' },
  { id: 'filters', label: 'Filtros & AR' },
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  const filteredItems =
    activeCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portafolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Portafolio</h2>
          <p className="text-lg text-muted-foreground">Descubre nuestros trabajos más destacados</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-foreground border border-border hover:border-primary'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedItem(item)}
                className="cursor-pointer group"
              >
                <div className="relative h-64 rounded-lg overflow-hidden bg-card border border-border hover:border-primary transition-all">
                  {item.type === 'video' ? (
                    <>
                      {/* Thumbnail generada por el browser del primer frame */}
                      <video
                        src={item.image}
                        preload="metadata"
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 pointer-events-none"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                        <div className="bg-black/60 rounded-full p-4">
                          <Play className="w-10 h-10 text-white fill-white" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-4">
                    <p className="font-semibold text-white">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-card rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="relative w-full h-96 sm:h-[500px] bg-black flex items-center justify-center">
                {selectedItem.type === 'video' ? (
                  <video
                    key={selectedItem.id}
                    src={selectedItem.image}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              <div className="p-6 bg-card">
                <h3 className="text-2xl font-bold mb-2 text-foreground">{selectedItem.title}</h3>
                <p className="text-muted-foreground">
                  {categories.find((c) => c.id === selectedItem.category)?.label}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}