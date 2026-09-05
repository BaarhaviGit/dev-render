"use client"

import { Github, Linkedin, Twitter, Mail, ArrowUp, Terminal, ShieldCheck, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socials = [
    { icon: Github, href: "https://github.com/BaarhaviGit", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/baarhavi-m-d", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/Baaruu_11", label: "X (Twitter)" },
    { icon: Mail, href: "mailto:baarhavimathesh11@gmail.com", label: "Email" },
  ]

  return (
    <footer className="border-t border-white/10 bg-[#05070a] text-muted-foreground relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand info */}
          <div className="text-center md:text-left space-y-1">
            <a
              href="#home"
              className="font-[family-name:var(--font-display)] text-lg font-bold text-white hover:text-emerald-400 transition-colors flex items-center justify-center md:justify-start gap-2"
            >
              <span>BAARHAVI M D</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                v2.0
              </span>
            </a>
            <p className="text-xs text-muted-foreground font-mono">
              Architecting Scalable Systems · Full Stack & Cloud Engineering
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-emerald-500/30 hover:bg-emerald-500/10 transition-colors"
                aria-label={s.label}
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-white/30 hover:bg-white/5 transition-colors ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <p>© {currentYear} Baarhavi M D. All rights reserved.</p>
          <div className="flex items-center gap-2 text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Engineered with Next.js 15, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
