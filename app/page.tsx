import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Statistics } from "@/components/statistics"
import { Benefits } from "@/components/benefits"
import { Providers } from "@/components/providers"
import { AppointmentBooking, AppointmentDialogProvider } from "@/components/appointment-booking"
import { Testimonials } from "@/components/testimonials"
import { OurStory } from "@/components/our-story"
import { MissionVision } from "@/components/mission-vision"
import { ClaimsComplaints } from "@/components/claims-complaints"
import { CorporateForm } from "@/components/corporate-form"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <AppointmentDialogProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Statistics />
        <Benefits />
        <Providers />
        <AppointmentBooking />
        <Testimonials />
        <OurStory />
        <MissionVision />
        <ClaimsComplaints />
        <CorporateForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </AppointmentDialogProvider>
  )
}
