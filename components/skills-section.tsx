"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  { name: "C", color: "bg-primary" },
  { name: "JAVA", color: "bg-accent" },
  { name: "PYTHON", color: "bg-secondary" },
  { name: "HTML/CSS", color: "bg-primary" },
  { name: "JAVASCRIPT", color: "bg-accent" },
  { name: "REACT JS", color: "bg-secondary" },
  { name: "NODE.JS", color: "bg-primary" },
  { name: "SQL", color: "bg-accent" },
  { name: "POSTGRESQL", color: "bg-secondary" },
  { name: "FIREBASE", color: "bg-primary" },
  { name: "AWS", color: "bg-accent" },
  { name: "GIT", color: "bg-secondary" },
  { name: "N8N", color: "bg-primary" },
  { name: "REST APIS", color: "bg-accent" },
  { name: "FLUTTER", color: "bg-secondary" },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      {/* Section header */}
      <div className="border-y-4 border-primary bg-primary py-4 mb-16">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl text-primary-foreground"
          >
            TECH ARSENAL!
          </motion.h2>
          <span className="text-primary-foreground font-mono text-sm hidden sm:block">MY CHAOTIC WEB SLINGER TOOLKIT</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Speech bubble style skills */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Skills as speech bubbles floating around */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                animate={isInView ? { 
                  opacity: 1, 
                  scale: 1, 
                  rotate: (index % 3 - 1) * 3 
                } : {}}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 0,
                  transition: { duration: 0.2 }
                }}
                className="relative group cursor-pointer"
              >
                {/* Speech bubble */}
                <div className={`${skill.color} text-background px-4 py-3 border-3 border-background relative`}
                  style={{ 
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 50% 100%, 50% 75%, 0% 75%)",
                    paddingBottom: "2rem"
                  }}
                >
                  <span className="font-[family-name:var(--font-display)] text-sm sm:text-base whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
                
                {/* Connecting line */}
                <div className="absolute -bottom-2 left-1/2 w-0.5 h-4 bg-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          {/* Center decoration - wire connections */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M10,50 Q25,20 50,50 T90,50" stroke="#39ff14" strokeWidth="0.2" fill="none" strokeDasharray="2,2" />
              <path d="M10,30 Q40,60 90,30" stroke="#00d4ff" strokeWidth="0.2" fill="none" strokeDasharray="2,2" />
              <path d="M10,70 Q60,40 90,70" stroke="#ff3864" strokeWidth="0.2" fill="none" strokeDasharray="2,2" />
            </svg>
          </div>
        </motion.div>

        {/* Floating connection button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-16"
        >
          <a href="#contact" className="brutal-btn text-xl font-[family-name:var(--font-display)]">
            {"LET'S CONNECT"}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
