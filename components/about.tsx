"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function About() {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <section id="quienes-somos" className="relative overflow-hidden bg-white py-16 sm:py-24">
      {/* Added video background with overlay */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/hoXblupzd80?autoplay=1&mute=1&loop=1&playlist=hoXblupzd80&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0"
          className="h-full w-full object-cover opacity-30"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/88 to-white/92" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-6xl"
        >
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] items-stretch">
            <div className="flex flex-col space-y-6 rounded-2xl border border-primary/10 bg-white/80 p-8 shadow-lg shadow-primary/5 backdrop-blur h-full">
              <div className="text-center lg:text-left">
                <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                  Quiénes Somos
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  VisualMax es una empresa comprometida con la salud visual de las familias dominicanas. Nuestra misión
                  es hacer que el cuidado de la visión sea accesible, sencillo y de calidad para todos, sin importar la
                  edad o condición económica.
                </p>

                <p>
                  Fundada en 2012, VisualMax nació de la visión de un emprendedor que identificó una necesidad real: la
                  constante demanda de lentes y el impacto económico que esto representa para las familias. Con el objetivo
                  de crear una solución que no solo garantizara calidad, sino que también ayudara a reducir los costos del
                  cuidado visual, desarrollamos un plan integral que combina beneficios ópticos con acceso a servicios
                  oftalmológicos de excelencia.
                </p>

                <p>
                  Hoy, trabajamos con una amplia red de ópticas y especialistas certificados a nivel nacional, ofreciendo
                  soluciones accesibles, confiables y de calidad que contribuyen a mejorar el bienestar, la productividad y
                  el desempeño diario de las personas.
                </p>

                <p className="font-semibold text-foreground">
                  Nuestro compromiso es claro: que cada persona tenga la oportunidad de mirar el futuro con claridad,
                  confianza y esperanza.
                </p>

                {isExpanded && (
                  <div className="space-y-4 pt-4 border-t border-primary/10">
                    <h4 className="text-xl font-bold text-foreground">¿Qué es VisualMax?</h4>
                    <p>
                      VisualMax es un plan integral de salud visual que brinda acceso exclusivo a beneficios ópticos y
                      descuentos en servicios oftalmológicos. A través de una red de ópticas y especialistas certificados,
                      garantiza soluciones accesibles, confiables y de calidad.
                    </p>
                    <p>
                      Se trata de un plan de protección y beneficios en salud visual que combina dos elementos principales:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                      <li>Cobertura en incidencias relacionadas con la salud ocular.</li>
                      <li>Acceso a descuentos preferenciales en servicios médicos oftalmológicos y productos ópticos.</li>
                    </ol>
                    <p>
                      Su diseño busca responder a las necesidades reales de la población, desde la etapa escolar hasta la
                      vida laboral y adulta, donde los problemas visuales son más frecuentes.
                    </p>
                  </div>
                )}

                <div className="pt-4 border-t border-primary/10">
                  <Button
                    variant="ghost"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full justify-center gap-2 text-primary hover:text-primary/80"
                  >
                    {isExpanded ? (
                      <>
                        Leer menos
                        <ChevronUp className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Leer más
                        <ChevronDown className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="card-raise card-raise-muted space-y-6 rounded-3xl border border-primary/15 p-8 h-full flex flex-col"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  VM
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-[0.12em]">VisualMax en acción</p>
                  <p className="text-foreground">Cuidamos tu visión con cercanía y claridad</p>
                </div>
              </div>

              <div className="thin-divider" />

              <div className="space-y-4">
                {[
                  "Red de ópticas y especialistas certificados a nivel nacional.",
                  "Beneficios tangibles: exámenes, monturas y descuentos en consultas y cristales.",
                  "Prevención, corrección y acompañamiento en cada etapa de la vida.",
                  "Planes individuales, familiares y corporativos adaptados a cualquier necesidad.",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-3 rounded-xl border border-primary/10 bg-primary/5 p-4 text-sm leading-relaxed text-foreground"
                  >
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-bold text-primary shadow-sm">
                      {index + 1}
                    </span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-primary text-white p-6 shadow-lg shadow-primary/30">
                <p className="text-sm font-semibold uppercase tracking-[0.12em]">Tu visión, nuestro compromiso</p>
                <p className="mt-2 text-lg font-bold leading-snug">
                  Prevención, calidad y ahorro para que sigas viendo el futuro con claridad.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
