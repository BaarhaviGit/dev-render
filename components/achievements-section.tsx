"use client"

import { motion } from "framer-motion"
import { Code, Trophy, Users } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const achievements = [
  {
    icon: Code,
    metric: "60+",
    unit: "problems",
    title: "LEETCODE PROBLEM SOLVING",
    organization: "Data Structures & Algorithms",
    description: "Strengthening problem-solving and Data Structures & Algorithms skills.",
    color: "text-primary",
    border: "hover:border-primary",
  },
  {
    icon: Trophy,
    metric: "2×",
    unit: "internships",
    title: "CONSISTENT SELECTION",
    organization: "Praskla Technology",
    description: "Selected for a Software Engineering Internship based on bootcamp and hackathon performance.",
    color: "text-secondary",
    border: "hover:border-secondary",
  },
  {
    icon: Users,
    metric: "VP",
    unit: "tech club",
    title: "VICE PRESIDENT",
    organization: "CSE Tech Club, K.S.R. College",
    description: "Leading technical events and workshops for the Computer Science and Engineering club.",
    color: "text-accent",
    border: "hover:border-accent",
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader index="07" title="ACHIEVEMENTS" subtitle="metrics · record of wins" />

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((a, index) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`draft-card group p-6 border-2 border-border ${a.border} transition-colors relative overflow-hidden`}
            >
              {/* corner register */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-border group-hover:border-primary transition-colors" />

              <div className="flex items-center justify-between mb-6">
                <div className={`w-10 h-10 bg-white border border-current flex items-center justify-center ${a.color}`}>
                  <a.icon size={20} />
                </div>
              </div>

              <div className="flex items-baseline gap-2 mb-1">
                <span className={`font-display text-5xl font-bold ${a.color}`}>{a.metric}</span>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {a.unit}
                </span>
              </div>

              <h3 className="font-display font-bold uppercase text-lg mb-1 group-hover:text-primary transition-colors">
                {a.title}
              </h3>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-3">
                {a.organization}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {a.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}