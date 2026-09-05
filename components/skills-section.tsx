"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Wrench, 
  Cpu, 
  CheckCircle2, 
  Sparkles,
  Layers
} from "lucide-react"

interface SkillGroup {
  category: string
  icon: any
  description: string
  skills: { name: string; level: string; note?: string }[]
}

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend & Mobile",
    icon: Code2,
    description: "Responsive component architectures, state machines, and modern client applications.",
    skills: [
      { name: "React.js", level: "Advanced", note: "Hooks, Context, State" },
      { name: "Next.js", level: "Advanced", note: "App Router, SSR, Turbopack" },
      { name: "JavaScript (ES6+)", level: "Advanced", note: "Async, Event Loop, DOM" },
      { name: "Tailwind CSS", level: "Advanced", note: "Modern utility styling" },
      { name: "HTML5 & CSS3", level: "Advanced", note: "Semantics, Flex/Grid" },
      { name: "Flutter", level: "Intermediate", note: "Cross-platform mobile" },
    ],
  },
  {
    category: "Backend & Systems",
    icon: Server,
    description: "RESTful services, authentication pipelines, and high-performance server logic.",
    skills: [
      { name: "Node.js", level: "Advanced", note: "Event-driven runtime" },
      { name: "Express.js", level: "Advanced", note: "REST API architecture" },
      { name: "REST APIs", level: "Advanced", note: "Endpoints, Auth, CORS" },
      { name: "Python", level: "Proficient", note: "Scripting & Automation" },
      { name: "Java", level: "Proficient", note: "OOP & DSA Algorithms" },
      { name: "C", level: "Foundational", note: "Low-level concepts" },
    ],
  },
  {
    category: "Databases & Storage",
    icon: Database,
    description: "Relational modeling, document storage, and transactional data integrity.",
    skills: [
      { name: "PostgreSQL", level: "Advanced", note: "Relational schema & SQL" },
      { name: "MongoDB", level: "Advanced", note: "NoSQL document collections" },
      { name: "SQL", level: "Advanced", note: "Queries, Joins, Indexes" },
      { name: "Firebase", level: "Proficient", note: "Realtime data & Auth" },
      { name: "SQLite", level: "Proficient", note: "Embedded application data" },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    description: "Cloud identity, scalable services, and automated production pipelines.",
    skills: [
      { name: "AWS DynamoDB", level: "Certified", note: "Managed NoSQL storage" },
      { name: "AWS Cognito", level: "Certified", note: "Identity & User Pools" },
      { name: "AWS Cloud Core", level: "Certified", note: "Certified Cloud Practitioner" },
      { name: "Vercel", level: "Advanced", note: "Serverless edge deployments" },
      { name: "Netlify", level: "Advanced", note: "Static hosting & redirects" },
    ],
  },
  {
    category: "Tools & Automation",
    icon: Wrench,
    description: "Version control, workflow orchestration, and webhook event-driven tools.",
    skills: [
      { name: "Git", level: "Advanced", note: "Branching, rebase, merges" },
      { name: "GitHub", level: "Advanced", note: "CI workflows & open source" },
      { name: "n8n Automation", level: "Advanced", note: "Node-based visual pipelines" },
      { name: "Webhooks", level: "Advanced", note: "Event-driven integration" },
      { name: "JWT Auth", level: "Advanced", note: "Token validation & security" },
    ],
  },
]

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const displayedGroups = selectedCategory === "all" 
    ? skillGroups 
    : skillGroups.filter(g => g.category === selectedCategory)

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#07090e] border-t border-white/5">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs text-emerald-400 border-emerald-500/30 mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span className="font-mono uppercase tracking-wider font-semibold">Engineering Core</span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Technical <span className="gradient-text">Skills Matrix</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2 max-w-xl">
              Organized into 5 engineering domains with verified production experience across web applications, cloud services, and automation pipelines.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl glass-panel bg-[#0d1322] border-white/10 self-start md:self-end">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`relative px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === "all"
                  ? "text-emerald-300 font-semibold"
                  : "text-muted-foreground hover:text-white hover:bg-white/5"
              }`}
            >
              {selectedCategory === "all" && (
                <motion.div
                  layoutId="activeSkillsTab"
                  className="absolute inset-0 bg-emerald-500/15 border border-emerald-500/30 rounded-lg"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">All Domains</span>
            </button>

            {skillGroups.map((group) => {
              const isActive = selectedCategory === group.category
              return (
                <button
                  key={group.category}
                  onClick={() => setSelectedCategory(group.category)}
                  className={`relative px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? "text-emerald-300 font-semibold"
                      : "text-muted-foreground hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillsTab"
                      className="absolute inset-0 bg-emerald-500/15 border border-emerald-500/30 rounded-lg"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{group.category.split(" ")[0]}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {displayedGroups.map((group, groupIdx) => {
              const Icon = group.icon
              return (
                <motion.div
                  key={group.category}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: groupIdx * 0.05 }}
                  className="glass-card rounded-2xl p-6 border-white/10 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div>
                    {/* Header of Domain Card */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-white">
                          {group.category}
                        </h3>
                        <span className="text-[11px] font-mono text-muted-foreground">
                          {group.skills.length} Technologies
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                      {group.description}
                    </p>

                    {/* Skill Pills list */}
                    <div className="space-y-2 mb-2">
                      {group.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.02] transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            <span className="text-xs font-semibold text-white font-mono">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Domain Footer tag */}
                  <div className="pt-4 mt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      Production Tested
                    </span>
                    <span className="text-slate-500">Domain 0{groupIdx + 1}</span>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
