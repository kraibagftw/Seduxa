"use client"

import { motion } from "framer-motion"
import { UserPlus, FileText, Users } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    title: "Crea tu perfil",
    description: "Regístrate de forma segura y configura tu perfil profesional",
  },
  {
    icon: FileText,
    title: "Publica tus servicios",
    description: "Anuncia tus servicios presenciales o virtuales con total libertad",
  },
  {
    icon: Users,
    title: "Conecta con clientes verificados",
    description: "Recibe contactos de usuarios verificados y gestiona tus citas",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-muted to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">Cómo funciona</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Tres simples pasos para comenzar tu experiencia en Seduxa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className="bg-card border border-border rounded-lg p-8 text-center h-full transition-all duration-300 hover:border-accent hover:shadow-[0_0_30px_rgba(198,166,100,0.2)]">
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center font-serif text-2xl font-bold text-primary-foreground">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
