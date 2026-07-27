import { Home, Camera, Sparkles, LineChart, type LucideIcon } from "lucide-react"

type Service = {
  icon: LucideIcon
  title: string
  text: string
}

const services: Service[] = [
  {
    icon: Home,
    title: "Prodej a Pronájem",
    text: "Bezpečně vás provedu celým procesem. Od přípravy, přes marketing až po podpis neprůstřelné smlouvy.",
  },
  {
    icon: Camera,
    title: "Špičkový vizuál a Dron",
    text: "Standardem je 4K video a precizní letecké záběry z dronu Potensic Atom 2 pro dokumentaci okolí a technického stavu nemovitosti.",
  },
  {
    icon: Sparkles,
    title: "AI Homestaging a Vizualizace",
    text: "Digitálně uklidím prostor nebo vytvořím realistické 3D vizualizace, které ukážou skutečný potenciál nemovitosti.",
  },
  {
    icon: LineChart,
    title: "Odborné Ocenění",
    text: "Žádné odhady „od oka“. Přesná čísla na základě matematických metod, dat z katastru a technického posouzení.",
  },
]

export function ServicesSection() {
  return (
    <section id="sluzby" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Služby</p>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Moderní služby pro maximální zisk
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-heading text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
