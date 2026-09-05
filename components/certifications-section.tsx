"use client"

import { motion } from "framer-motion"
import { Award, Cloud, Terminal, CheckCircle2, ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react"

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    badge: "GLOBAL CLOUD CERTIFICATION",
    description: "Validated foundational knowledge of AWS Cloud architecture, high-availability concepts, core infrastructure (Compute, Storage, Networking, Databases), IAM security policies, and cost optimization.",
    skills: ["AWS Cloud", "IAM Security", "DynamoDB", "Cognito", "Cloud Architecture"],
    verified: true,
    highlight: true,
  },
  {
    title: "Praskla Technology Hackathon",
    issuer: "Praskla Technology",
    badge: "PRODUCT HACKATHON",
    description: "Architected and engineered a comprehensive student hostel accommodation, room allocation, and fee ledger management solution under competitive agile constraints.",
    skills: ["Full Stack", "Database Design", "Agile Sprints", "Product Delivery"],
    verified: true,
    highlight: false,
  },
  {
    title: "TNWISE State Hackathon",
    issuer: "Tamil Nadu State Technical Initiative",
    badge: "STATE-LEVEL COMPETITION",
    description: "Collaborated in an intensive state-level technical hackathon, conceptualizing and rapidly prototyping an end-to-end software solution for real-world problem statements.",
    skills: ["Problem Solving", "Rapid Prototyping", "Team Engineering"],
    verified: true,
    highlight: false,
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#07090e] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs text-emerald-400 border-emerald-500/30 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span className="font-mono uppercase tracking-wider font-semibold">Verified Credentials</span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Certifications & <span className="gradient-text">Hackathons</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-2">
            Industry cloud validation and competitive hackathon engineering awards.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`glass-card rounded-2xl p-6 border flex flex-col justify-between transition-all duration-300 ${
                cert.highlight
                  ? "border-emerald-500/40 bg-[#0c1424] shadow-[0_0_35px_rgba(16,185,129,0.12)]"
                  : "border-white/10 hover:border-emerald-500/30"
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    {cert.badge}
                  </span>
                  {cert.highlight && (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 font-semibold">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Title & Issuer */}
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400 mb-4 font-medium">
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Skills Footer */}
              <div className="pt-4 border-t border-white/5 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground pt-1">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Credential
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
