import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react"

export function Contact() {
  return (
    <section id="contacto" className="py-16 sm:py-24 section-gradient">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Contáctenos
          </h2>
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
            Estamos aquí para ayudarte. Comunícate con nosotros por cualquiera de estos medios
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card className="card-raise hover:-translate-y-1 transition-all duration-200">
            <CardHeader>
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Teléfono</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <a href="tel:8095550100" className="block text-sm hover:text-primary transition-colors">
                (809) 555-0100
              </a>
              <a href="tel:8095550101" className="block text-sm hover:text-primary transition-colors">
                (809) 555-0101
              </a>
              <p className="text-xs text-muted-foreground pt-2">
                Lunes a Viernes: 8:00 AM - 6:00 PM
                <br />
                Sábados: 9:00 AM - 1:00 PM
              </p>
            </CardContent>
          </Card>

          <Card className="card-raise hover:-translate-y-1 transition-all duration-200">
            <CardHeader>
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Correo Electrónico</CardTitle>
            </CardHeader>
            <CardContent>
              <a href="mailto:info@visualmax.com.do" className="text-sm hover:text-primary transition-colors break-all">
                info@visualmax.com.do
              </a>
              <p className="text-xs text-muted-foreground pt-4">Respuesta en menos de 24 horas</p>
            </CardContent>
          </Card>

          <Card className="card-raise hover:-translate-y-1 transition-all duration-200">
            <CardHeader>
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Oficina Principal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Av. Winston Churchill #1100
                <br />
                Torre Empresarial, Piso 5<br />
                Santo Domingo, República Dominicana
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="rounded-2xl bg-black p-8 md:p-12 text-center text-white shadow-xl shadow-black/25">
          <h3 className="text-2xl font-bold mb-4">Síguenos en Redes Sociales</h3>
          <p className="text-lg mb-8 opacity-90">Mantente al día con nuestras novedades y promociones</p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button asChild variant="secondary" size="lg" className="bg-gradient-to-r from-[#E4405F] to-[#F56040] text-white hover:from-[#D32E4F] hover:to-[#E55030] border-0">
              <a
                href="https://instagram.com/visualmaxrd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram className="h-5 w-5" />
                @visualmaxrd
              </a>
            </Button>

            <Button asChild variant="secondary" size="lg" className="bg-[#1877F2] text-white hover:bg-[#166FE5] border-0">
              <a
                href="https://facebook.com/visualmaxrd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Facebook className="h-5 w-5" />
                VisualMax RD
              </a>
            </Button>

            <Button asChild variant="secondary" size="lg" className="bg-[#25D366] text-white hover:bg-[#20BA5A] border-0">
              <a
                href="https://wa.me/18095550100"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </div>

          <p className="text-sm opacity-75">
            Usa el hashtag <strong>#PlanSaludVisual</strong> para compartir tu experiencia
          </p>
        </div>
      </div>
    </section>
  )
}
