"use client"

import { motion } from "framer-motion"
import { Shield, Award, Lock } from "lucide-react"

const advantages = [
  {
    icon: Award,
    title: "Publicidad gratuita y premium",
    description: "Comienza gratis y accede a opciones premium para destacar tu perfil y llegar a más clientes",
  },
  {
    icon: Shield,
    title: "Verificación de edad y seguridad",
    description: "Todos los usuarios son verificados. Tu seguridad y la de tus clientes es nuestra prioridad",
  },
  {
    icon: Lock,
    title: "Privacidad y respeto",
    description: "Protegemos tu identidad y respetamos tu trabajo. Tú decides qué compartir y con quién",
  },
]

export function Advantages() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-secondary/30 to-black" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Ventajas de Seduxa
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Una plataforma diseñada para tu éxito y seguridad
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-card to-muted border border-border rounded-lg p-8 h-full transition-all duration-300 hover:border-primary hover:shadow-[0_0_40px_rgba(107,15,26,0.3)]">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors group-hover:scale-110 duration-300">
                    <advantage.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">{advantage.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{advantage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
