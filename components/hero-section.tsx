"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Download, ChevronDown } from "lucide-react"

const roles = [
  "Software Engineer",
  "Cloud & DevOps Enthusiast",
  "Full Stack Developer",
  "Systems Builder",
]

const features = [
  {
    code: "FS-01",
    label: "Full-Stack Development",
    detail: "React · Next.js · Node",
  },
  {
    code: "CL-02",
    label: "Cloud Infrastructure",
    detail: "AWS · Docker",
  },
  {
    code: "DO-03",
    label: "DevOps & Automation",
    detail: "CI/CD · IaC · n8n",
  },
]

const meta = [
  { label: "DRAWN BY", value: "BAARHAVI" },
  { label: "SHEET", value: "01 / 08" },
  { label: "SCALE", value: "PROD" },
  { label: "REV", value: "A" },
]

export function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentTitle = roles[titleIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 1800)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setTitleIndex((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 40 : 70
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, titleIndex])

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Fine engineering grid overlay */}
      <div className="absolute inset-0 blueprint-grid-subtle opacity-60 pointer-events-none" />
      {/* Top drafting rule */}
      <div className="absolute top-0 inset-x-0 h-px bg-primary/40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center mb-10">
          {/* LEFT — manifest headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-2 mb-8">
              {meta.map((m) => (
                <div
                  key={m.label}
                  className="border border-border bg-white px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                >
                  {m.label} <span className="text-primary font-semibold">{m.value}</span>
                </div>
              ))}
            </div>

            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-status-pulse" />
              status: systems online
            </p>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] tracking-tight mb-6">
              Building
              <br />
              <span className="text-primary">Scalable</span>
              <br />
              Systems
            </h1>

            <p className="text-muted-foreground text-lg max-w-lg mb-8 leading-relaxed">
              Software engineer crafting full-stack applications and exploring the cloud
              &amp; DevOps world — turning ideas into deployed, observable, well-oiled systems.
            </p>

            {/* Role typewriter */}
            <div className="inline-flex items-center gap-3 border-l-2 border-primary bg-white pl-4 pr-8 py-3 mb-8">
              <span className="w-2 h-6 bg-accent animate-status-pulse" />
              <p className="font-mono text-sm sm:text-base text-foreground">
                {displayText}
                <span className="text-primary animate-pulse">_</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-9">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-primary text-white font-mono text-xs uppercase tracking-widest px-5 py-3 hover:bg-foreground transition-colors"
              >
                View Deployments
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-foreground text-foreground font-mono text-xs uppercase tracking-widest px-5 py-3 hover:bg-foreground hover:text-white transition-colors"
              >
                Open a Ticket
              </a>
            </div>

            {/* Feature spec chips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl">
              {features.map((f) => (
                <div key={f.code} className="border border-border bg-white p-3 group hover:border-primary transition-colors">
                  <p className="font-mono text-[10px] text-primary mb-1">{f.code}</p>
                  <p className="font-display font-semibold text-xs uppercase tracking-wide text-foreground mb-1">
                    {f.label}
                  </p>
                  <p className="font-mono text-[10px] text-muted-foreground">{f.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — scanned portrait (photocopy look) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            {/* ghost offset copy */}
            <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 pointer-events-none">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2010.59.27%20AM-MKUSikgWOKlgdBdx4EJqpUCaLz07ZH.jpeg"
                alt=""
                fill
                aria-hidden
                className="w-full h-full object-cover object-[50%_40%] grayscale brightness-[1.35] contrast-[0.7] opacity-30"
              />
              <div className="absolute inset-0 bg-[#1f5bd6]/20 mix-blend-color pointer-events-none" />
            </div>

            {/* main framed copy */}
            <div className="relative border border-border/80 bg-white p-2.5">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e4e4e1]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2010.59.27%20AM-MKUSikgWOKlgdBdx4EJqpUCaLz07ZH.jpeg"
                  alt="Baarhavi M D"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover object-[50%_40%] scale-110 brightness-[1.06] contrast-[1.05]"
                  priority
                />
                {/* cool blue duotone */}
                <div className="absolute inset-0 bg-[#1f5bd6]/45 mix-blend-color pointer-events-none" />
                {/* scan lines */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(28,31,38,0.045)_3px,rgba(28,31,38,0.045)_4px)] pointer-events-none" />

                {/* crop marks */}
                <span className="absolute top-2 left-2 w-3 h-3 border-t border-l border-foreground/40 pointer-events-none" />
                <span className="absolute top-2 right-2 w-3 h-3 border-t border-r border-foreground/40 pointer-events-none" />
                <span className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-foreground/40 pointer-events-none" />
                <span className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-foreground/40 pointer-events-none" />
              </div>
            </div>

            {/* caption bar */}
            <div className="relative flex items-center justify-between border border-border/80 bg-white px-3 py-2 mt-2">
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                fig. 01 · scan_2026
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary">
                cool blue · rev b
              </span>
            </div>

            {/* stats strip under the drawing */}
            <div className="grid grid-cols-3 border border-border mt-3 bg-white">
              {[
                { value: "6+", label: "Projects" },
                { value: "2", label: "Internships" },
                { value: "3+", label: "Hackathons" },
              ].map((s) => (
                <div key={s.label} className="px-4 py-3 border-r border-border last:border-r-0 text-center">
                  <p className="font-display text-2xl font-bold text-primary">{s.value}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* TITLE BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="border-2 border-foreground/80 bg-white mt-4"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-border">
            <div className="px-4 py-3">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">Title</p>
              <p className="font-display font-semibold text-sm uppercase tracking-wide">Portfolio Spec Sheet</p>
            </div>
            <div className="px-4 py-3">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">Engineer</p>
              <p className="font-mono text-sm text-primary font-semibold">
                <a href="https://github.com/BaarhaviGit" target="_blank" rel="noopener noreferrer">Baarhavi M D</a>
              </p>
            </div>
            <div className="px-4 py-3 hidden sm:block">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">Focus</p>
              <p className="font-mono text-sm">Cloud · DevOps · Full-Stack</p>
            </div>
            <div className="px-4 py-3 text-right">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">Sheet</p>
              <p className="font-mono text-sm">1 of 8 · Rev A</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="border-y border-foreground/80 bg-white overflow-hidden py-3">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-4">
              {["PYTHON", "TYPESCRIPT", "REACT", "NODE.JS", "AWS", "DOCKER", "NEXT.JS", "POSTGRESQL", "CI/CD", "CLOUD", "DEVOPS", "AUTOMATION"].map((tech) => (
                <span key={tech} className="font-mono text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-8">
                  <span className="w-1.5 h-1.5 bg-primary" />
                  {tech}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex justify-center py-6"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <a href="#about" className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-1">
            <ChevronDown className="w-5 h-5" />
            scroll ·
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}