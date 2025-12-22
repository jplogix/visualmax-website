"use client"

import type React from "react"

import { useState, createContext, useContext } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Calendar, Clock, CheckCircle2 } from "lucide-react"

// Context for managing dialog state globally
const AppointmentDialogContext = createContext<{
  open: boolean
  setOpen: (open: boolean) => void
}>({
  open: false,
  setOpen: () => {},
})

export function useAppointmentDialog() {
  const context = useContext(AppointmentDialogContext)
  if (!context) {
    throw new Error("useAppointmentDialog must be used within AppointmentDialogProvider")
  }
  return context
}

// Provider component to wrap the app
export function AppointmentDialogProvider({ children }: { children: React.ReactNode }) {
  const [dialogOpen, setDialogOpen] = useState(false)
  return (
    <AppointmentDialogContext.Provider value={{ open: dialogOpen, setOpen: setDialogOpen }}>
      {children}
    </AppointmentDialogContext.Provider>
  )
}

// Form component that can be reused in both dialog and section
function AppointmentForm({
  formData,
  setFormData,
  onSubmit,
  submitted,
  setSubmitted,
}: {
  formData: {
    name: string
    email: string
    phone: string
    location: string
    date: string
    time: string
    service: string
  }
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string
      email: string
      phone: string
      location: string
      date: string
      time: string
      service: string
    }>
  >
  onSubmit: (e: React.FormEvent) => void
  submitted: boolean
  setSubmitted: (submitted: boolean) => void
}) {
  const locations = [
    "Novo - Centro",
    "Sambil",
    "Plaza Central",
    "Arroyo Hondo",
    "Los Prados",
    "Bonao",
    "Downtown Mall Punta Cana",
    "Unidos Punta Cana",
    "Plaza Internacional Santiago",
  ]

  const services = [
    "Consulta oftalmológica",
    "Examen oftalmológico completo",
    "Estudios diagnósticos",
    "Otro",
  ]

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-4">¡Cita Agendada!</h3>
        <p className="text-muted-foreground mb-6">
          Hemos recibido tu solicitud de cita. Nuestro equipo se pondrá en contacto contigo dentro de las próximas 24 horas
          para confirmar tu cita en {formData.location}.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="outline">
          Agendar otra cita
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre completo *</Label>
          <Input
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Juan Pérez"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico *</Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="juan@ejemplo.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono *</Label>
          <Input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="809-123-4567"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Sucursal *</Label>
          <select
            id="location"
            required
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">Selecciona una sucursal</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="date">Fecha preferida *</Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="date"
              type="date"
              required
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="time">Hora preferida *</Label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="time"
              type="time"
              required
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Tipo de servicio *</Label>
        <select
          id="service"
          required
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="">Selecciona un servicio</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
        Agendar Cita
      </Button>
    </form>
  )
}

// Component to trigger the dialog from anywhere
export function AppointmentDialogTrigger({ children, className }: { children: React.ReactNode; className?: string }) {
  const { setOpen } = useAppointmentDialog()
  return (
    <div onClick={() => setOpen(true)} className={className}>
      {children}
    </div>
  )
}

export function AppointmentBooking() {
  const { open: dialogOpen, setOpen: setDialogOpen } = useAppointmentDialog()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    date: "",
    time: "",
    service: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // Close dialog after submission
    setTimeout(() => {
      setDialogOpen(false)
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        date: "",
        time: "",
        service: "",
      })
    }, 3000)
  }

  return (
    <>
      {/* Desktop Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Agenda tu Cita</DialogTitle>
            <DialogDescription>
              Reserva tu consulta oftalmológica en cualquiera de nuestras clínicas afiliadas. Las citas son solamente para
              las consultas oftalmológicas.
            </DialogDescription>
          </DialogHeader>
          <AppointmentForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            submitted={submitted}
            setSubmitted={setSubmitted}
          />
        </DialogContent>
      </Dialog>

      {/* Mobile Section */}
      <section id="citas" className="py-16 sm:py-24 section-gradient lg:hidden">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Agenda tu Cita
            </h2>
            <p className="text-muted-foreground">
              Reserva tu consulta oftalmológica en cualquiera de nuestras clínicas afiliadas
            </p>
          </div>

          <Card className="card-raise">
            <CardHeader>
              <CardTitle>Información de la Cita</CardTitle>
              <CardDescription>
                Completa el formulario y nos pondremos en contacto contigo. Las citas son solamente para las consultas
                oftalmológicas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AppointmentForm
                formData={formData}
                setFormData={setFormData}
                onSubmit={handleSubmit}
                submitted={submitted}
                setSubmitted={setSubmitted}
              />
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
