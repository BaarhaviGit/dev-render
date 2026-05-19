"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Trophy, Users, Briefcase } from "lucide-react"

const achievements = [
  {
    icon: Briefcase,
    title: "TECHNICAL Q&A ROUND",
    organization: "GKT Bangalore",
    description: "Successfully cleared the technical question and answer round, demonstrating strong problem-solving abilities.",
    highlight: "TECH EXCELLENCE",
    color: "bg-primary",
  },
  {
    icon: Trophy,
    title: "INTERNSHIP SELECTION",
    organization: "Praskla Technology",
    description: "Selected for a competitive 8-month software engineering internship, working on real-world projects.",
    highlight: "PRO GROWTH",
    color: "bg-secondary",
  },
  {
    icon: Users,
    title: "VICE PRESIDENT",
    organization: "CSE Tech Club, K.S.R College",
    description: "Elected as Vice President of the Computer Science Engineering Technical Club, leading tech events.",
    highlight: "LEADERSHIP",
    color: "bg-accent",
  },
]

export function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="py-24 relative" ref={ref}>
      {/* Section header */}
      <div className="border-y-4 border-primary bg-primary py-4 mb-16">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl text-primary-foreground"
          >
            {"W's (ACHIEVEMENTS)"}
          </motion.h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Highlight badge */}
              <div className="absolute -top-3 left-4 z-10">
                <span className={`px-4 py-1 text-xs font-[family-name:var(--font-display)] ${achievement.color} text-background border-2 border-background`}>
                  {achievement.highlight}
                </span>
              </div>

              <div className="comic-border bg-card p-6 pt-8 h-full group-hover:bg-muted transition-colors">
                <div className={`inline-flex p-3 ${achievement.color} text-background mb-4`}>
                  <achievement.icon size={24} />
                </div>

                <h3 className="font-[family-name:var(--font-display)] text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-sm text-primary font-bold mb-3">
                  {achievement.organization}
                </p>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
