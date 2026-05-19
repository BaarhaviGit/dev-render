"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Trophy, Users, Briefcase } from "lucide-react"

const achievements = [
  {
    icon: Briefcase,
    title: "Technical Q&A Round",
    organization: "GKT Bangalore",
    description:
      "Successfully cleared the technical question and answer round, demonstrating strong problem-solving abilities and technical knowledge.",
    highlight: "Technical Excellence",
  },
  {
    icon: Trophy,
    title: "Internship Selection",
    organization: "Praskla Technology",
    description:
      "Selected for a competitive 8-month software engineering internship, working on real-world projects and scalable applications.",
    highlight: "Professional Growth",
  },
  {
    icon: Users,
    title: "Vice President",
    organization: "CSE Tech Club, K.S.R College",
    description:
      "Elected as Vice President of the Computer Science Engineering Technical Club, leading initiatives and organizing tech events.",
    highlight: "Leadership",
  },
]

export function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="glass rounded-2xl p-6 h-full hover:shadow-lg hover:shadow-primary/20 transition-all">
                {/* Highlight badge */}
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full">
                    {achievement.highlight}
                  </span>
                </div>

                <div className="mt-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <achievement.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-sm text-primary/80 mb-3">
                  {achievement.organization}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
