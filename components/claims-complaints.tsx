"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, CheckCircle2 } from "lucide-react"

export function ClaimsComplaints() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    subject: "",
    description: "",
  })

  const complaintTypes = [
    "Servicio al cliente",
    "Calidad del producto",
    "Tiempo de espera",
    "Facturación",
    "Reclamo de beneficios",
    "Otro",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="reclamaciones" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Card className="card-raise border-primary/30">
            <CardContent className="p-12 text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Reclamación Recibida</h3>
              <p className="text-muted-foreground mb-6">
                Hemos recibido tu reclamación y la estamos procesando. Nuestro equipo de atención al cliente se pondrá
                en contacto contigo dentro de las próximas 48 horas para dar seguimiento a tu caso.
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Número de referencia: <span className="font-mono font-bold">VM-{Date.now().toString().slice(-8)}</span>
              </p>
              <Button onClick={() => setSubmitted(false)} variant="outline">
                Enviar otra reclamación
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="reclamaciones" className="py-16 sm:py-24 section-gradient">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <AlertCircle className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Reclamaciones y Quejas
          </h2>
          <p className="text-muted-foreground">
            Tu opinión es importante para nosotros. Estamos comprometidos con la transparencia y la mejora continua de
            nuestros servicios.
          </p>
        </div>

        <Card className="card-raise">
          <CardHeader>
            <CardTitle>Formulario de Reclamación</CardTitle>
            <CardDescription>
              Completa el formulario con los detalles de tu reclamación o queja. Nos pondremos en contacto contigo lo
              antes posible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="claim-name">Nombre completo *</Label>
                  <Input
                    id="claim-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Juan Pérez"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="claim-email">Correo electrónico *</Label>
                  <Input
                    id="claim-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="juan@ejemplo.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="claim-phone">Teléfono *</Label>
                  <Input
                    id="claim-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="809-123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="claim-type">Tipo de reclamación *</Label>
                  <select
                    id="claim-type"
                    required
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Selecciona un tipo</option>
                    {complaintTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="claim-subject">Asunto *</Label>
                <Input
                  id="claim-subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Breve descripción del asunto"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="claim-description">Descripción detallada *</Label>
                <Textarea
                  id="claim-description"
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Por favor, describe tu reclamación con el mayor detalle posible..."
                  rows={6}
                  className="resize-none"
                />
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Al enviar este formulario, aceptas que VisualMax procese tu información para dar seguimiento a tu
                  reclamación. Nos comprometemos a responder dentro de las próximas 48 horas hábiles.
                </p>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Enviar Reclamación
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
