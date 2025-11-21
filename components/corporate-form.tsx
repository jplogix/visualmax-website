"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Building2 } from "lucide-react"

export function CorporateForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="py-16 sm:py-24 bg-[#f5f5f5]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Card className="card-raise border-primary/25">
            <CardContent className="p-12 text-center">
              <div className="rounded-full bg-primary/10 p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">¡Gracias por tu interés!</h3>
              <p className="text-muted-foreground">
                Hemos recibido tu solicitud. Nuestro equipo se pondrá en contacto contigo dentro de las próximas 24
                horas para ofrecerte todos los detalles del Plan Visualmax Corporativo.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 sm:py-24 bg-[#f5f5f5]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="rounded-full bg-primary/10 p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
            <Building2 className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Formulario de Registro Corporativo</h2>
          <p className="text-muted-foreground">
            Queremos llevar los beneficios del Plan Visualmax Corporativo a tus colaboradores. Completa el siguiente
            formulario y nuestro equipo se pondrá en contacto contigo.
          </p>
        </div>

        <Card className="card-raise">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Company Data */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Datos de la empresa</h3>

                <div className="space-y-2">
                  <Label htmlFor="company-name">Nombre de la empresa *</Label>
                  <Input id="company-name" required />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="rnc">RNC *</Label>
                    <Input id="rnc" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sector">Sector / Tipo de industria *</Label>
                    <Input id="sector" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="employees">Cantidad aproximada de empleados *</Label>
                  <Input id="employees" type="number" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Dirección *</Label>
                  <Input id="address" required />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono de contacto *</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico corporativo *</Label>
                    <Input id="email" type="email" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Sitio web o redes sociales</Label>
                  <Input id="website" />
                </div>
              </div>

              {/* Contact Person */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Persona de contacto</h3>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Nombre y apellido *</Label>
                    <Input id="contact-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Cargo *</Label>
                    <Input id="position" required />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Teléfono directo / WhatsApp *</Label>
                    <Input id="contact-phone" type="tel" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Correo electrónico *</Label>
                    <Input id="contact-email" type="email" required />
                  </div>
                </div>
              </div>

              {/* Interest */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Interés en el plan</h3>

                <div className="space-y-2">
                  <Label htmlFor="interest">¿Por qué le interesa el Plan Visualmax para su empresa? *</Label>
                  <Textarea id="interest" rows={4} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverage">¿Cuántos colaboradores desea incluir aproximadamente? *</Label>
                  <Input id="coverage" type="number" required />
                </div>

                <div className="space-y-2">
                  <Label>¿Desea recibir una visita o presentación del plan? *</Label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="meeting" value="office" required />
                      <span className="text-sm">Sí, en la empresa</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="meeting" value="virtual" />
                      <span className="text-sm">Reunión virtual</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="meeting" value="email" />
                      <span className="text-sm">Solo información por correo</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Authorization */}
              <div className="space-y-4">
                <label className="flex items-start gap-2">
                  <input type="checkbox" required className="mt-1" />
                  <span className="text-sm text-muted-foreground">
                    Al enviar este formulario, acepto que Visualmax se comunique con nosotros para ofrecer información
                    sobre el Plan Corporativo Visualmax.
                  </span>
                </label>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Enviar solicitud
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
