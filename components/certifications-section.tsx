"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, ExternalLink } from "lucide-react"

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    description: "Fundamental understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.",
    icon: "☁️",
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Praskla Technology Hackathon",
    issuer: "Praskla Technology",
    description: "Recognition for outstanding performance and innovative problem-solving in the company hackathon.",
    icon: "🏆",
    color: "from-primary to-secondary",
  },
  {
    title: "TNWISE Hackathon",
    issuer: "TNWISE",
    description: "Participated and showcased innovative solutions in the Tamil Nadu state-level hackathon competition.",
    icon: "💡",
    color: "from-secondary to-blue-500",
  },
]

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass rounded-2xl overflow-hidden group hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              <div className={`h-1.5 bg-gradient-to-r ${cert.color}`} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{cert.icon}</div>
                  <div className="p-2 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={16} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-primary/80 mb-3 flex items-center gap-2">
                  <Award size={14} />
                  {cert.issuer}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
