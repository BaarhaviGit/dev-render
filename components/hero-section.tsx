"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Download, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

const titles = [
  "Full Stack Developer",
  "Cloud & DevOps Enthusiast",
  "Problem Solver",
  "Tech Innovator",
]

const floatingIcons = [
  { name: "React", delay: 0 },
  { name: "Node.js", delay: 0.2 },
  { name: "AWS", delay: 0.4 },
  { name: "Python", delay: 0.6 },
  { name: "TypeScript", delay: 0.8 },
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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Mysterious portrait image */}
      <div className="absolute right-0 top-0 h-full w-1/2 hidden lg:block overflow-hidden">
        <div className="relative h-full w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2010.59.27%20AM-MKUSikgWOKlgdBdx4EJqpUCaLz07ZH.jpeg"
            alt="Baarhavi M D"
            fill
            className="object-cover object-center opacity-30"
            style={{
              maskImage: "linear-gradient(to left, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)",
              WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)",
            }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-primary/10 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-sm mb-4"
            >
              {"// Hello World, I'm"}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4"
            >
              <span className="text-gradient">Baarhavi M D</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="h-12 flex items-center justify-center lg:justify-start mb-6"
            >
              <span className="text-xl sm:text-2xl text-muted-foreground">
                {displayText}
                <span className="animate-pulse text-primary">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Building scalable, secure, and modern digital experiences with
              cutting-edge technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity glow-purple"
              >
                Get in Touch
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="px-6 py-3 glass text-foreground font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <Download size={18} />
                Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 mt-8 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/BaarhaviGit"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:bg-white/10 transition-colors group"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/baarhavi-m-d"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:bg-white/10 transition-colors group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
              </a>
            </motion.div>
          </motion.div>

          {/* Floating tech icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="hidden lg:flex items-center justify-center relative h-96"
          >
            {floatingIcons.map((icon, index) => (
              <motion.div
                key={icon.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + icon.delay }}
                className="absolute glass px-4 py-2 rounded-lg text-sm font-mono text-primary animate-float"
                style={{
                  top: `${20 + (index % 3) * 30}%`,
                  left: `${10 + (index % 4) * 20}%`,
                  animationDelay: `${icon.delay}s`,
                }}
              >
                {icon.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-muted-foreground"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  )
}
