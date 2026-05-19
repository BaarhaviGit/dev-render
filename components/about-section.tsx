"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Code, Cloud, Shield } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.E Computer Science Engineering (2023-2027)",
      detail: "K.S.R. College of Engineering | CGPA: 8.4",
    },
    {
      icon: Code,
      title: "Development",
      description: "Full Stack Web Development",
      detail: "React, Node.js, Python, and modern frameworks",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "AWS Certified Cloud Practitioner",
      detail: "Building scalable cloud-native applications",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Cybersecurity Enthusiast",
      detail: "Vulnerability assessment & network security",
    },
  ]

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                I&apos;m a passionate <span className="text-foreground font-medium">Computer Science Engineering student</span> with 
                a deep interest in building scalable applications and exploring the realms of 
                <span className="text-primary"> cloud computing</span>, <span className="text-secondary">DevOps</span>, and 
                <span className="text-primary"> cybersecurity</span>.
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
              
              {/* Terminal-style decoration */}
              <div className="mt-6 font-mono text-sm">
                <span className="text-muted-foreground">$</span>{" "}
                <span className="text-primary">const</span>{" "}
                <span className="text-foreground">passion</span>{" "}
                <span className="text-muted-foreground">=</span>{" "}
                <span className="text-secondary">&quot;Building the future&quot;</span>
                <span className="animate-pulse text-primary">_</span>
              </div>
            </div>
          </motion.div>

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
                className="glass rounded-xl p-5 hover:bg-white/10 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{item.description}</p>
                    <p className="text-xs text-primary/80">{item.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
