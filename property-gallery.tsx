import { Phone, Mail, MapPin } from "lucide-react"

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z" />
    </svg>
  )
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function ContactFooter() {
  return (
    <footer id="kontakt" className="border-t border-white/10 bg-[var(--surface-deep)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Kontakt
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight">
              Ing. Jan Juránek
            </h2>
            <p className="mt-1 text-sm font-medium uppercase tracking-[0.2em] text-white/60">
              RE/MAX Ace
            </p>

            <ul className="mt-8 space-y-4 text-white/80">
              <li>
                <a
                  href="tel:+420733118291"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone className="h-5 w-5 shrink-0 text-white/50" aria-hidden="true" />
                  +420 733 118 291
                </a>
              </li>
              <li>
                <a
                  href="mailto:jan.juranek@re-max.cz"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Mail className="h-5 w-5 shrink-0 text-white/50" aria-hidden="true" />
                  jan.juranek@re-max.cz
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-white/50" aria-hidden="true" />
                <span>
                  Kancelář: RE/MAX Ace, Jabloňová 2136/11, 106 00 Praha 10 – Záběhlice
                </span>
              </li>
            </ul>
          </div>

          <div className="md:text-right">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Sledujte mě
            </p>
            <div className="mt-6 flex gap-4 md:justify-end">
              {[
                { label: "Facebook", icon: FacebookIcon },
                { label: "Instagram", icon: InstagramIcon },
                { label: "LinkedIn", icon: LinkedinIcon },
              ].map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          Copyright © 2026 Ing. Jan Juránek | Vytvořeno s důrazem na kvalitu.
        </div>
      </div>
    </footer>
  )
}
