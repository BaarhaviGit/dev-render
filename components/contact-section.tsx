"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { 
  Mail, 
  Linkedin, 
  Github, 
  Twitter, 
  Send, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Phone,
  MessageSquare,
  Sparkles,
  MapPin
} from "lucide-react"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    contact: "",
    message: "",
  })
  const [copied, setCopied] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:baarhavimathesh11@gmail.com?subject=Engineering Inquiry from ${encodeURIComponent(formState.name)}&body=${encodeURIComponent(formState.message)}%0A%0AReply Contact: ${encodeURIComponent(formState.contact)}`
    window.location.href = mailtoLink
  }

  const copyEmail = () => {
    navigator.clipboard.writeText("baarhavimathesh11@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const socials = [
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      href: "https://linkedin.com/in/baarhavi-m-d", 
      label: "baarhavi-m-d",
      accent: "hover:text-sky-400 hover:border-sky-500/30"
    },
    { 
      name: "GitHub", 
      icon: Github, 
      href: "https://github.com/BaarhaviGit", 
      label: "BaarhaviGit",
      accent: "hover:text-white hover:border-white/30"
    },
    { 
      name: "X (Twitter)", 
      icon: Twitter, 
      href: "https://x.com/Baaruu_11", 
      label: "@Baaruu_11",
      accent: "hover:text-white hover:border-white/30"
    },
    { 
      name: "Email", 
      icon: Mail, 
      href: "mailto:baarhavimathesh11@gmail.com", 
      label: "baarhavimathesh11@gmail.com",
      accent: "hover:text-emerald-400 hover:border-emerald-500/30"
    },
  ]

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs text-emerald-400 border-emerald-500/30 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="font-mono uppercase tracking-wider font-semibold">Let's Connect</span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Start a <span className="gradient-text">Conversation</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-2">
            Interested in building high-impact software, scalable backends, or cloud systems? Reach out directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Profile Card & Direct Channels (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Executive Status Card */}
            <div className="glass-card rounded-2xl p-6 border-white/10 space-y-5">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-white/15 bg-black/40 flex-shrink-0">
                  <Image
                    src="/hero-image-new.jpg"
                    alt="Baarhavi M D"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white">
                    Baarhavi M D
                  </h3>
                  <p className="text-xs text-muted-foreground font-mono">
                    Full Stack & Cloud Engineer
                  </p>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-mono text-emerald-400 font-medium">
                      Available for Roles
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                  <span>Tamil Nadu, India · Open to Remote & Relocation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="font-mono">+91 6369163774</span>
                </div>
              </div>

              {/* Quick Copy Email Banner */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300 overflow-hidden text-ellipsis">
                  <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="truncate">baarhavimathesh11@gmail.com</span>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-1.5 rounded-lg border border-white/10 text-muted-foreground hover:text-white hover:bg-white/5 transition-colors flex-shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-2 gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass-card p-3.5 rounded-xl border border-white/10 flex items-center justify-between transition-all group ${s.accent}`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <s.icon className="w-4 h-4 text-muted-foreground group-hover:text-inherit transition-colors flex-shrink-0" />
                    <span className="text-xs font-medium text-white group-hover:text-inherit truncate">
                      {s.name}
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-inherit group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Clean Interactive Contact Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel rounded-2xl p-7 sm:p-8 border-white/10 shadow-2xl bg-[#0a0f1d]/90">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-muted-foreground mb-6">
                Fill out the fields below to launch a pre-composed direct communication.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-muted-foreground/40 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-medium">
                    Contact Signal (Email / LinkedIn / Phone)
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.contact}
                    onChange={(e) => setFormState({ ...formState, contact: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-muted-foreground/40 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-medium">
                    Message / Opportunity Scope
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your team, product scope, or potential opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-muted-foreground/40 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all resize-none font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.35)] flex items-center justify-center gap-2 mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Mailto</span>
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
