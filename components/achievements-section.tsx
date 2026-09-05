"use client"

import { motion } from "framer-motion"
import { Trophy, Code2, Users, ArrowUpRight, CheckCircle2, Sparkles, Zap } from "lucide-react"

const achievements = [
  {
    icon: Code2,
    badge: "ALGORITHMS & DSA",
    title: "60+ LeetCode Problems Solved",
    organization: "LeetCode / Algorithmic Practice",
    description: "Solved 60+ Data Structures & Algorithms problems covering dynamic programming, graph traversal, trees, and array manipulation, cultivating strong computational thinking.",
    metrics: "60+ Solved",
    accent: "emerald",
  },
  {
    icon: Trophy,
    badge: "HACKATHON WINNER",
    title: "Praskla Tech Internship Selection",
    organization: "Praskla Technology Bootcamp",
    description: "Selected for an 8-month software engineering internship out of competitive bootcamp and hackathon cohorts based on rapid full-stack prototyping and API design.",
    metrics: "Top Cohort",
    accent: "cyan",
  },
  {
    icon: Users,
    badge: "LEADERSHIP",
    title: "Vice President - CSE Tech Club",
    organization: "K.S.R. College of Engineering",
    description: "Served as Vice President of the Computer Science and Engineering Tech Club, organizing technical hackathons, coding workshops, and peer mentorship sessions.",
    metrics: "VP Exec",
    accent: "purple",
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-background border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs text-emerald-400 border-emerald-500/30 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span className="font-mono uppercase tracking-wider font-semibold">Honors & Milestones</span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-2">
            Competitive problem solving, hackathon selections, and university technical leadership.
          </p>
        </div>

        {/* Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-7 border-white/10 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 group"
              >
                <div>
                  {/* Top Badge & Metric */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono font-semibold text-white/70">
                      {item.metrics}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 group-hover:border-emerald-500/40 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Organization */}
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mb-3 font-medium">
                    {item.organization}
                  </p>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Footer status */}
                <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Milestone
                  </span>
                  <span>0{idx + 1}</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
