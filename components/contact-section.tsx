"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Github, Linkedin, Send } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

export function ContactSection() {
  const ref = useRef(null)
  const [formState, setFormState] = useState({
    alias: "",
    contact: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:baarhavimathesh11@gmail.com?subject=Message from ${formState.alias}&body=${formState.message}%0A%0AContact: ${formState.contact}`
    window.location.href = mailtoLink
  }

  const endpoints = [
    { label: "EMAIL", value: "baarhavimathesh11@gmail.com", href: "mailto:baarhavimathesh11@gmail.com" },
    { label: "GITHUB", value: "github.com/BaarhaviGit", href: "https://github.com/BaarhaviGit" },
    { label: "LINKEDIN", value: "in/baarhavi-m-d", href: "https://linkedin.com/in/baarhavi-m-d" },
  ]

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader index="08" title="CONTACT" subtitle="initiate · open a line" />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT — endpoint card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="draft-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-status-pulse" />
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                status · open to opportunities
              </p>
            </div>

            <h3 className="font-display text-2xl font-bold uppercase mb-2">
              Let's build something
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              If you're working on a project, a cloud/DevOps role, or just want to talk tech —
              my inbox is open.
            </p>

            <div className="border border-border divide-y divide-border">
              {endpoints.map((ep) => (
                <a
                  key={ep.label}
                  href={ep.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 hover:bg-muted/60 transition-colors group"
                >
                  <span className="w-9 h-9 border border-primary text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    {ep.label === "EMAIL" ? <Mail size={16} /> : ep.label === "GITHUB" ? <Github size={16} /> : <Linkedin size={16} />}
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {ep.label}
                    </p>
                    <p className="text-sm font-medium text-foreground">{ep.value}</p>
                  </div>
                  <span className="ml-auto text-muted-foreground group-hover:text-primary transition-colors">→</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="draft-card p-8"
          >
            <h3 className="font-display text-2xl font-bold uppercase mb-6">
              Send a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formState.alias}
                  onChange={(e) => setFormState({ ...formState, alias: e.target.value })}
                  required
                  suppressHydrationWarning
                  className="w-full px-4 py-3 bg-white border border-border text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Contact info
                </label>
                <input
                  type="text"
                  value={formState.contact}
                  onChange={(e) => setFormState({ ...formState, contact: e.target.value })}
                  required
                  suppressHydrationWarning
                  className="w-full px-4 py-3 bg-white border border-border text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Email or phone"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  suppressHydrationWarning
                  className="w-full px-4 py-3 bg-white border border-border text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                suppressHydrationWarning
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white font-mono text-xs uppercase tracking-widest px-5 py-3.5 hover:bg-foreground transition-colors"
              >
                <Send className="w-4 h-4" />
                Send via email
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}