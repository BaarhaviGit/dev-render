"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/section-header"
import { GitCommitHorizontal } from "lucide-react"

const experiences = [
  {
    hash: "8mo · feat",
    title: "SOFTWARE ENGINEERING INTERN",
    company: "Praskla Technology",
    companyLink: "https://praskla-tech.netlify.app/",
    duration: "2025 — present",
    description: "Shipped scalable web applications — REST APIs, authentication workflows, and database integration in agile environments.",
    technologies: ["React", "Node.js", "PostgreSQL", "REST APIs"],
  },
  {
    hash: "int · secure",
    title: "CYBER SECURITY INTERN",
    company: "Zero Touch, Hyderabad",
    duration: "internship",
    description: "Gained exposure to vulnerability assessment, cyber threat analysis, and network security practices.",
    technologies: ["Vulnerability Assessment", "Network Security", "Threat Analysis"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader index="05" title="EXPERIENCE" subtitle="commit log · chronology" />

        {/* git log rail */}
        <div className="relative">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative flex gap-6"
              >
                {/* commit dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-6 h-6 bg-white border-2 border-primary flex items-center justify-center mt-1">
                    <GitCommitHorizontal className="w-3.5 h-3.5 text-primary" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="tech-tag text-[9px]">{exp.hash}</span>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      {exp.duration}
                    </span>
                  </div>

                  <div className="draft-card corner-marks p-6 hover:border-primary transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <h3 className="font-display text-lg font-bold uppercase tracking-wide">
                        {exp.title}
                      </h3>
                    </div>
                    <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">
                      {exp.companyLink ? (
                        <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </p>
                    <p className="text-foreground/85 text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-tag text-[9px]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* end marker */}
        <div className="mt-12 flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <span className="h-px w-10 bg-border" />
          2 commits · HEAD @ the-start
        </div>
      </div>
    </section>
  )
}