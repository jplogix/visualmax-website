"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Eye, Users, Briefcase, GraduationCap, Car, TrendingUp } from "lucide-react"
import { motion, useMotionValue, animate, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const motionValue = useMotionValue(0)
  const [displayValue, setDisplayValue] = useState(0)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 2,
        ease: "easeOut",
      })

      const unsubscribe = motionValue.on("change", (latest) => {
        setDisplayValue(Math.round(latest))
      })

      return () => {
        controls.stop()
        unsubscribe()
      }
    }
  }, [motionValue, value, isInView])

  return (
    <div ref={ref} className="text-4xl font-bold text-primary">
      {displayValue}
      {suffix}
    </div>
  )
}

export function Statistics() {
  const stats = [
    {
      icon: Eye,
      value: 80,
      suffix: "%",
      text: "de la información que procesamos llega a través de los ojos",
    },
    {
      icon: Users,
      value: 77,
      suffix: "%",
      text: "de la población reconoce que la visión es la capacidad física que más teme perder",
    },
    {
      icon: Briefcase,
      value: 70,
      suffix: "%",
      text: "de la fuerza laboral requiere algún tipo de corrección óptica",
    },
    {
      icon: Car,
      value: 59,
      suffix: "%",
      text: "de los accidentes de tráfico están relacionados con la falta de corrección visual",
    },
    {
      icon: TrendingUp,
      value: 100,
      suffix: "%",
      text: "de las personas después de los 40 años desarrolla algún tipo de problema visual",
    },
    {
      icon: GraduationCap,
      value: 20,
      suffix: "%",
      text: "de los niños en edad escolar presenta dificultades visuales",
    },
  ]

  return (
    <section className="section-gradient py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center mb-12"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-primary">Datos que respaldan</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Estadísticas Clave
          </h2>
          <p className="mt-4 text-muted-foreground">
            Una mirada rápida a la realidad de la salud visual y por qué protegerla importa para todos.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              >
                <Card className="card-raise hover:-translate-y-1 transition-all duration-200 h-full">
                  <CardContent className="flex flex-col items-center text-center p-7 space-y-4">
                    <div className="rounded-full bg-primary/15 p-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    <p className="text-sm text-muted-foreground leading-relaxed">{stat.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
