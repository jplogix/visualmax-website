"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState, useRef, useEffect } from "react"
import { SignupModal } from "./signup-modal"
import { motion } from "framer-motion"

const videos = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5241181-hd_1280_720_50fps-iGDSXs4LeyllGEOjLOYgmxh9AnOoiW.mp4",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A_modern_optometrist_202511201317_yndnn-mp4-m1HmU4wFh9w36P61Q0zQ5Gf6g06Xm2.mp4"
]

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoEnd = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1)
    } else {
      // Loop the last video
      if (videoRef.current) {
        videoRef.current.loop = true
        videoRef.current.play().catch(console.error)
      }
    }
  }

  return (
    <>
      <section id="inicio" className="relative overflow-hidden py-20 sm:py-28">
        {/* Added video background with overlay */}
        <div className="absolute inset-0 z-0">
          {/* Added object-left to align the video to the left side */}
          <video
            key={currentVideoIndex}
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="h-full w-full object-cover object-left"
            onEnded={handleVideoEnd}
            loop={currentVideoIndex === videos.length - 1}
          >
            <source src={videos[currentVideoIndex]} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(41,175,75,0.45)] via-background/85 to-background" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col justify-center space-y-8"
            >
              <div className="space-y-4">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-primary shadow-sm">
                  Plan de Salud Visual
                </span>
                <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl drop-shadow-sm">
                  Cuidar tus ojos ahora es más fácil
                </h1>
                <p className="text-pretty text-xl text-muted-foreground leading-relaxed">
                  Soluciones accesibles, confiables y de calidad para cuidar tu visión a todas las edades
                </p>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="lg" className="text-lg px-8 py-6 shadow-lg shadow-primary/25" onClick={() => setIsModalOpen(true)}>
                    Únete a Visual Max
                  </Button>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="grid gap-4 rounded-2xl bg-white/75 p-6 backdrop-blur-md shadow-xl shadow-primary/10 sm:grid-cols-2"
              >
                {[
                  { title: "Montura GRATIS cada año", detail: "Beneficio incluido en tu plan" },
                  { title: "Amplia red de prestadores", detail: "Red de ópticas Optimax y aliados" },
                  { title: "Planes adaptados", detail: "Individual, familiar y corporativo" },
                  { title: "Atención integral", detail: "Óptica y servicios oftalmológicos" },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-1 rounded-lg border border-primary/10 bg-primary/5 p-3">
                    <p className="text-xs font-semibold text-primary uppercase tracking-[0.08em]">{item.title}</p>
                    <p className="text-sm text-foreground">{item.detail}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square overflow-hidden rounded-[28px] shadow-2xl ring-8 ring-white/40 ring-offset-0">
                <Image
                  src="/assets/hero-image.jpg"
                  alt="Familia eligiendo lentes en óptica VisualMax"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
