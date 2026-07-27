import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, MapPin, Check, Phone, Mail } from "lucide-react"
import { getProperty, properties } from "@/lib/properties"
import { PropertyGallery } from "@/components/property-gallery"
import { SiteHeader } from "@/components/site-header"
import { ContactFooter } from "@/components/contact-footer"

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const property = getProperty(slug)
  if (!property) {
    return { title: "Nemovitost nenalezena" }
  }
  return {
    title: `${property.title} | Ing. Jan Juránek – RE/MAX Ace`,
    description: property.description[0],
  }
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const property = getProperty(slug)

  if (!property) {
    notFound()
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background pb-24 pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl px-6">
        <Link
          href="/#nabidka"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Zpět na nabídku
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="rounded-md bg-brand/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
            {property.transaction}
          </span>
          <span className="rounded-md bg-[var(--accent-red)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--accent-red-foreground)]">
            Exkluzivně
          </span>
        </div>

        <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h1 className="text-balance font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {property.title}
            </h1>
            <p className="mt-3 flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              {property.location}
            </p>
          </div>
          <p className="font-heading text-3xl font-bold text-brand md:text-right">{property.price}</p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div className="flex flex-col gap-12">
            <PropertyGallery images={property.gallery} />

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground">Popis nemovitosti</h2>
              <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
                {property.description.map((paragraph) => (
                  <p key={paragraph} className="text-pretty">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          </div>

          <aside className="flex flex-col gap-8">
            <section className="rounded-xl border border-border bg-card p-6">
              <h2 className="font-heading text-xl font-bold text-foreground">Parametry nemovitosti</h2>
              <dl className="mt-5 divide-y divide-border">
                {property.parameters.map((param) => (
                  <div key={param.label} className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-sm text-muted-foreground">{param.label}</dt>
                    <dd className="text-right text-sm font-semibold text-foreground">
                      {param.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className="rounded-xl border border-border bg-card p-6">
              <h2 className="font-heading text-xl font-bold text-foreground">Přednosti</h2>
              <ul className="mt-5 space-y-3">
                {property.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-xl border border-brand/30 bg-brand/10 p-6">
              <h2 className="font-heading text-xl font-bold text-foreground">Máte zájem?</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Rád vám nemovitost osobně představím a zodpovím veškeré dotazy.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href="tel:+420776123456"
                  className="flex items-center justify-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  +420 776 123 456
                </a>
                <a
                  href="mailto:jan.juranek@remax-czech.cz"
                  className="flex items-center justify-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Napsat e-mail
                </a>
              </div>
            </section>
          </aside>
        </div>
      </div>
      </main>
      <ContactFooter />
    </>
  )
}
