"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Code, Cloud, Shield } from "lucide-react"

const highlights = [
  {
    icon: GraduationCap,
    title: "EDUCATION",
    description: "B.E Computer Science Engineering (2023-2027)",
    detail: "K.S.R. College of Engineering | CGPA: 8.4",
    color: "bg-primary",
  },
  {
    icon: Code,
    title: "DEVELOPMENT",
    description: "Full Stack Web Development",
    detail: "React, Node.js, Python, and modern frameworks",
    color: "bg-secondary",
  },
  {
    icon: Cloud,
    title: "CLOUD & DEVOPS",
    description: "AWS Certified Cloud Practitioner",
    detail: "Building scalable cloud-native applications",
    color: "bg-accent",
  },
  {
    icon: Shield,
    title: "SECURITY",
    description: "Cybersecurity Enthusiast",
    detail: "Vulnerability assessment & network security",
    color: "bg-primary",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      {/* Section divider */}
      <div className="border-y-4 border-primary bg-muted py-4 mb-16">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl text-primary neon-text"
          >
            ABOUT ME
          </motion.h2>
          <div className="hidden sm:flex gap-2">
            <div className="w-4 h-4 bg-primary" />
            <div className="w-4 h-4 bg-secondary" />
            <div className="w-4 h-4 bg-accent" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="comic-border bg-card p-8 relative">
              {/* Corner decorations */}
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-primary" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-accent" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary" />
              
              <p className="text-foreground text-lg leading-relaxed mb-6">
                {"I'm"} a passionate <span className="text-primary font-bold">Computer Science Engineering student</span> with 
                a deep interest in building scalable applications and exploring the realms of 
                <span className="text-primary font-bold"> cloud computing</span>, <span className="text-secondary font-bold">DevOps</span>, and 
                <span className="text-accent font-bold"> cybersecurity</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Currently pursuing my B.E at K.S.R. College of Engineering with a strong academic 
                record (CGPA: 8.4), I combine theoretical knowledge with practical experience gained 
                through internships and hackathons.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My goal is to create innovative solutions that make a real impact, while continuously 
                learning and adapting to the ever-evolving tech landscape.
              </p>
              
              {/* Terminal decoration */}
              <div className="mt-8 bg-background border-2 border-primary p-4 font-mono text-sm">
                <div className="flex items-center gap-2 mb-2 border-b border-muted pb-2">
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-muted-foreground text-xs ml-2">terminal</span>
                </div>
                <span className="text-primary">$</span>{" "}
                <span className="text-accent">const</span>{" "}
                <span className="text-foreground">passion</span>{" "}
                <span className="text-muted-foreground">=</span>{" "}
                <span className="text-secondary">{'"Building the future"'}</span>
                <span className="animate-pulse text-primary">_</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="comic-border bg-card p-5 group hover:bg-muted transition-colors"
                style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}
              >
                <div className={`inline-flex p-3 ${item.color} text-background mb-3`}>
                  <item.icon size={24} />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-1">{item.description}</p>
                <p className="text-xs text-primary">{item.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
