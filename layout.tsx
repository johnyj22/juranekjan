@import 'tailwindcss';
@import 'tw-animate-css';
@import 'shadcn/tailwind.css';

@custom-variant dark (&:is(.dark *));

@theme inline {
  --font-heading: var(--font-playfair), 'Georgia', serif;
  --font-sans: var(--font-geist-sans), 'Geist Fallback';
  --font-mono: var(--font-geist-mono), 'Geist Mono Fallback';
  --color-brand: var(--brand);
  --color-brand-foreground: var(--brand-foreground);
  --color-accent-red: var(--accent-red);
  --color-accent-red-foreground: var(--accent-red-foreground);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --color-foreground: var(--foreground);
  --color-background: var(--background);
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
  --radius-2xl: calc(var(--radius) * 1.8);
  --radius-3xl: calc(var(--radius) * 2.2);
  --radius-4xl: calc(var(--radius) * 2.6);
}

:root {
  color-scheme: dark;
  /* Luxusní dark mode - uhlová / břidlicová */
  --background: #0f172a;
  --foreground: #f8fafc;
  --card: #1e293b;
  --card-foreground: #f8fafc;
  --popover: #1e293b;
  --popover-foreground: #f8fafc;
  /* RE/MAX modrá - rozjasněná pro tmavé pozadí */
  --primary: oklch(0.62 0.18 256);
  --primary-foreground: #f8fafc;
  --secondary: #131d33;
  --secondary-foreground: #f8fafc;
  --muted: #1e293b;
  --muted-foreground: #cbd5e1;
  --accent: #1e293b;
  --accent-foreground: #f8fafc;
  --destructive: oklch(0.62 0.21 26);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 14%);
  --ring: oklch(0.62 0.18 256);
  /* Brand tokens */
  --brand: oklch(0.65 0.18 254);
  --brand-foreground: #f8fafc;
  --accent-red: oklch(0.6 0.22 26);
  --accent-red-foreground: #f8fafc;
  /* Nejtmavší plocha (hlavička / patička) */
  --surface-deep: #0a0f1e;
  --chart-1: oklch(0.87 0 0);
  --chart-2: oklch(0.556 0 0);
  --chart-3: oklch(0.439 0 0);
  --chart-4: oklch(0.371 0 0);
  --chart-5: oklch(0.269 0 0);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  color-scheme: dark;
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.87 0 0);
  --chart-2: oklch(0.556 0 0);
  --chart-3: oklch(0.439 0 0);
  --chart-4: oklch(0.371 0 0);
  --chart-5: oklch(0.269 0 0);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
  html {
    @apply font-sans;
    scroll-behavior: smooth;
  }
  section[id] {
    scroll-margin-top: 7rem;
  }
}

/* ---- Hero animované pozadí ---- */
.hero-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

/* Jemná architektonická mřížka */
.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(148, 163, 184, 0.07) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(148, 163, 184, 0.07) 1px, transparent 1px);
  background-size: 64px 64px;
  -webkit-mask-image: radial-gradient(ellipse 75% 65% at 50% 0%, #000 35%, transparent 100%);
  mask-image: radial-gradient(ellipse 75% 65% at 50% 0%, #000 35%, transparent 100%);
}

/* Pomalu se přelévající záře (mesh gradient) */
.hero-glow {
  position: absolute;
  border-radius: 9999px;
  filter: blur(90px);
  will-change: transform;
}

.hero-glow-1 {
  top: -12%;
  left: -8%;
  width: 46rem;
  height: 46rem;
  background: radial-gradient(circle, rgba(37, 99, 235, 0.28), transparent 65%);
  animation: hero-float-1 22s ease-in-out infinite;
}

.hero-glow-2 {
  bottom: -20%;
  right: -10%;
  width: 42rem;
  height: 42rem;
  background: radial-gradient(circle, rgba(30, 58, 138, 0.32), transparent 65%);
  animation: hero-float-2 28s ease-in-out infinite;
}

.hero-glow-3 {
  top: 20%;
  right: 18%;
  width: 28rem;
  height: 28rem;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.16), transparent 60%);
  animation: hero-float-1 32s ease-in-out infinite reverse;
}

@keyframes hero-float-1 {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(7%, 9%, 0) scale(1.12);
  }
}

@keyframes hero-float-2 {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1.08);
  }
  50% {
    transform: translate3d(-8%, -7%, 0) scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-glow {
    animation: none !important;
  }
}
