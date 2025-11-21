"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock } from "lucide-react"
import { motion } from "framer-motion"

export function Providers() {
  const optimaxLocations = [
    {
      name: "Novo - Centro",
      phone: "849-621-5383",
      address: "Av. Lope de Vega, entre Roberto Pastoriza y Gustavo Mejía Ricart",
      hours: "Lunes a sábado 9:00 a.m. - 8:00 p.m.",
    },
    {
      name: "Sambil",
      phone: "849-621-5378",
      address: "Nivel Acuario, 1.ª puerta. Av. San Martín",
      hours: "Lunes a sábado 10:00 a.m. - 8:00 p.m.",
    },
    {
      name: "Plaza Central",
      phone: "849-621-5384",
      address: "Av. 27 de febrero, esq. Churchill",
      hours: "Lunes a sábado 9:00 a.m. - 8:00 p.m.",
    },
    {
      name: "Arroyo Hondo",
      phone: "849-321-9957",
      address: "C/ Doctores Mallén #252, viejo Arroyo Hondo",
      hours: "Lunes a Viernes 9:00 a.m. - 7:00 p.m. | Sábados 9:00 a.m. - 6:00 p.m.",
    },
    {
      name: "Los Prados",
      phone: "849-621-5382",
      address: "C/ Juan Isidro Ortega, #53 Los Prados",
      hours: "Lunes a Viernes 9:00 a.m. - 9:00 p.m.",
    },
    {
      name: "Bonao",
      phone: "849-621-5386",
      address: "C/ Los Santos #89, esq. Duarte, Ciudad de Bonao",
      hours: "Lunes a Viernes 9:00 a.m. - 7:00 p.m. | Sábados 9:00 a.m. - 6:00 p.m.",
    },
    {
      name: "Downtown Mall Punta Cana",
      phone: "849-423-0430",
      address: "Av. Barceló, Punta Cana",
      hours: "Lunes a Viernes 9:00 a.m. - 9:00 p.m.",
    },
    {
      name: "Unidos Punta Cana",
      phone: "849-621-5390 EXT: 2229",
      address: "Local No. 1-04, Nivel 1 Almacenes Unidos, Boulevard del Este, Esq. Domingo Maíz, Bávaro Punta Cana",
      hours: "Lunes a sábados 9:00 a.m. - 9:00 p.m. | Domingos 9:00 am - 6:00 pm",
    },
    {
      name: "Plaza Internacional Santiago",
      phone: "849-621-5385",
      address: "Av. Juan Pablo Duarte, Santiago",
      hours: "Lunes a sábado 9:00 a.m. - 8:00 p.m.",
    },
  ]

  const oftalmologicaLocations = [
    {
      type: "Clínica",
      name: "Los Prados",
      address: "C/ Juan Isidro Ortega, #53 Los Prados, D.N.",
    },
    {
      type: "Consultorio",
      name: "Sambil",
      address: "Av. John F. Kennedy, Plaza Sambil, nivel Acuario (frente a Súper Lama)",
    },
    {
      type: "Consultorio",
      name: "Arroyo Hondo",
      address: "C/ Doctores Mallén #252, Viejo Arroyo Hondo",
    },
    {
      type: "Consultorio",
      name: "DownTown Mall Punta Cana",
      address: "1er Nivel (nivel Sol), local L10, Av. Barceló, Punta Cana",
    },
  ]

  return (
    <section id="opticas" className="py-16 sm:py-24 section-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Optimax Locations */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center mb-12"
          >
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Ópticas Autorizadas - Optimax
            </h2>
            <p className="text-muted-foreground">Sucursales en todo el país</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {optimaxLocations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
              >
                <Card className="card-raise hover:-translate-y-1 transition-all duration-200 h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-2 mt-1">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2">{location.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{location.address}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-primary" />
                      <a
                        href={`tel:${location.phone.replace(/\s+/g, '').replace(/-/g, '').replace(/EXT:.*/i, '').trim()}`}
                        className="font-semibold hover:text-primary transition-colors"
                      >
                        {location.phone}
                      </a>
                    </div>

                    <div className="flex items-start gap-2 text-sm">
                      <Clock className="h-4 w-4 text-primary mt-0.5" />
                      <span className="text-muted-foreground">{location.hours}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Oftalmológica Provider */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center mb-12"
          >
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Prestadores Oftálmicos
            </h2>
            <p className="text-muted-foreground mb-8">
              Centro oftalmológico integral dirigido a ofrecer consultas, estudios diagnósticos, cirugías oculares,
              además de un servicio completo de óptica y farmacia oftalmológica.
            </p>
          </motion.div>

          {/* Oftalmológica Locations */}
          <div>
            <h3 className="text-xl font-bold text-center mb-8">Ubicaciones</h3>
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {oftalmologicaLocations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                >
                  <Card className="card-raise hover:-translate-y-1 transition-all duration-200 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-primary/10 p-2 mt-1">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <span className="inline-block px-2 py-1 text-xs font-semibold bg-primary/10 text-primary rounded mb-2">
                            {location.type}
                          </span>
                          <h4 className="text-lg font-bold mb-2">{location.name}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{location.address}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
