"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const zones = [
  {
    id: 1,
    name: "CABA",
    description: "Centro y alrededores",
    image: "/buenos-aires-city-night-lights.jpg",
  },
  {
    id: 2,
    name: "Zona Norte",
    description: "San Isidro, Vicente López, Tigre",
    image: "/elegant-neighborhood-night.jpg",
  },
  {
    id: 3,
    name: "Zona Oeste",
    description: "Morón, Ramos Mejía, Castelar",
    image: "/urban-area-night-lights.jpg",
  },
  {
    id: 4,
    name: "Virtual",
    description: "Experiencias online desde cualquier lugar",
    image: "/digital-virtual-neon-lights.jpg",
  },
]

export function PopularZones() {
  return (
    <section id="zonas" className="py-20 bg-gradient-to-b from-black to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Zonas Populares</h2>
          <p className="text-foreground/70 text-lg">Explorá por ubicación</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {zones.map((zone, index) => (
            <motion.div
              key={zone.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative h-64 overflow-hidden rounded-lg cursor-pointer"
            >
              {/* Background image */}
              <img
                src={zone.image || "/placeholder.svg"}
                alt={zone.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

              {/* Hover overlay with accent color */}
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-3xl font-serif font-bold text-foreground mb-2">{zone.name}</h3>
                <p className="text-foreground/70 mb-4">{zone.description}</p>

                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-2 text-accent font-medium"
                >
                  <span>Explorar</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
