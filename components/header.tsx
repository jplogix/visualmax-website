"use client"

import { Home, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useAppointmentDialog } from "@/components/appointment-booking"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { setOpen: setDialogOpen } = useAppointmentDialog()

  const navItems = [
    { href: "#quienes-somos", label: "Quiénes Somos" },
    { href: "#plan", label: "Plan" },
    { href: "#opticas", label: "Ópticas y Prestadores" },
    { href: "#testimonios", label: "Testimonios" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="#inicio" className="-m-1.5 p-1.5">
            <span className="sr-only">VisualMax</span>
            <Image
              src="/assets/visualmax-logo-color.png"
              alt="VisualMax"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </Button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8 lg:items-center">
          <Link
            href="#inicio"
            className="text-sm font-semibold leading-6 text-foreground transition-colors hover:text-primary flex items-center gap-1"
            aria-label="Inicio"
          >
            <Home className="h-4 w-4" />
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold leading-6 text-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            onClick={() => setDialogOpen(true)}
          >
            Agendar Cita
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="https://wa.me/18496215376" target="_blank" rel="noopener noreferrer">Afíliate ahora</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              href="#inicio"
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted hover:text-primary flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Home className="h-4 w-4" />
              Inicio
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#citas"
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Agendar Cita
            </Link>
            <Link
              href="#reclamaciones"
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Reclamaciones
            </Link>
            <div className="pt-4">
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link href="https://wa.me/18496215376" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                  Afíliate ahora
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
