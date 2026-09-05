"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Compass, Cpu, CheckCircle2, BookOpen, Layers } from "lucide-react"

const educationItems = [
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "K.S.R. College of Engineering, Tiruchengode",
    period: "2023 – 2027",
    score: "CGPA: 8.5 (5th Semester)",
    status: "Currently Pursuing",
    highlight: true,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Saraswathi Matric Hr. Sec. School",
    period: "2023",
    score: "88% Aggregate",
    status: "Completed",
    highlight: false,
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "G.E.T. School of Excellence",
    period: "2021",
    score: "74% Aggregate",
    status: "Completed",
    highlight: false,
  },
]

const engineeringFocuses = [
  {
    title: "Scalable Full Stack Systems",
    desc: "Architecting modular client-server architectures with clean RESTful APIs, optimistic UI updates, and stateless authentication.",
  },
  {
    title: "Cloud & DevOps Automation",
    desc: "Configuring AWS cloud identity, managed databases, automated webhook triggers with n8n, and edge deployments.",
  },
  {
    title: "Algorithmic Problem Solving",
    desc: "Proven Data Structures & Algorithms proficiency with 60+ LeetCode problems solved across trees, graphs, dynamic programming, and arrays.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#07090e] border-t border-white/5">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[300px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs text-emerald-400 border-emerald-500/30 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span className="font-mono uppercase tracking-wider font-semibold">Background & Focus</span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-2">
            Engineering background, educational credentials, and technical philosophy.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left: Professional Bio & Principles (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-2xl p-7 border-white/10 space-y-4">
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <span>The Developer Behind the Terminal</span>
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I am an <span className="text-white font-semibold">Aspiring Full Stack Software Engineer</span> with deep expertise in Cloud infrastructure and DevOps practices. I specialize in taking applications from concept and architectural whiteboard into secure, high-performance production systems.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Currently in my 5th semester pursuing <span className="text-emerald-400 font-mono font-medium">B.E. Computer Science and Engineering</span> at K.S.R. College of Engineering with an <span className="text-white font-semibold">8.5 CGPA</span>. My technical journey bridges frontend responsiveness, backend transactional logic, and cloud automation.
              </p>

              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block mb-3 font-semibold">
                  Engineering Principles
                </span>
                <div className="grid sm:grid-cols-1 gap-3">
                  {engineeringFocuses.map((f) => (
                    <div
                      key={f.title}
                      className="p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-emerald-500/20 transition-colors"
                    >
                      <h4 className="text-sm font-semibold text-emerald-300 font-mono mb-1 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        {f.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed pl-5">
                        {f.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Academic Credentials Timeline (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card rounded-2xl p-6 border-white/10">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-white">
                  Academic Milestones
                </h3>
              </div>

              <div className="space-y-4">
                {educationItems.map((edu) => (
                  <div
                    key={edu.degree}
                    className={`p-4 rounded-xl border transition-all ${
                      edu.highlight
                        ? "bg-emerald-500/[0.06] border-emerald-500/30"
                        : "bg-black/30 border-white/5"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                        {edu.period}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-muted-foreground border border-white/5">
                        {edu.status}
                      </span>
                    </div>

                    <h4 className="font-semibold text-sm text-white mb-1">
                      {edu.degree}
                    </h4>

                    <p className="text-xs text-muted-foreground mb-2">
                      {edu.institution}
                    </p>

                    <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                      <Award className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{edu.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
