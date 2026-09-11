"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/section-header"

const skillGroups = [
  {
    id: "LANG",
    title: "Languages",
    description: "core runtime languages",
    accent: "border-primary/40",
    label: "text-primary",
    skills: ["C", "JAVA", "PYTHON", "JAVASCRIPT", "TYPESCRIPT"],
  },
  {
    id: "FE",
    title: "Frontend",
    description: "interfaces & rendering",
    accent: "border-accent/40",
    label: "text-accent",
    skills: ["HTML/CSS", "REACT JS", "NEXT.JS", "FLUTTER", "TAILWIND"],
  },
  {
    id: "BE",
    title: "Backend & Data",
    description: "logic, apis & storage",
    accent: "border-secondary/40",
    label: "text-secondary",
    skills: ["NODE.JS", "REST APIS", "SQL", "POSTGRESQL", "FIREBASE"],
  },
  {
    id: "CLOUD",
    title: "Cloud & DevOps",
    description: "deploy, automate, observe",
    accent: "border-primary/40",
    label: "text-primary",
    skills: ["AWS", "DOCKER", "GIT", "N8N", "CI/CD"],
  },
]

const rings = [
  { code: "R1", label: "Build", detail: "applications worth deploying" },
  { code: "R2", label: "Ship", detail: "into a cloud-backed runtime" },
  { code: "R3", label: "Automate", detail: "release, infra & workflows" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader index="03" title="ENGINEERING CORE" subtitle="stack · topology diagram" />

        {/* Pipeline rings */}
        <div className="flex flex-col md:flex-row gap-3 mb-14">
          {rings.map((ring, i) => (
            <motion.div
              key={ring.code}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex-1 flex items-center gap-4 border border-border bg-white px-5 py-4"
            >
              <span className="font-mono text-2xl font-semibold text-primary">{ring.code}</span>
              <div>
                <p className="font-display font-semibold text-sm uppercase tracking-wide">{ring.label}</p>
                <p className="font-mono text-[11px] text-muted-foreground">{ring.detail}</p>
              </div>
              <span className="ml-auto text-muted-foreground font-mono text-xs">→</span>
            </motion.div>
          ))}
        </div>

        {/* Skill group nodes */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
              className="relative"
            >
              {/* node wire from left rail */}
              <div className="hidden md:block absolute -left-4 top-1/2 w-4 border-t border-dashed border-border" />

              <div className={`border-2 ${group.accent} bg-white p-6 corner-marks`}>
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className={`font-display font-bold uppercase tracking-wide ${group.label}`}>
                    {group.title}
                  </h3>
                  <span className="font-mono text-[10px] text-muted-foreground">[{group.id}]</span>
                </div>
                <p className="font-mono text-[11px] text-muted-foreground mb-5">{group.description}</p>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.1 + si * 0.05 }}
                      className="tech-tag"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <span>legend:</span>
          <span className="flex items-center gap-2"><span className="w-4 h-4 bg-primary/15 border border-primary" /> production-ready</span>
          <span className="flex items-center gap-2"><span className="w-4 h-4 bg-accent/15 border border-accent" /> daily driver</span>
          <span className="flex items-center gap-2"><span className="w-4 h-4 bg-secondary/15 border border-secondary" /> exploring</span>
        </div>
      </div>
    </section>
  )
}