"use client"

import { motion } from "framer-motion"
import { MapPin, Tag, CheckCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const profiles = [
  {
    id: 1,
    name: "Valentina",
    zone: "CABA",
    tags: ["Acompañante", "Masajes"],
    image: "/elegant-woman-dark-lighting.jpg",
    verified: true,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Sofía",
    zone: "Zona Norte",
    tags: ["Sexting", "Virtual"],
    image: "/sensual-woman-red-lighting.jpg",
    verified: true,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Martina",
    zone: "CABA",
    tags: ["Videollamadas", "Contenido"],
    image: "/mysterious-woman-dark-background.jpg",
    verified: false,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Catalina",
    zone: "Virtual",
    tags: ["Sexting", "Fotos"],
    image: "/elegant-model-burgundy-lighting.jpg",
    verified: true,
    rating: 5.0,
  },
  {
    id: 5,
    name: "Isabella",
    zone: "Zona Oeste",
    tags: ["Acompañante", "Masajes"],
    image: "/sensual-woman-golden-lighting.jpg",
    verified: true,
    rating: 4.9,
  },
  {
    id: 6,
    name: "Luciana",
    zone: "CABA",
    tags: ["Virtual", "Videollamadas"],
    image: "/mysterious-woman-dark-red-lighting.jpg",
    verified: false,
    rating: 4.6,
  },
  {
    id: 7,
    name: "Camila",
    zone: "Zona Norte",
    tags: ["Acompañante", "Eventos"],
    image: "/elegant-woman-dark-lighting.jpg",
    verified: true,
    rating: 4.8,
  },
  {
    id: 8,
    name: "Victoria",
    zone: "Virtual",
    tags: ["Contenido", "Sexting"],
    image: "/sensual-woman-red-lighting.jpg",
    verified: true,
    rating: 4.9,
  },
]

export function FeaturedProfiles() {
  return (
    <section id="perfiles" className="py-12 bg-black min-h-screen">
      <div className="container mx-auto px-4 max-w-screen-2xl">
        {/* Minimal header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">Perfiles Destacados</h2>
          <p className="text-foreground/60 text-sm">Descubrí las experiencias más exclusivas</p>
        </motion.div>

        {/* Responsive grid: 2 cols mobile, 3 tablet, 4-5 desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative overflow-hidden rounded-lg bg-secondary/20 border border-primary/10 cursor-pointer hover:border-accent/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(198,166,100,0.15)]"
            >
              {/* Image with overlay */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={profile.image || "/placeholder.svg"}
                  alt={profile.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90" />

                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500" />

                {/* Verified badge */}
                {profile.verified && (
                  <div className="absolute top-2 right-2 bg-accent/90 rounded-full p-1">
                    <CheckCircle className="w-3 h-3 text-accent-foreground" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-serif font-bold text-foreground">{profile.name}</h3>
                  <div className="flex items-center gap-1 text-accent text-xs">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{profile.rating}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-muted-foreground mb-2">
                  <MapPin className="w-3 h-3" />
                  <span className="text-xs">{profile.zone}</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {profile.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary/20 border border-primary/30 rounded-full text-[10px] text-foreground/90"
                    >
                      <Tag className="w-2.5 h-2.5" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Ghost button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-xs border border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 h-7"
                >
                  Ver perfil
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load more */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Button
            variant="outline"
            className="border-accent/40 text-accent hover:bg-accent hover:text-accent-foreground px-8 py-2 font-medium transition-all duration-300 bg-transparent"
          >
            Cargar más perfiles
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
