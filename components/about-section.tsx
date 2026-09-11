"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const education = [
  {
    period: "2023 — 2027",
    title: "B.E — Computer Science & Engineering",
    org: "K.S.R. College of Engineering",
    detail: "CGPA · 8.5 (5th Semester)",
  },
  {
    period: "2023",
    title: "HSC — Higher Secondary",
    org: "Saraswathi Matric Hr. Sec. School",
    detail: "Score · 88%",
  },
  {
    period: "2021",
    title: "SSLC — Secondary Education",
    org: "G.E.T. School of Excellence",
    detail: "Score · 74%",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-y-0 left-1/2 w-px bg-border/60 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader index="02" title="ABOUT ME" subtitle="entity · profile BAARHAVI" />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT — profile spec sheet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="corner-marks draft-card p-8"
          >
            <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">
                profile._sheet
              </p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                obj. blk 01
              </p>
            </div>

            <h3 className="font-display text-2xl font-bold uppercase mb-4">
              Objective
            </h3>
            <p className="text-foreground text-lg leading-relaxed mb-4">
              Aspiring{" "}
              <span className="font-semibold text-primary">Full Stack Developer</span> with
              expertise in <span className="font-semibold text-primary">Cloud</span> and{" "}
              <span className="font-semibold text-secondary">DevOps</span> — building
              scalable, secure, and high-performance applications with modern
              development and deployment practices.
            </p>

            {/* Terminal block */}
            <div className="mt-8 border border-border bg-white p-4">
              <div className="flex items-center justify-between border-b border-border pb-2 mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-secondary/80" />
                  <span className="w-2 h-2 rounded-full bg-primary/80" />
                  <span className="w-2 h-2 rounded-full bg-accent/80" />
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">bash — build.sh</span>
              </div>
              <p className="font-mono text-sm text-foreground leading-relaxed">
                <span className="text-primary">$</span> ./deploy --profile baarhavi
                <br />
                <span className="text-accent">▸</span> objective: build &amp; scale
                <br />
                <span className="text-muted-foreground ml-4">→ shipping cloud-native systems</span>
                <span className="text-secondary animate-pulse">_</span>
              </p>
            </div>
          </motion.div>

          {/* RIGHT — education spec table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="font-display text-lg font-bold uppercase tracking-wide">
                Education — Record
              </h3>
            </div>

            <div className="border border-border bg-white divide-y divide-border">
              {education.map((item, i) => (
                <div key={item.title} className="p-5 hover:bg-muted/60 transition-colors grid grid-cols-[auto_1fr] gap-4">
                  <div className="flex flex-col items-center">
                    <span className="w-2 h-2 bg-primary mt-1.5" />
                    {i < education.length - 1 && <span className="w-px flex-1 bg-border mt-1" />}
                  </div>
                  <div className="pb-2">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-1">
                      {item.period}
                    </p>
                    <h4 className="font-semibold text-foreground mb-0.5">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mb-1.5">{item.org}</p>
                    <span className="tech-tag text-[9px]">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 font-mono text-xs text-muted-foreground uppercase tracking-widest">
              status · actively seeking software engineering opportunities
              <span className="text-accent ml-2">●</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}