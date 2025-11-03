"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Search, ChevronDown, ChevronUp } from "lucide-react"

export function SearchFilters() {
  const [isSticky, setIsSticky] = useState(false)
  const [showFilters, setShowFilters] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Sticky at 64px (header height)
      setIsSticky(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${
        isSticky ? "fixed top-16 left-0 right-0 z-40 bg-black/95 backdrop-blur-md shadow-lg" : "relative bg-black"
      } transition-all duration-300 border-b border-accent/10`}
    >
      <div className="container mx-auto px-4 py-3">
        {/* Mobile: Show/Hide filters toggle */}
        <div className="md:hidden mb-3">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-accent text-sm font-medium"
          >
            {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            {showFilters ? "Ocultar filtros" : "Mostrar filtros"}
          </button>
        </div>

        {/* Filters grid - compact */}
        <div className={`${showFilters ? "block" : "hidden md:block"}`}>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-end">
            {/* Zona */}
            <div>
              <label className="block text-xs text-muted-foreground mb-1">Zona</label>
              <select className="w-full bg-secondary/50 border border-primary/20 rounded px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent">
                <option>Todas</option>
                <option>CABA</option>
                <option>Zona Norte</option>
                <option>Zona Oeste</option>
                <option>Virtual</option>
              </select>
            </div>

            {/* Servicio */}
            <div>
              <label className="block text-xs text-muted-foreground mb-1">Servicio</label>
              <select className="w-full bg-secondary/50 border border-primary/20 rounded px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent">
                <option>Todos</option>
                <option>Acompañante</option>
                <option>Masajes</option>
                <option>Sexting</option>
                <option>Videollamadas</option>
              </select>
            </div>

            {/* Modalidad */}
            <div>
              <label className="block text-xs text-muted-foreground mb-1">Modalidad</label>
              <select className="w-full bg-secondary/50 border border-primary/20 rounded px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent">
                <option>Todas</option>
                <option>Presencial</option>
                <option>Virtual</option>
              </select>
            </div>

            {/* Edad */}
            <div>
              <label className="block text-xs text-muted-foreground mb-1">Edad</label>
              <select className="w-full bg-secondary/50 border border-primary/20 rounded px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent">
                <option>Cualquiera</option>
                <option>18-25</option>
                <option>26-35</option>
                <option>36+</option>
              </select>
            </div>

            {/* Search button */}
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 py-2 text-sm font-medium h-[38px]">
              <Search className="w-4 h-4 mr-2" />
              Buscar
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
