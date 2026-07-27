"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import {
  ClipboardCheck,
  Camera,
  Megaphone,
  Users,
  FileSignature,
  KeyRound,
  HeartHandshake,
  Check,
  type LucideIcon,
} from "lucide-react"

type Step = {
  title: string
  short: string
  icon: LucideIcon
  description: string
  points: string[]
}

const steps: Step[] = [
  {
    title: "Úvodní konzultace a nábor",
    short: "Analýza a strategie",
    icon: ClipboardCheck,
    description:
      "Osobní schůzka, na které si projdeme Vaše cíle a očekávání. Provedu technickou a právní prověrku nemovitosti a na základě reálných dat z trhu nastavím prodejní strategii i cenu, která dává smysl.",
    points: [
      "Prohlídka a technické posouzení nemovitosti",
      "Analýza trhu a cenová strategie",
      "Kontrola právního stavu a dokumentů",
    ],
  },
  {
    title: "Příprava a home staging",
    short: "Příprava k prezentaci",
    icon: Camera,
    description:
      "Nemovitost připravím tak, aby zaujala na první pohled. Zajistím profesionální fotografie, video, 3D prohlídku a půdorysy. Kde to dává smysl, doporučím home staging pro maximální dojem.",
    points: [
      "Profesionální fotografie a video z dronu",
      "Virtuální 3D prohlídka a půdorysy",
      "Home staging a příprava prostoru",
    ],
  },
  {
    title: "Marketing a prezentace",
    short: "Cílená kampaň",
    icon: Megaphone,
    description:
      "Spustím cílenou marketingovou kampaň napříč realitními portály a sociálními sítěmi. Vaši nemovitost dostanu před správné publikum a maximalizuji počet kvalitních poptávek.",
    points: [
      "Inzerce na TOP realitních portálech",
      "Placená kampaň na sociálních sítích",
      "Prezentace v síti klientů RE/MAX",
    ],
  },
  {
    title: "Prohlídky a vyjednávání",
    short: "Jednání se zájemci",
    icon: Users,
    description:
      "Organizuji a osobně vedu všechny prohlídky. Zájemce filtruji, ověřuji jejich financování a profesionálně vyjednávám nejlepší možnou cenu ve Váš prospěch.",
    points: [
      "Organizace a vedení prohlídek",
      "Prověření solventnosti zájemců",
      "Profesionální vyjednávání ceny",
    ],
  },
  {
    title: "Rezervace a právní servis",
    short: "Smlouvy a úschova",
    icon: FileSignature,
    description:
      "S vybraným kupujícím uzavřeme rezervační smlouvu. Kompletní právní servis, advokátní úschovu peněz i pomoc s financováním zajistím tak, aby byl obchod pro obě strany naprosto bezpečný.",
    points: [
      "Rezervační a kupní smlouva od advokáta",
      "Bezpečná advokátní či notářská úschova",
      "Součinnost s hypotečním specialistou",
    ],
  },
  {
    title: "Podpis a prodej",
    short: "Převod a předání",
    icon: KeyRound,
    description:
      "Podpisem kupní smlouvy a návrhem na vklad do katastru nemovitostí obchod finalizujeme. Zajistím hladké předání nemovitosti novému majiteli včetně předávacího protokolu.",
    points: [
      "Podpis kupní smlouvy a návrh na vklad",
      "Vyřízení na katastrálním úřadu",
      "Předávací protokol a předání klíčů",
    ],
  },
  {
    title: "Poprodejní servis",
    short: "Péče i po prodeji",
    icon: HeartHandshake,
    description:
      "Moje práce nekončí prodejem. Pomohu s přepisem energií, poradím s daňovým přiznáním a zůstávám Vám k dispozici i do budoucna. Spokojený klient je moje nejlepší reference.",
    points: [
      "Přepis energií a služeb na nového majitele",
      "Poradenství k dani z příjmu",
      "Dlouhodobá podpora a péče o klienta",
    ],
  },
]

const AUTOPLAY_MS = 5000

export function ProcessSection() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const select = useCallback((index: number) => {
    setActive(index)
    setPaused(true)
  }, [])

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length)
    }, AUTOPLAY_MS)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [paused])

  const activeStep = steps[active]
  const ActiveIcon = activeStep.icon
  const progress = ((active + 1) / steps.length) * 100

  return (
    <section id="proces" className="relative overflow-hidden bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
            Jak probíhá spolupráce
          </span>
          <h2 className="mt-6 text-balance font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Cesta k úspěšnému prodeji v 7 krocích
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Od prvního setkání až po servis po prodeji. Každý krok mám pod kontrolou, abyste se
            mohli spolehnout na bezpečný a maximálně výhodný obchod.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          {/* Kroky */}
          <ol className="relative" onMouseEnter={() => setPaused(true)}>
            <div
              className="absolute left-[27px] top-2 bottom-2 w-px bg-border md:left-[31px]"
              aria-hidden="true"
            />
            <div
              className="absolute left-[27px] top-2 w-px bg-brand transition-all duration-500 md:left-[31px]"
              style={{ height: `calc((100% - 1rem) * ${(active + 1) / steps.length})` }}
              aria-hidden="true"
            />
            {steps.map((step, index) => {
              const StepIcon = step.icon
              const isActive = index === active
              const isDone = index < active
              return (
                <li key={step.title} className="relative">
                  <button
                    type="button"
                    onClick={() => select(index)}
                    aria-current={isActive ? "step" : undefined}
                    className={`group flex w-full items-center gap-4 rounded-xl border p-3 text-left transition-all md:gap-5 md:p-4 ${
                      isActive
                        ? "border-brand/40 bg-card shadow-lg"
                        : "border-transparent hover:border-border hover:bg-card/60"
                    }`}
                  >
                    <span
                      className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 transition-colors md:h-16 md:w-16 ${
                        isActive
                          ? "border-brand bg-brand text-brand-foreground"
                          : isDone
                            ? "border-brand/50 bg-card text-brand"
                            : "border-border bg-card text-muted-foreground"
                      }`}
                    >
                      {isDone ? (
                        <Check className="h-6 w-6" aria-hidden="true" />
                      ) : (
                        <StepIcon className="h-6 w-6" aria-hidden="true" />
                      )}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-brand">
                        Krok {index + 1}
                      </span>
                      <span
                        className={`block font-heading text-base font-semibold md:text-lg ${
                          isActive ? "text-foreground" : "text-foreground/80"
                        }`}
                      >
                        {step.title}
                      </span>
                      <span className="block text-sm text-muted-foreground">{step.short}</span>
                    </span>
                  </button>
                </li>
              )
            })}
          </ol>

          {/* Detail */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
              <div className="h-1.5 w-full bg-secondary">
                <div
                  className="h-full bg-brand transition-all duration-500"
                  style={{ width: `${progress}%` }}
                  aria-hidden="true"
                />
              </div>
              <div className="p-7 md:p-9">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <ActiveIcon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                      Krok {active + 1} ze {steps.length}
                    </p>
                    <h3 className="font-heading text-xl font-bold text-foreground md:text-2xl">
                      {activeStep.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-muted-foreground">
                  {activeStep.description}
                </p>

                <ul className="mt-6 space-y-3 border-t border-border pt-6">
                  {activeStep.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                      <span className="text-sm text-foreground/90">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-center justify-between gap-4">
                  <div className="flex gap-1.5" role="tablist" aria-label="Kroky procesu">
                    {steps.map((step, index) => (
                      <button
                        key={step.title}
                        type="button"
                        onClick={() => select(index)}
                        aria-label={`Přejít na krok ${index + 1}: ${step.title}`}
                        aria-selected={index === active}
                        role="tab"
                        className={`h-2 rounded-full transition-all ${
                          index === active ? "w-8 bg-brand" : "w-2 bg-border hover:bg-brand/50"
                        }`}
                      />
                    ))}
                  </div>
                  <a
                    href="#odhad"
                    className="inline-flex shrink-0 items-center rounded-md bg-[var(--accent-red)] px-5 py-2.5 text-sm font-semibold text-[var(--accent-red-foreground)] transition-colors hover:bg-[oklch(0.5_0.21_26)]"
                  >
                    Chci prodat s Janem
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
