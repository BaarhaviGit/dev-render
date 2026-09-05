"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { 
  ExternalLink, 
  Github, 
  Layers, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  FolderGit2,
  Code2,
  Cpu
} from "lucide-react"

interface Project {
  title: string
  subtitle: string
  description: string
  tech: string[]
  github: string
  demo?: string
  image?: string
  category: "all" | "fullstack" | "frontend" | "automation"
  featured?: boolean
}

const projects: Project[] = [
  {
    title: "PLACIPY",
    subtitle: "Placement Training System (PTS Module)",
    description: "Developed during internship at Praskla Technology. Full-stack placement training platform engineered to manage students and assessments with secure backend APIs, AWS cloud services, and high-performance React interfaces.",
    tech: ["React", "Node.js", "AWS", "PostgreSQL", "Python"],
    github: "https://github.com/BaarhaviGit/assessment-placipy_",
    demo: "https://github.com/BaarhaviGit/assessment-placipy_",
    image: "/placipy.jpg",
    category: "fullstack",
    featured: true,
  },
  {
    title: "FLOWHUB",
    subtitle: "Visual Workflow Automation Platform",
    description: "The GitHub for Automations. A modern workflow automation platform enabling builders to visually design, connect, and execute custom n8n pipelines through an intuitive drag-and-drop interface with scalable backend processing.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "n8n"],
    github: "https://github.com/BaarhaviGit",
    demo: "https://flow-hub-github.vercel.app/",
    image: "/flowhub.png",
    category: "automation",
    featured: true,
  },
  {
    title: "SMARTSPLIT AI",
    subtitle: "Intelligent Group Expense Platform",
    description: "Full-stack fintech application built with React, Node.js, Express, and SQLite. Features JWT authentication, secure group isolation, PhonePe Sandbox payment integration, and intelligent person-to-person debt settlement calculation.",
    tech: ["React", "Node.js", "Express", "SQLite", "PhonePe API"],
    github: "https://github.com/BaarhaviGit",
    demo: "https://smartsplit--ai.vercel.app/",
    image: "/smartsplit.png",
    category: "fullstack",
  },
  {
    title: "PRASKLA DIGITALX",
    subtitle: "Agency & Product Landing Page",
    description: "Developed during internship at Praskla Technology. High-conversion modern landing page engineered with React JS, Tailwind CSS, dark-mode aesthetics, responsive layouts, and optimized Core Web Vitals.",
    tech: ["React JS", "Tailwind CSS", "Netlify", "UI/UX"],
    github: "https://github.com/BaarhaviGit",
    demo: "https://digitalxpraskla.netlify.app/",
    image: "/praskla-digitax.png",
    category: "frontend",
  },
  {
    title: "HONEYBEE LEARNING",
    subtitle: "Interactive Multi-Learning Platform",
    description: "Full-featured educational web application built with Next.js, React, Node.js, and MongoDB. Features class enrollment, teacher management portals, and engaging learning modules for young minds.",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/BaarhaviGit",
    demo: "https://thehoneybeelearning.in/",
    image: "/honeybee-learning.png",
    category: "fullstack",
  },
]

const categories = [
  { label: "All Projects", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Automation", value: "automation" },
  { label: "Frontend", value: "frontend" },
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === "all") return true
    return p.category === activeCategory
  })

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs text-emerald-400 border-emerald-500/30 mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span className="font-mono uppercase tracking-wider font-semibold">Featured Engineering</span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Selected <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2 max-w-xl">
              Production web applications, fintech solutions, and workflow automation engines built with clean architecture and scalable code.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl glass-panel bg-[#0d1322] border-white/10 self-start md:self-end">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.value
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? "text-emerald-300 font-semibold"
                      : "text-muted-foreground hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectFilter"
                      className="absolute inset-0 bg-emerald-500/15 border border-emerald-500/30 rounded-lg"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`glass-card rounded-2xl overflow-hidden border border-white/10 flex flex-col group hover:border-emerald-500/40 transition-all duration-300 ${
                  project.featured ? "md:col-span-2 lg:grid lg:grid-cols-12" : ""
                }`}
              >
                {/* Project Image Section */}
                <div
                  className={`relative overflow-hidden bg-black/50 border-b border-white/10 ${
                    project.featured
                      ? "lg:col-span-7 lg:border-b-0 lg:border-r border-white/10 min-h-[280px] sm:min-h-[340px]"
                      : "h-52 sm:h-60"
                  }`}
                >
                  {project.image ? (
                    <div className="relative w-full h-full p-4 sm:p-6 flex items-center justify-center">
                      <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#07090e]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#07090e]/80 via-transparent to-transparent opacity-60" />
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      <Code2 className="w-12 h-12 text-emerald-500/30" />
                    </div>
                  )}

                  {/* Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-20">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 backdrop-blur-md">
                        <Sparkles className="w-3 h-3 text-emerald-400" />
                        Featured Architecture
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content Section */}
                <div
                  className={`p-6 sm:p-7 flex flex-col justify-between flex-grow ${
                    project.featured ? "lg:col-span-5" : ""
                  }`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-medium">
                          {project.subtitle}
                        </span>
                        <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      {/* Action Icon buttons */}
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg border border-white/10 text-muted-foreground hover:text-white hover:border-white/25 hover:bg-white/5 transition-colors"
                            aria-label={`View ${project.title} source code on GitHub`}
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-colors"
                            aria-label={`View ${project.title} live preview`}
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Badges & Live Links */}
                  <div className="pt-4 border-t border-white/10 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* External links footer */}
                    <div className="flex items-center justify-between text-xs pt-1">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-mono text-emerald-400 hover:text-emerald-300 font-semibold group/link"
                        >
                          <span>Launch Application</span>
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                      <span className="text-[11px] text-muted-foreground font-mono">Verified V2 Build</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
