"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Github, ExternalLink, Monitor, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "PLACIPY",
    subtitle: "Placement Training System",
    description: "Full-stack placement training platform with student management, assessment modules, secure backend APIs.",
    tech: ["React", "Node.js", "Python", "PostgreSQL"],
    github: "https://github.com/BaarhaviGit",
  },
  {
    title: "FINPAY",
    subtitle: "Payment Gateway Integration",
    description: "Robust payment system featuring Razorpay Sandbox API, secure signature verification, and transaction logging.",
    tech: ["Node.js", "Razorpay", "JavaScript", "Express"],
    github: "https://github.com/BaarhaviGit",
  },
  {
    title: "TELEGRAM BOT",
    subtitle: "Workflow Automation",
    description: "Intelligent automation system built with n8n for Telegram bot workflows, webhooks, and API automation.",
    tech: ["n8n", "Telegram API", "Webhooks"],
    github: "https://github.com/BaarhaviGit",
  },
  {
    title: "HOSTEL MGT",
    subtitle: "Mobile Application",
    description: "Flutter-based mobile app for hostel management - room allocation, attendance tracking, fee management.",
    tech: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/BaarhaviGit",
  },
  {
    title: "DIGITALX",
    subtitle: "Landing Page",
    description: "Modern, responsive product landing page with optimized UI/UX and conversion-focused layout.",
    tech: ["React JS", "CSS3", "UI/UX"],
    github: "https://github.com/BaarhaviGit",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => setCurrentProject((prev) => (prev + 1) % projects.length)
  const prevProject = () => setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      {/* Section header */}
      <div className="border-y-4 border-primary bg-muted py-4 mb-16">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-muted-foreground mb-12 font-mono">
          EXPLORE MY WORK THROUGH THIS VINTAGE TV EXPERIENCE
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Retro TV */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="retro-tv aspect-[4/3] p-8 flex flex-col items-center justify-center">
              {/* TV Screen Content */}
              <div className="relative z-10 text-center">
                <Monitor className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-primary mb-2">
                  PROJECT SHOWCASE
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Choose a channel below to explore amazing projects!
                </p>
                <div className="brutal-btn text-sm">
                  SELECT CHANNEL
                </div>
              </div>
              
              {/* Scanline overlay effect is in CSS */}
            </div>
            
            {/* TV Buttons */}
            <div className="flex justify-center gap-2 mt-4">
              <button onClick={prevProject} className="brutal-btn p-2">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={nextProject} className="brutal-btn p-2">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Project Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="wanted-poster p-8 text-background"
          >
            <h3 className="font-[family-name:var(--font-display)] text-3xl text-background mb-2">
              PROJECT SHOWCASE
            </h3>
            <p className="text-background/70 mb-6">
              Choose a channel below to explore amazing projects!
            </p>
            
            {/* Channel buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  onClick={() => setCurrentProject(index)}
                  className={`px-4 py-2 border-2 border-background font-[family-name:var(--font-display)] text-sm transition-all ${
                    currentProject === index 
                      ? "bg-background text-primary" 
                      : "bg-transparent text-background hover:bg-background/20"
                  }`}
                >
                  {project.title}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Project Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="font-[family-name:var(--font-display)] text-4xl text-primary text-center mb-8 neon-text">
            PROJECT SHOWCASE
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className={`comic-border bg-card p-6 group ${
                  currentProject === index ? "border-secondary" : ""
                }`}
                style={{ transform: `rotate(${(index % 3 - 1) * 1}deg)` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-[family-name:var(--font-display)] text-xl text-primary group-hover:neon-text transition-all">
                      {project.title}
                    </h4>
                    <p className="text-xs text-muted-foreground uppercase">{project.subtitle}</p>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-primary text-primary-foreground hover:bg-secondary transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={16} />
                  </a>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech, i) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 text-xs font-bold ${
                        i % 3 === 0 ? "bg-primary text-primary-foreground" :
                        i % 3 === 1 ? "bg-secondary text-secondary-foreground" :
                        "bg-accent text-accent-foreground"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
