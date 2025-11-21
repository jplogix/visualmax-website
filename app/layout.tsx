import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "VisualMax - Plan de Salud Visual",
  description:
    "VisualMax es tu aliado en el cuidado de la salud visual. Ofrecemos un plan integral con acceso a ópticas y prestadores oftálmicos de calidad.",
  keywords: "salud visual, ópticas, oftalmología, lentes, exámenes visuales, República Dominicana",
  openGraph: {
    title: "VisualMax - Plan de Salud Visual",
    description: "Tu aliado en el cuidado de la salud visual",
    images: ["/assets/hero-image.jpg"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={montserrat.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
