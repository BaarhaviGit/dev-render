"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "PlaciPY",
    subtitle: "Placement Training System",
    description:
      "Full-stack placement training platform with student management, assessment modules, secure backend APIs, and a responsive React UI for seamless user experience.",
    tech: ["React", "Node.js", "Python", "PostgreSQL", "REST API"],
    github: "https://github.com/BaarhaviGit",
    live: "#",
    featured: true,
  },
  {
    title: "FinPay",
    subtitle: "Payment Gateway Integration",
    description:
      "Robust payment gateway integration system featuring Razorpay Sandbox API, secure signature verification, and comprehensive transaction logging.",
    tech: ["Node.js", "Razorpay API", "JavaScript", "Express"],
    github: "https://github.com/BaarhaviGit",
    live: "#",
    featured: true,
  },
  {
    title: "Telegram Automation",
    subtitle: "Workflow Automation System",
    description:
      "Intelligent automation system built with n8n for Telegram bot workflows, webhooks, and API automation to streamline communication processes.",
    tech: ["n8n", "Telegram API", "Webhooks", "Automation"],
    github: "https://github.com/BaarhaviGit",
    live: "#",
    featured: false,
  },
  {
    title: "Hostel Management",
    subtitle: "Mobile Application",
    description:
      "Comprehensive Flutter-based mobile application for hostel management including room allocation, attendance tracking, and fee management modules.",
    tech: ["Flutter", "Dart", "Firebase", "Mobile Dev"],
    github: "https://github.com/BaarhaviGit",
    live: "#",
    featured: false,
  },
  {
    title: "DigitalX Landing",
    subtitle: "Product Landing Page",
    description:
      "Modern, responsive product landing page with optimized UI/UX design, smooth animations, and conversion-focused layout built with React JS.",
    tech: ["React JS", "CSS3", "Responsive Design", "UI/UX"],
    github: "https://github.com/BaarhaviGit",
    live: "#",
    featured: false,
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass rounded-2xl overflow-hidden group hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                <div className="h-2 bg-gradient-to-r from-primary to-secondary" />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-primary/80">{project.subtitle}</p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github size={20} className="text-muted-foreground hover:text-foreground" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink size={20} className="text-muted-foreground hover:text-foreground" />
                      </a>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="glass rounded-xl p-6 group hover:bg-white/10 transition-all hover:shadow-md hover:shadow-primary/10"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded hover:bg-white/10 transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={16} className="text-muted-foreground" />
                    </a>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs font-mono bg-muted text-muted-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}
