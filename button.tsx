import Image from "next/image"
import Link from "next/link"
import { MapPin, ExternalLink, ArrowRight } from "lucide-react"
import { properties } from "@/lib/properties"

export function PropertiesSection() {
  return (
    <section id="nabidka" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Nabídka</p>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Vybrané z aktuální nabídky
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Pro kompletní portfolio mých nemovitostí k prodeji a pronájmu prosím navštivte můj
            oficiální profil v síti RE/MAX.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {properties.map((property) => (
            <Link
              key={property.slug}
              href={`/nemovitost/${property.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-md bg-[var(--accent-red)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--accent-red-foreground)] shadow-sm">
                  Exkluzivně
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {property.title}
                </h3>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {property.location}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                  <p className="font-heading text-xl font-bold text-brand">{property.price}</p>
                  <span className="flex items-center gap-1 text-sm font-semibold text-brand opacity-0 transition-opacity group-hover:opacity-100">
                    Detail
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="https://www.remax-czech.cz/reality/makleri/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-md border-2 border-brand px-6 py-4 text-base font-semibold text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
          >
            Zobrazit kompletní nabídku na webu RE/MAX
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
