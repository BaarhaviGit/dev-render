"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const navItems = [
  { index: "01", name: "PROFILE", href: "#home" },
  { index: "02", name: "ABOUT", href: "#about" },
  { index: "03", name: "SKILLS", href: "#skills" },
  { index: "04", name: "PROJECTS", href: "#projects" },
  { index: "05", name: "EXPERIENCE", href: "#experience" },
  { index: "06", name: "CREDENTIALS", href: "#certifications" },
  { index: "07", name: "ACHIEVEMENTS", href: "#achievements" },
  { index: "08", name: "CONTACT", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur border-b transition-shadow ${
          scrolled ? "shadow-[0_2px_0_rgba(31,91,214,0.15)]" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-3 group shrink-0">
            <span className="font-mono text-sm font-semibold tracking-widest text-foreground group-hover:text-primary transition-colors">
              BAARHAVI<span className="text-primary">_M_D</span>
            </span>
            <span className="hidden xl:block h-5 w-px bg-border" />
            <span className="hidden xl:block font-mono text-[10px] uppercase tracking-widest text-muted-foreground whitespace-nowrap">
              SWE · Cloud &amp; DevOps
            </span>
          </a>

          <nav className="hidden lg:flex items-center">
            {navItems
              .filter((item) => item.href !== "#contact")
              .map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors px-3 py-2 whitespace-nowrap"
                >
                  <span className="text-primary/50 mr-1.5">{item.index}</span>
                  {item.name}
                </a>
              ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden xl:flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-accent animate-status-pulse" />
              Open to work
            </span>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center font-mono text-[11px] uppercase tracking-wider text-white bg-primary px-4 py-2 hover:bg-foreground transition-colors"
            >
              Contact
            </a>
            <button
              onClick={() => setIsOpen(true)}
              suppressHydrationWarning
              className="lg:hidden inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-primary border border-primary px-3 py-2 hover:bg-primary hover:text-white transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-4 h-4" />
              Menu
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            className="fixed inset-0 z-50 bg-background lg:hidden"
          >
            <div className="border-b border-primary bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <span className="font-mono text-sm font-semibold tracking-widest text-foreground">
                  BAARHAVI<span className="text-primary">_M_D</span>
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  suppressHydrationWarning
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary border border-primary px-3 py-2"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                  Close
                </button>
              </div>
            </div>

            <div className="h-[calc(100vh-4rem)] overflow-y-auto">
              <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col py-8">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * i }}
                    onClick={() => setIsOpen(false)}
                    className="flex items-baseline gap-4 py-4 border-b border-border group"
                  >
                    <span className="font-mono text-xs text-primary">[{item.index}]</span>
                    <span className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </span>
                  </motion.a>
                ))}

                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href="https://github.com/BaarhaviGit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase tracking-wider text-primary border border-primary px-4 py-2.5 hover:bg-primary hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/baarhavi-m-d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase tracking-wider text-primary border border-primary px-4 py-2.5 hover:bg-primary hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>

                <div className="mt-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-accent animate-status-pulse" />
                  Status · Open to opportunities
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}