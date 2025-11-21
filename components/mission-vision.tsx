import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"

export function MissionVision() {
  const values = [
    {
      title: "Compromiso",
      description:
        "Trabajamos por el bienestar visual de cada persona, poniendo siempre al paciente en el centro de lo que hacemos.",
    },
    {
      title: "Accesibilidad",
      description: "Creemos que la salud visual debe estar al alcance de todos.",
    },
    {
      title: "Calidad",
      description: "Ofrecemos soluciones confiables y profesionales, con los más altos estándares.",
    },
    {
      title: "Innovación",
      description: "Buscamos constantemente nuevas formas de hacer más fácil y asequible el cuidado visual.",
    },
    {
      title: "Empatía",
      description:
        "Entendemos que cada historia es única y acompañamos a nuestros pacientes en cada paso de su camino visual.",
    },
    {
      title: "Transparencia",
      description: "Actuamos con ética y claridad en cada servicio y relación.",
    },
  ]

  return (
    <section className="py-16 sm:py-24 section-tint">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 mb-16">
          {/* Mission */}
          <Card className="card-raise border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Misión</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Brindar soluciones integrales de salud visual accesibles y de calidad, que mejoren la calidad de vida de
                las personas y reduzcan el impacto económico del cuidado ocular en las familias.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="card-raise border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Visión</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Ser la empresa líder en planes de salud visual en la región, reconocida por la innovación, la excelencia
                en el servicio y el compromiso de garantizar que cada persona pueda ver la vida con claridad, confianza
                y bienestar.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="rounded-full bg-primary/10 p-3">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Valores</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <Card key={index} className="card-raise hover:-translate-y-1 transition-all duration-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
