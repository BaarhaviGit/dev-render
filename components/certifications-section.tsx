"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award } from "lucide-react"

const certifications = [
  {
    title: "AWS CERTIFIED CLOUD PRACTITIONER",
    issuer: "Amazon Web Services",
    description: "Fundamental understanding of AWS Cloud concepts, services, security, and pricing.",
    color: "bg-accent",
  },
  {
    title: "PRASKLA HACKATHON",
    issuer: "Praskla Technology",
    description: "Recognition for outstanding performance and innovative problem-solving.",
    color: "bg-secondary",
  },
  {
    title: "TNWISE HACKATHON",
    issuer: "TNWISE",
    description: "Participated and showcased innovative solutions in the state-level hackathon.",
    color: "bg-primary",
  },
]

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      {/* Section header */}
      <div className="border-y-4 border-primary bg-muted py-4 mb-16">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl text-primary neon-text"
          >
            CERTIFICATIONS
          </motion.h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30, rotate: -5 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: (index - 1) * 2 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="comic-border bg-card overflow-hidden group"
            >
              <div className={`h-2 ${cert.color}`} />
              <div className="p-6">
                <div className={`inline-flex p-3 ${cert.color} text-background mb-4`}>
                  <Award size={24} />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-primary mb-3 font-bold">
                  {cert.issuer}
                </p>
                <p className="text-sm text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
