"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, ExternalLink, ShieldCheck, Server, ArrowUpRight, CheckCircle2 } from "lucide-react"

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Praskla Technology",
    companyLink: "https://praskla-tech.netlify.app/",
    duration: "8 Months",
    location: "Remote / Agile Team",
    description: "Worked on scalable web applications implementing RESTful APIs, authentication workflows, and distributed database integration. Built the core placement assessment (PlaciPY) modules and optimized web client performance.",
    tech: ["React.js", "Node.js", "Express", "PostgreSQL", "REST APIs", "AWS"],
    highlights: [
      "Designed and documented secure backend REST APIs for student assessments.",
      "Integrated PostgreSQL relational schemas ensuring transactional integrity.",
      "Collaborated in sprint planning, code reviews, and agile feature delivery.",
    ],
    accent: "emerald",
  },
  {
    role: "Cyber Security Intern",
    company: "Zero Touch",
    companyLink: "https://zerotouch.in",
    duration: "Internship Track",
    location: "Hyderabad, India",
    description: "Gained direct exposure to enterprise vulnerability assessments, threat analysis, secure authentication patterns, and network penetration testing protocols.",
    tech: ["Vulnerability Assessment", "Threat Modeling", "Network Security", "Auth Protocols"],
    highlights: [
      "Conducted web vulnerability scans and documented security mitigation roadmaps.",
      "Analyzed common CVE threat vectors, CORS configurations, and token validation flaws.",
      "Applied defensive coding best practices across modern web services.",
    ],
    accent: "cyan",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[300px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs text-emerald-400 border-emerald-500/30 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span className="font-mono uppercase tracking-wider font-semibold">Career Track Record</span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-2">
            Real-world software engineering and cybersecurity internship history delivering production code and secure systems.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Timeline Node Point */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-[#07090e] border-2 border-emerald-400" />
                </span>
              </div>

              {/* Experience Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border-white/10 hover:border-emerald-500/30 transition-all duration-300">
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-white/5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      {exp.accent === "cyan" ? (
                        <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      ) : (
                        <Server className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={exp.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 transition-colors"
                      >
                        <span>{exp.company}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                      <span className="text-white/20">·</span>
                      <span className="text-xs text-muted-foreground font-mono">{exp.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium glass-panel text-white border-white/10">
                      <Calendar className="w-3 h-3 text-emerald-400" />
                      {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2 mb-6">
                  {exp.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
