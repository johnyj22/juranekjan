"use client"

import { useEffect, useState } from "react"
import { Mail, Phone, Star, Menu, X } from "lucide-react"

const navLinks = [
  { label: "O mně", href: "/#o-mne" },
  { label: "Služby", href: "/#sluzby" },
  { label: "Nabídka", href: "/#nabidka" },
  { label: "Proces", href: "/#proces" },
  { label: "Odhad ceny", href: "/#odhad" },
  { label: "Kontakt", href: "/#kontakt" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top bar */}
      <div className="hidden border-b border-white/10 bg-[var(--surface-deep)] text-xs text-white/80 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2">
          <div className="flex items-center gap-6">
            <a
              href="mailto:jan.juranek@re-max.cz"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              jan.juranek@re-max.cz
            </a>
            <a
              href="tel:+420733118291"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              +420 733 118 291
            </a>
          </div>
          <a
            href="https://share.google/aEuE52ip4nhgiGTFv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md px-1 py-0.5 transition-colors hover:text-white"
            aria-label="5.0 hodnocení klientů na Google – otevřít profil firmy"
          >
            <span className="flex items-center" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span>
              <span className="font-semibold text-white">5.0</span> Hodnocení klientů na Google
            </span>
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
            : "border-transparent bg-background"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/#domu" className="flex flex-col leading-none">
            <span className="font-heading text-xl font-bold tracking-tight text-foreground">
              Ing. Jan Juránek
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand">
              RE/MAX Ace
            </span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a
              href="/#odhad"
              className="inline-flex items-center rounded-md bg-[var(--accent-red)] px-5 py-2.5 text-sm font-semibold text-[var(--accent-red-foreground)] shadow-sm transition-colors hover:bg-[oklch(0.5_0.21_26)]"
            >
              Odhad ceny
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <ul className="mx-auto flex max-w-7xl flex-col px-6 py-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="py-3">
                <a
                  href="/#odhad"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-md bg-[var(--accent-red)] px-5 py-2.5 text-sm font-semibold text-[var(--accent-red-foreground)]"
                >
                  Chci odhad tržní ceny
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
