"use client"

import { useState, useEffect, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CheckCircle2, CornerDownLeft, ArrowLeft } from "lucide-react"

interface SignupModalProps {
  isOpen: boolean
  onClose: () => void
}

type Step = 1 | 2 | 3 | 4 | 5 | 6 | "success"

export function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [step, setStep] = useState<Step>(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    usesCorrection: "",
    familySize: "",
    hasConditions: "",
  })

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current && step !== "success") {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [step, isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      // Enter to advance (if valid)
      if (e.key === "Enter" && !e.shiftKey && canProceed()) {
        e.preventDefault()
        handleNext()
      }

      // Shift+Enter or ArrowLeft to go back
      if ((e.key === "Enter" && e.shiftKey) || e.key === "ArrowLeft") {
        if (step !== 1 && step !== "success") {
          e.preventDefault()
          handleBack()
        }
      }

      // Number keys for radio options (1-4)
      if (step === 4 || step === 5 || step === 6) {
        const options = getOptionsForStep(step)
        const numKey = Number.parseInt(e.key)
        if (numKey >= 1 && numKey <= options.length) {
          e.preventDefault()
          const selectedValue = options[numKey - 1].value
          if (step === 4) {
            setFormData({ ...formData, usesCorrection: selectedValue })
          } else if (step === 5) {
            setFormData({ ...formData, familySize: selectedValue })
          } else if (step === 6) {
            setFormData({ ...formData, hasConditions: selectedValue })
          }
        }
      }

      // Escape to close
      if (e.key === "Escape") {
        handleClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, step, formData])

  const getOptionsForStep = (currentStep: Step) => {
    if (currentStep === 4) {
      return [
        { value: "yes", label: "Sí, uso corrección visual" },
        { value: "no", label: "No, no uso corrección visual" },
        { value: "sometimes", label: "Solo para leer o usar computadora" },
      ]
    } else if (currentStep === 5) {
      return [
        { value: "individual", label: "Solo para mí" },
        { value: "couple", label: "Para 2 personas" },
        { value: "family-small", label: "Para 3-4 personas" },
        { value: "family-large", label: "Para 5 o más personas" },
      ]
    } else if (currentStep === 6) {
      return [
        { value: "none", label: "No tengo condiciones conocidas" },
        { value: "minor", label: "Miopía, hipermetropía o astigmatismo" },
        { value: "major", label: "Cataratas, glaucoma u otras condiciones" },
        { value: "unsure", label: "No estoy seguro/a" },
      ]
    }
    return []
  }

  const handleNext = () => {
    if (step === 6) {
      setStep("success")
    } else {
      setStep((prev) => (prev === "success" ? 1 : ((prev + 1) as Step)))
    }
  }

  const handleBack = () => {
    if (step !== 1 && step !== "success") {
      setStep((prev) => (prev === "success" ? 6 : ((prev - 1) as Step)))
    }
  }

  const handleClose = () => {
    setStep(1)
    setFormData({
      name: "",
      email: "",
      phone: "",
      usesCorrection: "",
      familySize: "",
      hasConditions: "",
    })
    onClose()
  }

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.name.trim() !== ""
      case 2:
        return formData.email.trim() !== ""
      case 3:
        return formData.phone.trim() !== ""
      case 4:
        return formData.usesCorrection !== ""
      case 5:
        return formData.familySize !== ""
      case 6:
        return formData.hasConditions !== ""
      default:
        return true
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        {step !== "success" ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-primary">Únete a VisualMax</DialogTitle>
              <p className="text-sm text-muted-foreground">Paso {step} de 6</p>
            </DialogHeader>

            <div className="space-y-6 py-4">
              {step === 1 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">¿Cómo te llamas?</h3>
                    <p className="text-sm text-muted-foreground">
                      Queremos conocerte mejor para ofrecerte el mejor servicio
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input
                      ref={inputRef}
                      id="name"
                      placeholder="Ej: Juan Pérez"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">¿Cuál es tu correo electrónico?</h3>
                    <p className="text-sm text-muted-foreground">Te enviaremos información importante sobre tu plan</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input
                      ref={inputRef}
                      id="email"
                      type="email"
                      placeholder="ejemplo@correo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">¿Cuál es tu número de teléfono?</h3>
                    <p className="text-sm text-muted-foreground">Para contactarte y confirmar tu registro</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      ref={inputRef}
                      id="phone"
                      type="tel"
                      placeholder="(809) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">¿Actualmente usas lentes o lentes de contacto?</h3>
                    <p className="text-sm text-muted-foreground">Esto nos ayuda a personalizar tu plan</p>
                  </div>
                  <RadioGroup
                    value={formData.usesCorrection}
                    onValueChange={(value) => setFormData({ ...formData, usesCorrection: value })}
                  >
                    {getOptionsForStep(4).map((option, index) => (
                      <div key={option.value} className="flex items-center space-x-2 group">
                        <RadioGroupItem value={option.value} id={`correction-${option.value}`} />
                        <Label htmlFor={`correction-${option.value}`} className="cursor-pointer flex-1">
                          {option.label}
                        </Label>
                        <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                          {index + 1}
                        </span>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}

              {step === 5 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">¿Para cuántas personas necesitas cobertura?</h3>
                    <p className="text-sm text-muted-foreground">Ofrecemos planes individuales y familiares</p>
                  </div>
                  <RadioGroup
                    value={formData.familySize}
                    onValueChange={(value) => setFormData({ ...formData, familySize: value })}
                  >
                    {getOptionsForStep(5).map((option, index) => (
                      <div key={option.value} className="flex items-center space-x-2 group">
                        <RadioGroupItem value={option.value} id={`size-${option.value}`} />
                        <Label htmlFor={`size-${option.value}`} className="cursor-pointer flex-1">
                          {option.label}
                        </Label>
                        <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                          {index + 1}
                        </span>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}

              {step === 6 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">¿Tienes alguna condición visual existente?</h3>
                    <p className="text-sm text-muted-foreground">Esto nos ayuda a recomendarte los mejores servicios</p>
                  </div>
                  <RadioGroup
                    value={formData.hasConditions}
                    onValueChange={(value) => setFormData({ ...formData, hasConditions: value })}
                  >
                    {getOptionsForStep(6).map((option, index) => (
                      <div key={option.value} className="flex items-center space-x-2 group">
                        <RadioGroupItem value={option.value} id={`conditions-${option.value}`} />
                        <Label htmlFor={`conditions-${option.value}`} className="cursor-pointer flex-1">
                          {option.label}
                        </Label>
                        <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                          {index + 1}
                        </span>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}
            </div>

            <div className="flex justify-between gap-3">
              <div className="flex items-center gap-2">
                <Button variant="outline" onClick={handleBack} disabled={step === 1}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Atrás
                </Button>
                {step !== 1 && <span className="text-xs text-muted-foreground hidden sm:inline">Shift + ↵</span>}
              </div>
              <div className="flex items-center gap-2">
                {canProceed() && <span className="text-xs text-muted-foreground hidden sm:inline">Presiona ↵</span>}
                <Button onClick={handleNext} disabled={!canProceed()} className="gap-2">
                  {step === 6 ? "Finalizar" : "Continuar"}
                  <CornerDownLeft className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="py-8 text-center space-y-6">
            <div className="flex justify-center">
              <CheckCircle2 className="h-16 w-16 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">¡Gracias por tu interés!</h3>
              <p className="text-muted-foreground">
                Hemos recibido tu información. Un representante de VisualMax se pondrá en contacto contigo dentro de las
                próximas 24 horas para completar tu registro y responder cualquier pregunta.
              </p>
            </div>
            <Button onClick={handleClose} className="w-full">
              Cerrar
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
