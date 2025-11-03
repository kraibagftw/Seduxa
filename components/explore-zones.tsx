"use client"

import { motion } from "framer-motion"

const categories = [
  {
    title: "Acompañantes femeninas",
    description: "Encuentra compañía elegante y sofisticada",
    image: "/elegant-silhouette-woman-dark-burgundy-lighting.jpg",
  },
  {
    title: "Acompañantes masculinos",
    description: "Servicios profesionales de acompañamiento",
    image: "/elegant-silhouette-man-dark-gold-lighting.jpg",
  },
  {
    title: "Masajes sensuales",
    description: "Relájate con experiencias únicas",
    image: "/spa-massage-candles-dark-ambient.jpg",
  },
  {
    title: "Sexting y contenido virtual",
    description: "Experiencias digitales personalizadas",
    image: "/phone-screen-glow-dark-room-intimate.jpg",
  },
  {
    title: "Zona norte",
    description: "Servicios disponibles en zona norte",
    image: "/city-lights-night-skyline-red-glow.jpg",
  },
  {
    title: "CABA",
    description: "Capital Federal y alrededores",
    image: "/buenos-aires-obelisk-night-lights.jpg",
  },
]

export function ExploreZones() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Explorar zonas y servicios
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Descubre una amplia variedad de servicios y ubicaciones
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-muted">
                {/* Image */}
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-foreground/80 text-sm">{category.description}</p>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent transition-colors rounded-lg" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
