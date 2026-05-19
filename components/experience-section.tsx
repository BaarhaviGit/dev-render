"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Praskla Technology",
    location: "India",
    duration: "8 Months",
    description: [
      "Developed scalable web applications using modern frameworks and best practices",
      "Built and maintained RESTful APIs with robust authentication systems",
      "Integrated various databases and optimized query performance",
      "Collaborated with cross-functional teams in an agile environment",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "REST APIs", "Git"],
  },
  {
    title: "Cyber Security Intern",
    company: "Zero Touch",
    location: "Hyderabad",
    duration: "Internship",
    description: [
      "Conducted vulnerability assessments on web applications and network infrastructure",
      "Performed threat analysis and security audits",
      "Implemented network security protocols and monitoring systems",
      "Documented security findings and recommended remediation strategies",
    ],
    technologies: ["Penetration Testing", "Network Security", "OWASP", "Security Tools"],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/30" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-start mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 bg-primary rounded-full animate-pulse-glow z-10" />

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="glass rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-all group">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-primary mt-1">
                        <Building2 size={14} />
                        <span className="text-sm font-medium">{exp.company}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.duration}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1.5">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded"
                      >
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
    </section>
  )
}
