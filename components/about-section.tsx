"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap } from "lucide-react"

const highlights = [
  {
    icon: GraduationCap,
    title: "B.E CSE (2023-2027)",
    description: "K.S.R. College of Engineering",
    detail: "CGPA: 8.5 (5th Semester)",
    color: "bg-primary",
  },
  {
    icon: GraduationCap,
    title: "HSC (2023)",
    description: "Saraswathi Matric Hr. Sec. School",
    detail: "Score: 88%",
    color: "bg-secondary",
  },
  {
    icon: GraduationCap,
    title: "SSLC (2021)",
    description: "G.E.T. School of Excellence",
    detail: "Score: 74%",
    color: "bg-accent",
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
                I am an <span className="text-primary font-bold">Aspiring Full Stack Developer</span> with expertise in 
                <span className="text-primary font-bold"> Cloud</span> and <span className="text-secondary font-bold">DevOps</span>.
              </p>
              <div className="font-mono text-muted-foreground space-y-4">
                <p>
                  I am highly focused on building scalable, secure, and high-performance applications through modern development and deployment practices.
                </p>
                <p>
                  Currently pursuing my B.E in Computer Science and Engineering at K.S.R. College of Engineering, actively seeking opportunities to apply my expertise in real-world software engineering environments.
                </p>
              </div>
              
              {/* Terminal decoration */}
              <div className="mt-8 bg-background border-2 border-primary p-4 font-mono text-sm">
                <div className="flex items-center gap-2 mb-2 border-b border-muted pb-2">
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-muted-foreground text-xs ml-2">terminal</span>
                </div>
                <span className="text-primary">$</span>{" "}
                <span className="text-accent">echo</span>{" "}
                <span className="text-foreground">$OBJECTIVE</span>{" "}
                <br />
                <span className="text-secondary">"Build scalable, secure, and high-performance apps."</span>
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
            <div className="col-span-1 sm:col-span-2 mb-2">
              <h3 className="font-[family-name:var(--font-display)] text-2xl text-primary neon-text">EDUCATION</h3>
            </div>
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className={`comic-border bg-card p-5 group hover:bg-muted transition-colors ${index === 0 ? 'sm:col-span-2' : ''}`}
                style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}
              >
                <div className={`inline-flex p-3 ${item.color} text-background mb-3`}>
                  <item.icon size={24} />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-1">{item.description}</p>
                <p className="text-xs text-primary font-bold">{item.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
