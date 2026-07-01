"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, Calendar } from "lucide-react"

const experiences = [
  {
    number: "02",
    title: "SOFTWARE ENGINEERING INTERN",
    company: "Praskla Technology",
    companyLink: "https://praskla-tech.netlify.app/",
    duration: "8 Months",
    description: "Worked on scalable web applications implementing REST APIs, authentication workflows, and database integration in agile environments.",
    technologies: ["React", "Node.js", "PostgreSQL", "REST APIs"],
  },
  {
    number: "01",
    title: "CYBER SECURITY INTERN",
    company: "Zero Touch, Hyderabad",
    duration: "Internship",
    description: "Gained exposure to vulnerability assessment, cyber threat analysis, and network security practices.",
    technologies: ["Vulnerability Assessment", "Network Security", "Threat Analysis"],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      {/* Section header */}
      <div className="border-y-4 border-primary bg-primary py-4 mb-16">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl text-primary-foreground"
          >
            EXPERIENCE
          </motion.h2>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-primary" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex gap-8 mb-12"
            >
              {/* Number bubble */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 bg-primary text-primary-foreground font-[family-name:var(--font-display)] text-2xl flex items-center justify-center border-4 border-background">
                  {exp.number}
                </div>
              </div>

              {/* Content */}
              <div className="comic-border bg-card p-6 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl text-primary">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                      <Building2 size={14} />
                      {exp.companyLink ? (
                        <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                          {exp.company}
                        </a>
                      ) : (
                        <span>{exp.company}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-3 py-1">
                    <Calendar size={12} />
                    {exp.duration}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs font-bold ${
                        i % 3 === 0 ? "bg-primary text-primary-foreground" :
                        i % 3 === 1 ? "bg-secondary text-secondary-foreground" :
                        "bg-accent text-accent-foreground"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* End marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="relative flex gap-8"
          >
            <div className="relative z-10 flex-shrink-0">
              <div className="w-16 h-16 bg-secondary text-secondary-foreground font-[family-name:var(--font-display)] text-sm flex items-center justify-center border-4 border-background text-center leading-tight">
                THE<br />START
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
