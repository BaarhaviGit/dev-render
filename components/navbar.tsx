"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "SKILLS", href: "#skills" },
  { name: "PROJECTS", href: "#projects" },
  { name: "XP", href: "#experience" },
  { name: "CERTS", href: "#certifications" },
  { name: "W's", href: "#achievements" },
  { name: "HMU", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => setIsOpen(true)}
        className={`fixed top-4 left-4 z-50 brutal-btn flex items-center gap-2 ${
          scrolled ? "bg-primary" : "bg-primary"
        }`}
      >
        <Menu className="w-5 h-5" />
        <span className="font-[family-name:var(--font-display)] text-lg tracking-wide">MENU</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background border-r-4 border-primary"
          >
            <div className="p-8 h-full flex flex-col">
              <button
                onClick={() => setIsOpen(false)}
                className="brutal-btn self-start flex items-center gap-2 mb-12"
              >
                <X className="w-5 h-5" />
                <span className="font-[family-name:var(--font-display)] text-lg">CLOSE</span>
              </button>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-[family-name:var(--font-display)] text-4xl text-primary mb-8 neon-text"
              >
                NAVIGATION
              </motion.h2>

              <nav className="flex flex-col gap-2">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center gap-4 py-3 border-b-2 border-muted hover:border-primary transition-colors"
                  >
                    <span className="text-primary font-mono text-sm">0{i + 1}</span>
                    <span className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-foreground group-hover:text-primary transition-colors glitch-text">
                      {item.name}
                    </span>
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto flex gap-4">
                <a href="https://github.com/BaarhaviGit" target="_blank" rel="noopener noreferrer" className="brutal-btn text-sm">GitHub</a>
                <a href="https://linkedin.com/in/baarhavi-m-d" target="_blank" rel="noopener noreferrer" className="brutal-btn text-sm bg-accent">LinkedIn</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
