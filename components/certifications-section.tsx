"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const certifications = [
  {
    code: "CRED-01",
    title: "AWS CERTIFIED CLOUD PRACTITIONER",
    issuer: "Amazon Web Services",
    description: "Fundamental understanding of AWS Cloud concepts, services, security, and pricing.",
    tag: "ISSUED",
  },
  {
    code: "CRED-02",
    title: "PRASKLA HACKATHON",
    issuer: "Praskla Technology",
    description: "Recognition for outstanding performance and innovative problem-solving.",
    tag: "AWARDED",
  },
  {
    code: "CRED-03",
    title: "TNWISE HACKATHON",
    issuer: "TNWISE",
    description: "Participated and showcased innovative solutions in the state-level hackathon.",
    tag: "AWARDED",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader index="06" title="CREDENTIALS" subtitle="certificates · verification registry" />

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="draft-card group relative overflow-hidden hover:border-primary transition-colors"
            >
              {/* top rule */}
              <div className="h-1 bg-primary" />

              <div className="p-6">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 border border-primary text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <Award size={20} />
                  </div>
                  {/* verification stamp */}
                  <div className="rotate-6 border-2 border-secondary/70 text-secondary font-mono text-[9px] uppercase tracking-widest px-2 py-1 rounded-sm">
                    ● {cert.tag}
                  </div>
                </div>

                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  {cert.code} · certif.
                </p>
                <h3 className="font-display text-lg font-bold uppercase leading-tight mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="font-mono text-xs text-primary font-semibold uppercase tracking-wide mb-3">
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