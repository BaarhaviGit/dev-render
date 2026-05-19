"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", level: 85 },
      { name: "Java", level: 80 },
      { name: "Python", level: 90 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 88 },
      { name: "React JS", level: 85 },
      { name: "Node.js", level: 82 },
    ],
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "SQL", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Firebase", level: 78 },
      { name: "AWS DynamoDB", level: 75 },
      { name: "AWS Cognito", level: 72 },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", level: 90 },
      { name: "REST APIs", level: 88 },
      { name: "n8n", level: 75 },
    ],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
              className="glass rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-all"
            >
              <h3 className="text-lg font-semibold mb-6 text-primary">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.15 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-6">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "Next.js", "Node.js", "Python", "AWS", "PostgreSQL", "Firebase", "Git", "REST APIs", "Flutter"].map(
              (tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 glass rounded-full text-sm font-mono text-primary hover:bg-primary/20 transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
