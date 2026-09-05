"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github, Linkedin, ArrowUpRight, Sparkles } from "lucide-react"

const navItems = [
  { name: "Overview", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Architecture", href: "#architecture" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)

      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 160

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element) {
          const top = element.offsetTop
          if (scrollPosition >= top) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 pointer-events-none">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`pointer-events-auto flex items-center justify-between gap-2 sm:gap-6 px-4 sm:px-6 py-2.5 rounded-full border transition-all duration-300 ${
            isScrolled
              ? "glass-panel bg-[#090e1a]/85 border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.4)]"
              : "bg-[#090e1a]/60 backdrop-blur-md border-white/8"
          } max-w-5xl w-full`}
        >
          {/* Brand Logo & Live Status */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-foreground hover:text-emerald-400 transition-colors group"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
              B
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping opacity-75" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-[family-name:var(--font-display)] text-sm sm:text-base font-bold tracking-tight text-foreground flex items-center gap-1.5">
                BAARHAVI
                <span className="text-[10px] font-mono font-medium px-1.5 py-0.2 rounded bg-white/5 text-muted-foreground border border-white/5 hidden md:inline-block">
                  v2.0
                </span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all rounded-full ${
                    isActive
                      ? "text-emerald-300 font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-emerald-500/15 border border-emerald-500/30 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              )
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/BaarhaviGit"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-muted-foreground hover:text-white hover:border-white/25 hover:bg-white/5 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/baarhavi-m-d"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-muted-foreground hover:text-sky-400 hover:border-sky-500/30 hover:bg-sky-500/10 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all shadow-[0_0_15px_rgba(16,185,129,0.15)]"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 p-5 rounded-2xl glass-panel bg-[#090e1a]/95 border-white/15 shadow-2xl lg:hidden max-w-md mx-auto"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-emerald-400 font-medium">Available for Opportunities</span>
              </div>
              <span className="text-xs text-muted-foreground font-mono">5th Sem · 8.5 CGPA</span>
            </div>

            <nav className="flex flex-col gap-1">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.href.substring(1)
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-emerald-500/15 text-emerald-300 font-semibold border border-emerald-500/30"
                        : "text-muted-foreground hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="text-[10px] font-mono opacity-50">0{idx + 1}</span>
                  </a>
                )
              })}
            </nav>

            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/BaarhaviGit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-white/10 text-muted-foreground hover:text-white hover:bg-white/5"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/baarhavi-m-d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-white/10 text-muted-foreground hover:text-sky-400 hover:bg-sky-500/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors"
              >
                <span>Hire Me</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
