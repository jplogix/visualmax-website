"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"

export function Testimonials() {
  const testimonials = [
    {
      name: "Daritza Tejada",
      role: "Planificación de Proyectos",
      text: "Me dedico a la planificación de proyectos y tengo poco tiempo utilizando el servicio de Visualmax. En este período he recibido un excelente servicio al cliente. Los beneficios del plan, como el cambio de montura anual y el descuento en los cristales, han sido de gran ayuda y utilidad para el cuidado de mi vista.",
    },
    {
      name: "Natalia Matos",
      role: "Afiliada desde 2017",
      text: "Soy afiliada al plan de Visualmax desde 2017, y durante estos años he recibido múltiples beneficios, como monturas gratuitas. Toda mi familia también se ha beneficiado, ya que todos usamos lentes y hemos logrado un gran ahorro. Cada año renovamos nuestros cristales gracias a Visualmax.",
    },
    {
      name: "Eudis P. Lora",
      role: "Mercadóloga",
      text: "Como mercadóloga paso muchas horas frente a las pantallas, y recientemente conocí el plan de Visualmax. Lo mejor es que pude afiliarme fácilmente a través de mi banco, con un descuento mensual de solo 200 pesos, y añadir a cuatro miembros de mi familia. Hemos recibido múltiples beneficios, como monturas gratis cada año y un 10% de descuento en los cristales. ¡Gracias, Visualmax!",
    },
    {
      name: "Ángel Pérez",
      role: "Diseño Gráfico Multimedia",
      text: "Me dedico al diseño gráfico multimedia y conocí este plan gracias a una compañera de trabajo que me agregó a su plan familiar de Visualmax. He obtenido descuentos en consultas oftalmológicas, cristales y monturas gratis. Les exhorto a todos a que se afilien a este plan; realmente vale la pena.",
    },
    {
      name: "Pedro Campusano",
      role: "8 años con VisualMax",
      text: "Tengo ocho años con mi plan de Visualmax y los invito a que pasen por Optimax para obtener el suyo. He disfrutado de descuentos en cirugías, monturas gratis cada año y un 10% de descuento en cristales. Es, sin duda, el plan que más beneficios me ha ofrecido.",
    },
    {
      name: "Christopher",
      role: "Paciente con Miopía y Astigmatismo",
      text: "Sufro de miopía y astigmatismo. Hace unos meses perdí mis lentes, y una amiga me recomendó Visualmax. El plan me ofreció montura gratis y descuentos en los cristales, así que no lo dudé. Fui a Optimax Sambil y, en menos de una hora, ya tenía mi consulta y mis nuevos lentes. ¡Excelente calidad y servicio, estoy muy contento!",
    },
  ]

  const videoIds = ["ndVby8jKbv4", "hoXblupzd80", "f2WLuUOjDto"]

  return (
    <section id="testimonios" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center mb-12"
        >
          <span className="inline-flex w-fit items-center justify-center rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
            Confianza real
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Testimonios</h2>
          <p className="mt-6 text-muted-foreground">Lo que dicen nuestros afiliados sobre VisualMax</p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
            >
              <Card className="card-raise hover:-translate-y-1 transition-all duration-200 h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-center">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Quote className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="text-center pt-4 border-t">
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* YouTube Videos */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Videos de Testimonios</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {videoIds.map((videoId, index) => (
              <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
            className="aspect-video overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-lg shadow-primary/10 transition-all hover:-translate-y-1"
          >
            <iframe
              width="100%"
              height="100%"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`Testimonio VisualMax ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
