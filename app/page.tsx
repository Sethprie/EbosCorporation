import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Portfolio } from "@/components/portfolio"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Collaborations } from "@/components/collaborations"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <section id="inicio">
        <Hero />
      </section>
      <Portfolio />
      <Services />
      <About />
      <Collaborations />
      <Contact />
      <Footer />
    </main>
  )
}
