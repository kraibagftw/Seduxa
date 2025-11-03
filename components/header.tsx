"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md shadow-lg shadow-primary/10" : "bg-black/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - minimal and elegant */}
          <motion.div whileHover={{ scale: 1.05 }} className="text-xl font-serif font-bold text-accent">
            Seduxa
          </motion.div>

          {/* Desktop Navigation - minimal spacing */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#perfiles" className="text-foreground/70 hover:text-accent transition-colors text-sm font-light">
              Perfiles
            </a>
            <a href="#zonas" className="text-foreground/70 hover:text-accent transition-colors text-sm font-light">
              Zonas
            </a>
            <a href="#servicios" className="text-foreground/70 hover:text-accent transition-colors text-sm font-light">
              Servicios
            </a>
          </nav>

          {/* CTA Button - compact */}
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium text-sm px-4 py-2 h-9"
            >
              Publicar
            </Button>

            {/* Mobile menu button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-foreground p-2">
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-md border-t border-accent/20"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <a href="#perfiles" className="text-foreground/70 hover:text-accent transition-colors text-sm py-2">
              Perfiles
            </a>
            <a href="#zonas" className="text-foreground/70 hover:text-accent transition-colors text-sm py-2">
              Zonas
            </a>
            <a href="#servicios" className="text-foreground/70 hover:text-accent transition-colors text-sm py-2">
              Servicios
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
