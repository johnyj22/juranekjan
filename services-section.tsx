import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export function HeroSection() {
  return (
    <section id="domu" className="relative overflow-hidden bg-background pt-32 md:pt-40">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-glow hero-glow-3" />
      </div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 md:pb-28 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
            Certifikovaný makléř RE/MAX Ace
          </span>
          <h1 className="mt-6 text-pretty font-heading text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Prodej nemovitosti s technickou přesností a férovým přístupem.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Jsem Ing. Jan Juránek, certifikovaný makléř RE/MAX Ace. Spojuji stavařské inženýrství,
            data a moderní marketing k dosažení maximální hodnoty Vaší nemovitosti. Bezpečně a bez
            zbytečných slibů.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#odhad"
              className="inline-flex items-center justify-center rounded-md bg-[var(--accent-red)] px-7 py-4 text-base font-semibold text-[var(--accent-red-foreground)] shadow-sm transition-colors hover:bg-[oklch(0.5_0.21_26)]"
            >
              Chci odhad tržní ceny
            </a>
            <a
              href="#sluzby"
              className="inline-flex items-center justify-center rounded-md border border-border px-7 py-4 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Moje služby
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-border pt-8">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-brand" aria-hidden="true" />
              <span className="text-sm">
                <span className="font-bold text-foreground">10+</span>{" "}
                <span className="text-muted-foreground">Úspěšných obchodů</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-brand" aria-hidden="true" />
              <span className="text-sm">
                <span className="font-bold text-foreground">100+</span>{" "}
                <span className="text-muted-foreground">Spokojených klientů</span>
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-6 -top-6 hidden h-full w-full rounded-2xl border border-brand/20 lg:block" />
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary shadow-xl">
            <Image
              src="/portrait-jan.png"
              alt="Portrét Ing. Jana Juránka, realitního makléře RE/MAX Ace"
              width={1024}
              height={1024}
              priority
              className="h-full w-full origin-bottom scale-[1.3] object-cover object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
