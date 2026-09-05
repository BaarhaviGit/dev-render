"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Globe, 
  ShieldCheck, 
  Server, 
  Database, 
  ArrowRight, 
  Cpu, 
  Zap, 
  Lock, 
  Layers, 
  Activity,
  CheckCircle2,
  Sparkles
} from "lucide-react"

interface ArchitectureTier {
  id: string
  name: string
  category: string
  icon: any
  description: string
  tech: string[]
  metrics: { label: string; value: string }[]
  role: string
  accent: string
}

const tiers: ArchitectureTier[] = [
  {
    id: "client",
    name: "Client & Presentation",
    category: "Layer 01 · Ingress",
    icon: Globe,
    description: "Responsive Next.js React interfaces and Flutter mobile client applications optimized for performance, SEO, and client-side caching.",
    tech: ["Next.js 15", "React 19", "Tailwind CSS", "Flutter", "TypeScript"],
    metrics: [
      { label: "Rendering", value: "SSR / SSG" },
      { label: "Core Web Vitals", value: "95+ Score" },
      { label: "Protocol", value: "HTTP/2 & HTTPS" },
    ],
    role: "User-facing responsive clients with optimistic UI states and sub-100ms render speeds.",
    accent: "from-emerald-500/20 to-teal-500/10 border-emerald-500/40 text-emerald-400",
  },
  {
    id: "gateway",
    name: "Edge Proxy & Gateways",
    category: "Layer 02 · Routing",
    icon: ShieldCheck,
    description: "Global edge CDN routing, SSL/TLS handshake, rate limiting, and webhook ingest pipelines via n8n automation handlers.",
    tech: ["Vercel Edge", "Cloudflare CDN", "n8n Webhooks", "RESTful Routes"],
    metrics: [
      { label: "Edge Latency", value: "<25ms" },
      { label: "Security", value: "TLS 1.3 / CORS" },
      { label: "Protection", value: "Rate Limiting" },
    ],
    role: "Secures entry points, validates request tokens, and accelerates global content delivery.",
    accent: "from-cyan-500/20 to-blue-500/10 border-cyan-500/40 text-cyan-400",
  },
  {
    id: "backend",
    name: "Application & Microservices",
    category: "Layer 03 · Execution",
    icon: Server,
    description: "Scalable Node.js & Express REST APIs and Python microservices executing authentication, transaction workflows, and data orchestration.",
    tech: ["Node.js", "Express.js", "Python", "JWT Auth", "REST APIs"],
    metrics: [
      { label: "Auth Flow", value: "JWT + Bearer" },
      { label: "Throughput", value: "High Concurrency" },
      { label: "Architecture", value: "Modular APIs" },
    ],
    role: "Executes business logic, authenticates requests, processes payments, and orchestrates workflows.",
    accent: "from-blue-500/20 to-indigo-500/10 border-blue-500/40 text-blue-400",
  },
  {
    id: "data",
    name: "Databases & AWS Cloud",
    category: "Layer 04 · Persistence",
    icon: Database,
    description: "Relational PostgreSQL & document MongoDB databases with AWS cloud services (DynamoDB, Cognito, S3) ensuring ACID compliance and high availability.",
    tech: ["PostgreSQL", "MongoDB", "AWS DynamoDB", "AWS Cognito", "Firebase"],
    metrics: [
      { label: "Storage", value: "Relational & NoSQL" },
      { label: "AWS Identity", value: "Cognito Auth" },
      { label: "Integrity", value: "ACID Guaranteed" },
    ],
    role: "Stores persistent records, schedules placement assessments, tracks financial ledgers, and manages user state.",
    accent: "from-purple-500/20 to-pink-500/10 border-purple-500/40 text-purple-400",
  },
]

export function ArchitectureSection() {
  const [selectedTier, setSelectedTier] = useState<ArchitectureTier>(tiers[0])

  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-[#07090e]/80 border-y border-white/5">
      {/* Background visual accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs text-emerald-400 border-emerald-500/30 mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span className="font-mono uppercase tracking-wider font-semibold">Engineering Signature</span>
          </div>

          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            How I Architect <span className="gradient-text">Scalable Systems</span>
          </h2>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            A blueprint of how I design, deploy, and scale web applications from client interface down to distributed cloud databases. Click any layer below to inspect its technical implementation.
          </p>
        </div>

        {/* Interactive Architecture Flow Diagram */}
        <div className="relative mb-12">
          {/* Animated Connecting SVG Pipe (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-0.5 pointer-events-none z-0">
            {/* Base line */}
            <div className="w-full h-full bg-white/10" />
            {/* Animated Pulses */}
            <motion.div
              animate={{ x: ["0%", "100%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 -translate-y-1/2 w-20 h-1 rounded-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent blur-sm"
            />
            <motion.div
              animate={{ x: ["0%", "100%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 1.75 }}
              className="absolute top-1/2 -translate-y-1/2 w-20 h-1 rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-sm"
            />
          </div>

          {/* 4 Architecture Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {tiers.map((tier, index) => {
              const isSelected = selectedTier.id === tier.id
              const Icon = tier.icon

              return (
                <button
                  key={tier.id}
                  onClick={() => setSelectedTier(tier)}
                  className={`text-left p-5 rounded-xl border transition-all duration-300 relative group ${
                    isSelected
                      ? `glass-panel bg-[#0e1628] border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/30`
                      : "glass-card hover:border-white/20 hover:bg-[#0b101c]"
                  }`}
                >
                  {/* Top Status & Node Number */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                      {tier.category}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${isSelected ? "bg-emerald-400 animate-pulse" : "bg-white/20"}`} />
                  </div>

                  {/* Node Icon */}
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3.5 bg-gradient-to-br ${tier.accent}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title & Role */}
                  <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {tier.role}
                  </p>

                  {/* Active Selector Indicator */}
                  {isSelected && (
                    <motion.div
                      layoutId="tierIndicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Detailed Inspection Panel for Selected Layer */}
        <motion.div
          key={selectedTier.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10 bg-[#0c1220]/90 shadow-2xl"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Description (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${selectedTier.accent}`}>
                  <selectedTier.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">
                    {selectedTier.category}
                  </span>
                  <h4 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-white">
                    {selectedTier.name}
                  </h4>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {selectedTier.description}
              </p>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block mb-2 font-medium">
                  Technologies Utilized
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedTier.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Technical Specs Matrix (5 Cols) */}
            <div className="lg:col-span-5 bg-black/40 p-5 rounded-xl border border-white/8 space-y-3.5">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-xs font-mono font-medium text-white flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  Engineering Spec Metrics
                </span>
                <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                  OPTIMIZED
                </span>
              </div>

              <div className="space-y-2.5">
                {selectedTier.metrics.map((metric) => (
                  <div key={metric.label} className="flex items-center justify-between text-xs py-1">
                    <span className="text-muted-foreground font-mono">{metric.label}</span>
                    <span className="font-mono font-semibold text-white bg-white/5 px-2 py-0.5 rounded border border-white/5">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-white/5 text-[11px] text-muted-foreground flex items-center gap-1.5 font-mono">
                <Lock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Zero-Trust Architecture · Audited Deployment</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
