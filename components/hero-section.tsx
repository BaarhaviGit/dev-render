"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { 
  Github, 
  Linkedin, 
  Twitter, 
  ArrowDown, 
  Terminal, 
  Sparkles, 
  Cpu, 
  Layers, 
  ExternalLink,
  Code2,
  Cloud,
  CheckCircle2,
  Zap
} from "lucide-react"

const metrics = [
  { label: "Projects Shipped", value: "6+", detail: "Full Stack & Cloud" },
  { label: "Engineering Internships", value: "2", detail: "Praskla & Zero Touch" },
  { label: "Hackathons Participated", value: "3+", detail: "State & Corporate" },
  { label: "Academic CGPA", value: "8.5", detail: "B.E. Computer Science" },
]

const codeRoles = [
  "Full Stack Software Engineer",
  "Cloud & DevOps Practitioner",
  "Distributed Systems Enthusiast",
  "API & Data Pipeline Builder",
]

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedRole, setDisplayedRole] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const { scrollY } = useScroll()
  const yParallax = useTransform(scrollY, [0, 500], [0, 60])
  const opacityFade = useTransform(scrollY, [0, 400], [1, 0.4])

  useEffect(() => {
    const current = codeRoles[roleIndex]
    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedRole.length < current.length) {
            setDisplayedRole(current.slice(0, displayedRole.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2400)
          }
        } else {
          if (displayedRole.length > 0) {
            setDisplayedRole(displayedRole.slice(0, -1))
          } else {
            setIsDeleting(false)
            setRoleIndex((prev) => (prev + 1) % codeRoles.length)
          }
        }
      },
      isDeleting ? 40 : 80
    )
    return () => clearTimeout(timer)
  }, [displayedRole, isDeleting, roleIndex])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden engineering-grid"
    >
      {/* Ambient background glow & radial vignette */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-transparent rounded-full blur-[120px] opacity-70" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Notification Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-start mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs text-muted-foreground border-emerald-500/20 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-foreground font-medium">Baarhavi M D</span>
            <span className="text-white/20">|</span>
            <span className="text-emerald-400 font-mono">Available for SWE & Full Stack Roles</span>
          </div>
        </motion.div>

        {/* Main Grid: Typography on Left, Refined Photo Card on Right */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Content (7 Cols) */}
          <motion.div
            style={{ y: yParallax, opacity: opacityFade }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col"
          >
            {/* Primary Headline */}
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-5">
              ARCHITECTING{" "}
              <span className="gradient-text block sm:inline">
                SCALABLE
              </span>{" "}
              SYSTEMS
            </h1>

            {/* Typing dynamic sub-heading */}
            <div className="flex items-center gap-2 mb-4 font-mono text-sm sm:text-base text-emerald-400 h-7">
              <Terminal className="w-4 h-4 text-emerald-400/70" />
              <span>{displayedRole}</span>
              <span className="w-2 h-4 bg-emerald-400 animate-pulse inline-block" />
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl mb-8">
              Computer Science Engineer focused on building robust full-stack web applications, resilient backend microservices, and automated cloud deployments. Experienced in real-world API development, distributed databases, and modern UI engineering.
            </p>

            {/* CTAs & Social Links */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all shadow-[0_0_25px_rgba(16,185,129,0.25)] hover:shadow-[0_0_35px_rgba(16,185,129,0.4)] hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <Zap className="w-4 h-4" />
              </a>

              <a
                href="#architecture"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium glass-card hover:border-emerald-500/40 text-foreground transition-all hover:-translate-y-0.5"
              >
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>View System Architecture</span>
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-2 pl-2 border-l border-white/10">
                <a
                  href="https://github.com/BaarhaviGit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-white/10 text-muted-foreground hover:text-white hover:border-white/20 hover:bg-white/5 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/baarhavi-m-d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-white/10 text-muted-foreground hover:text-sky-400 hover:border-sky-500/30 hover:bg-sky-500/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/Baaruu_11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-white/10 text-muted-foreground hover:text-white hover:border-white/20 hover:bg-white/5 transition-colors"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Image Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Outer decorative ambient glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-transparent blur-xl opacity-75" />
              
              <div className="relative rounded-2xl overflow-hidden glass-panel border-white/15 shadow-2xl bg-[#0b101c]">
                {/* Header bar of the image card */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-white/[0.02]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <span className="font-mono text-[11px] text-muted-foreground flex items-center gap-1">
                    <Code2 className="w-3 h-3 text-emerald-400" />
                    baarhavi.config.ts
                  </span>
                </div>

                {/* Profile Image */}
                <div className="relative h-[340px] w-full overflow-hidden bg-gradient-to-b from-transparent to-[#07090e]/90">
                  <Image
                    src="/hero-image-new.jpg"
                    alt="Baarhavi M D - Software Engineer"
                    fill
                    className="object-cover object-top filter contrast-[1.02] brightness-95 hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b101c] via-transparent to-transparent opacity-90" />
                </div>

                {/* Card overlay tags */}
                <div className="p-4 pt-2 bg-[#0b101c] border-t border-white/5 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-white tracking-tight">
                        Baarhavi M D
                      </h3>
                      <p className="text-xs text-muted-foreground font-mono">
                        K.S.R. College of Engineering (8.5 CGPA)
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      <CheckCircle2 className="w-3 h-3" />
                      AWS CCP
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["Next.js", "React", "Node.js", "AWS", "PostgreSQL", "Docker"].map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mt-14 pt-8 border-t border-white/10"
        >
          {metrics.map((item) => (
            <div
              key={item.label}
              className="glass-card p-4 rounded-xl flex flex-col justify-between hover:border-emerald-500/30 transition-colors"
            >
              <div className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-extrabold text-white mb-0.5 flex items-center gap-1.5">
                <span className="gradient-text">{item.value}</span>
              </div>
              <span className="text-xs font-semibold text-slate-300">{item.label}</span>
              <span className="text-[11px] text-muted-foreground font-mono mt-0.5">{item.detail}</span>
            </div>
          ))}
        </motion.div>

        {/* Subtle scroll down indicator */}
        <div className="flex justify-center mt-10">
          <a
            href="#about"
            className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-emerald-400 transition-colors"
            aria-label="Scroll to About Section"
          >
            <span>explore overview</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
