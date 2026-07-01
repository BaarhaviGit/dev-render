"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Monitor, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "PLACIPY",
    subtitle: "Placement Training System",
    description: "Developed a full-stack Placement Training System to manage students and assessments with secure backend APIs, AWS services, and responsive React interfaces.",
    tech: ["React", "Node.js", "Python", "PostgreSQL"],
    github: "https://github.com/BaarhaviGit/assessment-placipy_",
    image: "/placipy.jpg",
  },
  {
    title: "PRASKLA DIGITALX",
    subtitle: "Landing Page",
    description: "Built a responsive product landing page using React JS with optimized UI/UX and performance enhancements.",
    tech: ["React JS", "Tailwind CSS", "Netlify"],
    github: "https://digitalxpraskla.netlify.app/",
    image: "/praskla-digitax.png",
  },
  {
    title: "SMARTSPLIT AI",
    subtitle: "Intelligent Group Expense Management Platform",
    description: "Built a full-stack fintech application using React, Node.js, Express, and SQLite featuring JWT authentication, secure group isolation, PhonePe Sandbox payment integration, and intelligent person-to-person settlement calculation.",
    tech: ["React", "Node.js", "Express", "SQLite"],
    github: "https://smartsplit--ai.vercel.app/",
    image: "/smartsplit.png",
  },
  {
    title: "FLOWHUB",
    subtitle: "Visual Workflow Automation Platform",
    description: "Developed a modern workflow automation platform enabling users to visually design, connect, and execute custom automation pipelines through an intuitive drag-and-drop interface with scalable backend processing.",
    tech: ["Next.js", "Tailwind CSS", "n8n"],
    github: "https://flow-hub-github.vercel.app/",
    image: "/flowhub.png",
  },
  {
    title: "HONEYBEE LEARNING",
    subtitle: "Multi Learning Platform",
    description: "An interactive, high-quality educational platform designed to inspire young minds. Features class enrollment, teacher management, and engaging learning modules.",
    tech: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    github: "https://thehoneybeelearning.in/",
    image: "/honeybee-learning.png",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

      {/* Section header */}
      <div className="border-y-4 border-primary bg-muted py-4 mb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl text-primary neon-text"
          >
            FEATURED PROJECTS
          </motion.h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Carousel Container */}
        <div className="relative w-full h-[550px] md:h-[600px] flex items-center justify-center [perspective:1200px]">
          {projects.map((project, index) => {
            // Calculate relative offset (-1, 0, 1, etc) for infinite wrap
            const offset = (index - currentProject + projects.length) % projects.length;
            const shortestOffset = offset > Math.floor(projects.length / 2) ? offset - projects.length : offset;

            const isActive = shortestOffset === 0;
            const isVisible = Math.abs(shortestOffset) <= 2;

            if (!isVisible) return null;

            return (
              <motion.div
                key={project.title}
                className={`absolute top-0 bottom-0 my-auto w-full max-w-[90vw] md:max-w-2xl h-[480px] md:h-[520px] comic-border bg-card flex flex-col cursor-pointer transition-colors duration-300 ${isActive ? 'border-primary shadow-[0_0_30px_rgba(var(--primary),0.2)]' : 'hover:border-primary/50 border-background'}`}
                animate={{
                  x: `${shortestOffset * 65}%`,
                  scale: isActive ? 1 : 1 - Math.abs(shortestOffset) * 0.15,
                  opacity: isActive ? 1 : 1 - Math.abs(shortestOffset) * 0.4,
                  zIndex: 10 - Math.abs(shortestOffset),
                  rotateY: `${-shortestOffset * 15}deg`,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={() => {
                  if (!isActive) setCurrentProject(index)
                }}
              >
                {/* Image Section */}
                <div className="relative w-full h-[45%] border-b-2 border-background bg-black/50 p-4 flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain drop-shadow-xl"
                    />
                  ) : (
                    <Monitor className="w-16 h-16 text-primary/30" />
                  )}
                  {/* Dark overlay if not active to make center pop */}
                  {!isActive && <div className="absolute inset-0 bg-background/50 transition-opacity duration-500" />}
                </div>

                {/* Content Section */}
                <div className="p-5 md:p-8 flex flex-col flex-grow bg-card relative">
                  {!isActive && <div className="absolute inset-0 bg-background/50 z-10 pointer-events-none transition-opacity duration-500" />}
                  
                  <div className="flex justify-between items-start mb-3">
                    <div className="pr-4">
                      <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-primary neon-text mb-1 line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-xs md:text-sm font-bold tracking-wider uppercase text-foreground/80 line-clamp-1">
                        {project.subtitle}
                      </p>
                    </div>
                    {isActive && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors rounded-full flex-shrink-0"
                        aria-label={`View ${project.title}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>

                  <p className="text-foreground/90 mt-2 mb-4 text-sm leading-relaxed line-clamp-3 md:line-clamp-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-[10px] md:text-xs font-bold bg-primary text-primary-foreground border-2 border-background whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center gap-8 mt-8">
          <button 
            onClick={prevProject}
            className="brutal-btn p-3 hover:scale-110 transition-transform"
            aria-label="Previous Project"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="font-mono text-sm md:text-base tracking-widest text-primary bg-muted px-4 py-2 border-2 border-background">
            {currentProject + 1} / {projects.length}
          </div>

          <button 
            onClick={nextProject}
            className="brutal-btn p-3 hover:scale-110 transition-transform"
            aria-label="Next Project"
          >
            <ChevronRight size={24} />
          </button>
        </div>

      </div>
    </section>
  )
}
