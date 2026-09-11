"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { SectionHeader } from "@/components/section-header"

const projects = [
  {
    sheet: "PRJ-01",
    title: "FLOWHUB",
    subtitle: "Visual Workflow Automation",
    status: "DEPLOYED",
    statusColor: "bg-primary text-white",
    description: "Workflow automation platform enabling visual drag-and-drop design, connection, and execution of custom automation pipelines with scalable backend processing.",
    tech: ["Next.js", "Tailwind CSS", "n8n"],
    github: "https://flow-hub-github.vercel.app/",
    image: "/flowhub.png",
  },
  {
    sheet: "PRJ-02",
    title: "DEBUG-MATE",
    subtitle: "AI Code Playground & Error Fixer",
    status: "DEPLOYED",
    statusColor: "bg-primary text-white",
    description: "CodePen-style code playground that catches runtime errors and uses AI to explain and fix them instantly — CodeMirror, a sandboxed iframe, and an Express backend.",
    tech: ["JavaScript", "Node.js", "Express", "AI (Groq)"],
    github: "https://debug-mate.onrender.com/",
    image: "/debugmate.png",
  },
  {
    sheet: "PRJ-03",
    title: "PLACIPY",
    subtitle: "Placement Training System",
    status: "LIVE",
    statusColor: "bg-accent text-white",
    description: "Full-stack placement training system managing students and assessments with secure backend APIs, AWS services, and responsive React interfaces.",
    tech: ["React", "Node.js", "AWS"],
    github: "https://github.com/BaarhaviGit/assessment-placipy_",
    image: "/placipy.jpg",
  },
  {
    sheet: "PRJ-04",
    title: "PRASKLA DIGITALX",
    subtitle: "Product Landing Page",
    status: "LIVE",
    statusColor: "bg-accent text-white",
    description: "Responsive product landing page built with React JS, optimized for UI/UX and performance.",
    tech: ["React JS", "Tailwind CSS", "Netlify"],
    github: "https://digitalxpraskla.netlify.app/",
    image: "/praskla-digitax.png",
  },
  {
    sheet: "PRJ-05",
    title: "HONEYBEE LEARNING",
    subtitle: "Multi Learning Platform",
    status: "DEPLOYED",
    statusColor: "bg-primary text-white",
    description: "Interactive educational platform with class enrollment, teacher management, and engaging learning modules.",
    tech: ["Next.js", "React", "Node.js", "MongoDB"],
    github: "https://thehoneybeelearning.in/",
    image: "/honeybee-learning.png",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => setCurrentProject((prev) => (prev + 1) % projects.length)
  const prevProject = () => setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)

  return (
    <section id="projects" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-col">
        <SectionHeader index="04" title="FEATURED PROJECTS" subtitle="releases · deployment registry" />

        {/* Carousel Container */}
        <div className="relative h-[560px] md:h-[560px] flex items-center justify-center [perspective:1200px]">
          {projects.map((project, index) => {
            const offset = (index - currentProject + projects.length) % projects.length
            const shortestOffset = offset > Math.floor(projects.length / 2) ? offset - projects.length : offset

            const isActive = shortestOffset === 0
            const isVisible = Math.abs(shortestOffset) <= 2

            if (!isVisible) return null

            return (
              <motion.div
                key={project.sheet}
                className={`absolute top-0 bottom-0 my-auto w-full max-w-[92vw] md:max-w-2xl h-[500px] bg-white flex flex-col cursor-pointer transition-shadow duration-300 border ${
                  isActive ? "border-primary shadow-[0_10px_40px_-18px_rgba(31,91,214,0.55)]" : "border-border"
                }`}
                animate={{
                  x: `${shortestOffset * 68}%`,
                  scale: isActive ? 1 : 1 - Math.abs(shortestOffset) * 0.12,
                  opacity: isActive ? 1 : 1 - Math.abs(shortestOffset) * 0.4,
                  zIndex: 10 - Math.abs(shortestOffset),
                  rotateY: `${-shortestOffset * 12}deg`,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={() => {
                  if (!isActive) setCurrentProject(index)
                }}
              >
                {/* Drawing sheet header */}
                <div className="flex items-center justify-between border-b border-border px-5 py-2.5 bg-muted/50">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary">{project.sheet}</span>
                  <span className={`font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 ${project.statusColor}`}>
                    ● {project.status}
                  </span>
                </div>

                {/* Image Section */}
                <div className="relative w-full h-[44%] border-b border-border bg-background p-4 flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <span className="font-mono text-sm text-muted-foreground">[ no preview ]</span>
                  )}
                  {!isActive && <div className="absolute inset-0 bg-white/60 transition-opacity duration-500" />}
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow bg-white relative">
                  {!isActive && <div className="absolute inset-0 bg-white/60 z-10 pointer-events-none transition-opacity duration-500" />}

                  <div className="flex justify-between items-start mb-3">
                    <div className="pr-4">
                      <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-foreground mb-1 line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="font-mono text-[11px] uppercase tracking-widest text-primary line-clamp-1">
                        {project.subtitle}
                      </p>
                    </div>
                    {isActive && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 border border-foreground/30 text-foreground hover:bg-primary hover:text-white hover:border-primary transition-colors flex-shrink-0"
                        aria-label={`View ${project.title}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>

                  <p className="text-foreground/85 text-sm leading-relaxed mb-5 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">deps:</span>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech: string) => (
                        <span key={tech} className="tech-tag text-[10px]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-6 mt-4">
          <button
            onClick={prevProject}
            suppressHydrationWarning
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-foreground border border-foreground/40 px-4 py-2.5 hover:bg-primary hover:text-white hover:border-primary transition-colors"
            aria-label="Previous Project"
          >
            <ChevronLeft size={16} />
            prev
          </button>

          <div className="font-mono text-xs tracking-widest text-primary bg-white border border-border px-4 py-2">
            {String(currentProject + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </div>

          <button
            onClick={nextProject}
            suppressHydrationWarning
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-foreground border border-foreground/40 px-4 py-2.5 hover:bg-primary hover:text-white hover:border-primary transition-colors"
            aria-label="Next Project"
          >
            next
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}