import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h3 className="text-lg font-semibold mb-4">Comunícate con nosotros</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <a href="tel:8093782180" className="flex items-center justify-center gap-2 text-primary hover:underline">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">809.378.2180</span>
            </a>
            <a href="tel:8496215376" className="flex items-center justify-center gap-2 text-primary hover:underline">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">849.621.5376</span>
            </a>
          </div>
        </div>

        <div className="mb-8 text-center">
          <h3 className="text-lg font-semibold mb-4">Síguenos en nuestras redes sociales</h3>
          <div className="flex justify-center gap-4">
            <Link
              href="https://facebook.com/visualmaxrd"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary/10 p-3 hover:bg-primary/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5 text-primary" />
            </Link>
            <Link
              href="https://instagram.com/visualmaxrd"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary/10 p-3 hover:bg-primary/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 text-primary" />
            </Link>
          </div>
        </div>

        <div className="max-w-md mx-auto mb-12">
          <h4 className="text-center font-semibold mb-4">Suscríbete a nuestro boletín</h4>
          <div className="flex gap-2">
            <Input type="email" placeholder="Tu correo electrónico" className="flex-1" />
            <Button type="submit">Suscribirse</Button>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} VisualMax. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
