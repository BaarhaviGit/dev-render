"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Github, Linkedin, Download, ChevronDown } from "lucide-react"

const titles = [
  "Full Stack Developer",
  "Cloud & DevOps Enthusiast", 
  "Problem Solver",
  "Tech Innovator",
]

const stats = [
  { label: "Projects Shipped", value: "10+" },
  { label: "Internships", value: "2" },
  { label: "Hackathons", value: "3+" },
]

export function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentTitle = titles[titleIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setTitleIndex((prev) => (prev + 1) % titles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, titleIndex])

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(#39ff14 1px, transparent 1px),
            linear-gradient(90deg, #39ff14 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 relative z-10">
        {/* Top section with title and image */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
          {/* Left - Big Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-[family-name:var(--font-display)] text-6xl sm:text-7xl lg:text-8xl text-foreground leading-none mb-6 glitch-text">
              ARCHITECTING
              <br />
              <span className="text-primary neon-text">SCALABLE</span>
              <br />
              SYSTEMS
            </h1>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Aspiring Full Stack Developer with expertise in Cloud and DevOps. Transforming ideas into high-performance applications through modern development practices.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#contact" className="brutal-btn">
                {"LET'S CONNECT"}
              </a>
              <a href="/Baarhaviresume (2) (1).pdf" target="_blank" className="brutal-btn bg-accent flex items-center gap-2">
                <Download className="w-4 h-4" />
                RESUME
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { Icon: Github, href: "https://github.com/BaarhaviGit", color: "bg-foreground text-background" },
                { Icon: Linkedin, href: "https://linkedin.com/in/baarhavi-m-d", color: "bg-accent text-accent-foreground" },
              ].map(({ Icon, href, color }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 ${color} border-2 border-background hover:scale-110 transition-transform`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Image with stickers */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative comic-border bg-card overflow-hidden max-w-sm mx-auto">
              <Image
                src="/hero-image-new.jpg"
                alt="Baarhavi M D"
                width={400}
                height={500}
                className="w-full h-[450px] object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                priority
              />
              {/* Overlay badges */}
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 font-[family-name:var(--font-display)] text-sm border-2 border-background rotate-3">
                PRODUCT BUILDER
              </div>
              <div className="absolute bottom-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 font-[family-name:var(--font-display)] text-sm border-2 border-background -rotate-2">
                DEV TECH NERD
              </div>
              <div className="absolute top-1/2 left-4 bg-accent text-accent-foreground px-3 py-1 font-[family-name:var(--font-display)] text-sm border-2 border-background rotate-6">
                OPEN SOURCE CONTRIBUTOR
              </div>
            </div>
            
            {/* Name tag */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 border-4 border-background font-[family-name:var(--font-display)] text-xl"
            >
              BAARHAVI M D
            </motion.div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-4 mb-8"
        >
          {stats.map((stat, i) => (
            <div key={i} className="comic-border bg-card px-6 py-3 flex items-center gap-3">
              <span className="font-[family-name:var(--font-display)] text-3xl text-primary">{stat.value}</span>
              <span className="text-sm text-muted-foreground uppercase">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Typing text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="comic-border bg-card px-6 py-4 inline-block"
        >
          <span className="font-mono text-primary">{">"}</span>
          <span className="font-mono text-foreground ml-2">{displayText}</span>
          <span className="animate-pulse text-primary font-mono">_</span>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="border-y-4 border-primary bg-primary overflow-hidden py-3">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-4">
              {["PYTHON", "TYPESCRIPT", "AI AGENTS", "LLM APPS", "BROWSER AUTOMATION", "FULL STACK", "CLOUD", "DEVOPS"].map((tech) => (
                <span key={tech} className="font-[family-name:var(--font-display)] text-2xl text-primary-foreground flex items-center gap-2">
                  <span className="text-background">*</span> {tech}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
