"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function PremiumCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 via-primary/10 to-black relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-6 py-2 mb-8"
          >
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-accent font-medium">Premium</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
            Publicá tu perfil en Seduxa y destacá entre los mejores
          </h2>

          <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto text-pretty">
            Alcanzá miles de usuarios que buscan experiencias exclusivas. Gestioná tu perfil, horarios y servicios desde
            un panel intuitivo.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-12 py-7 text-xl font-semibold"
            >
              Publicar ahora
            </Button>
          </motion.div>

          <p className="text-sm text-muted-foreground mt-6">
            Sin comisiones ocultas • Pago único mensual • Soporte 24/7
          </p>
        </motion.div>
      </div>
    </section>
  )
}
