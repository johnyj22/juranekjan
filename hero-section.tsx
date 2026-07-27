import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { PropertiesSection } from "@/components/properties-section"
import { ProcessSection } from "@/components/process-section"
import { ValuationSection } from "@/components/valuation-section"
import { ContactFooter } from "@/components/contact-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PropertiesSection />
        <ProcessSection />
        <ValuationSection />
      </main>
      <ContactFooter />
    </>
  )
}
