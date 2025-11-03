"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background with dramatic lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/20 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(107,15,26,0.4),transparent_70%)]" />

      {/* Animated glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl mx-auto space-y-8"
        >
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Seduxa te espera.
            <br />
            <span className="text-accent italic">Sé parte del deseo.</span>
          </h2>

          <p className="text-foreground/80 text-xl md:text-2xl leading-relaxed">
            Únete a la plataforma más elegante y segura para profesionales del acompañamiento
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-8 text-xl font-semibold transition-all duration-300 hover:shadow-[0_0_50px_rgba(107,15,26,0.6)]"
            >
              Crea tu perfil hoy
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
