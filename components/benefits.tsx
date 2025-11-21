"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Eye, Wrench, Glasses, Stethoscope, Sparkles, Contact, Scissors, Sun } from "lucide-react"
import { motion } from "framer-motion"

export function Benefits() {
  const benefits = [
    {
      icon: Eye,
      title: "Examen de la vista GRATIS",
      description: "Evaluación visual completa cada año sin costo",
    },
    {
      icon: Wrench,
      title: "Reparación y mantenimiento GRATIS",
      description: "Servicio de ajuste y reparación de monturas incluido",
    },
    {
      icon: Glasses,
      title: "Montura gratuita anual",
      description: "Una montura de cortesía cada año como parte del plan",
    },
    {
      icon: Stethoscope,
      title: "Descuentos en consultas oftalmológicas",
      description: "Precios especiales con médicos de prestigio",
    },
    {
      icon: Contact,
      title: "Reducción en lentes de contacto",
      description: "Descuentos en lentes básicos y especializados",
    },
    {
      icon: Sparkles,
      title: "Procedimientos estéticos oculares",
      description: "Precios preferenciales en tratamientos estéticos",
    },
    {
      icon: Scissors,
      title: "Estudios y cirugías oftalmológicas",
      description: "Descuentos con acceso a clínicas de confianza",
    },
    {
      icon: Sun,
      title: "Cristales y gafas de sol",
      description: "Beneficios en la elaboración de cristales y gafas de sol",
    },
  ]

  return (
    <section id="plan" className="py-16 sm:py-24 section-tint">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-4"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-primary shadow-sm">
              Ventajas diferenciales
            </span>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Beneficios del Plan VisualMax
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Los afiliados disfrutan de una amplia gama de beneficios diseñados para proteger y mantener su salud
              visual.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="card-raise card-raise-muted rounded-2xl border border-primary/10 p-6 md:p-7"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">Ahorro tangible</p>
            <p className="mt-2 text-lg font-bold text-foreground leading-snug">
              Montura gratis anual + 10% en cristales + consultas con precios preferenciales.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {["Familias y empresas", "Cobertura nacional", "Atención en minutos", "Planes flexibles"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-primary/10 bg-white/80 px-4 py-3 text-sm font-semibold text-foreground"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    {item}
                  </div>
                ),
              )}
            </div>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              >
                <Card className="card-raise hover:-translate-y-1 hover:shadow-xl transition-all duration-200 h-full">
                  <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                    <div className="rounded-full bg-primary/10 p-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground italic">
            Estos beneficios no solo representan un ahorro económico, sino también una inversión en la prevención de
            problemas de visión más serios.
          </p>
        </div>
      </div>
    </section>
  )
}
