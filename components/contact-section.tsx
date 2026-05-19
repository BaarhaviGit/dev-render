"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, Linkedin, Github, Send, Twitter, Coffee, Heart, Sparkles } from "lucide-react"
import Image from "next/image"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
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

  const socials = [
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/baarhavi-m-d" },
    { icon: Github, label: "Github", href: "https://github.com/BaarhaviGit" },
    { icon: Twitter, label: "X (Twitter)", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:baarhavimathesh11@gmail.com" },
  ]

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      {/* Section header */}
      <div className="border-y-4 border-primary bg-muted py-4 mb-16">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl text-primary neon-text"
          >
            {"LET'S CONNECT"}
          </motion.h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Wanted Poster Style Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="wanted-poster p-8 text-background">
              <div className="text-center mb-4">
                <span className="text-xs text-background/60 font-mono">BOUNTY NO. 0718</span>
              </div>
              
              <h3 className="font-[family-name:var(--font-display)] text-5xl text-center text-background mb-6">
                WANTED
              </h3>
              
              <p className="text-center text-background/70 font-[family-name:var(--font-display)] text-xl mb-6">
                FOR BUILDING COOL STUFFS
              </p>

              {/* Portrait */}
              <div className="relative w-48 h-48 mx-auto mb-6 border-4 border-background/30 overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2010.59.27%20AM-MKUSikgWOKlgdBdx4EJqpUCaLz07ZH.jpeg"
                  alt="Baarhavi M D"
                  fill
                  className="object-cover grayscale"
                />
              </div>

              <div className="text-center mb-6">
                <h4 className="font-[family-name:var(--font-display)] text-2xl text-background">
                  REWARD
                </h4>
                <div className="flex justify-center gap-3 mt-3">
                  {[
                    { icon: Coffee, label: "COFFEE" },
                    { icon: Heart, label: "LOVE" },
                    { icon: Sparkles, label: "COLLABORATION" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-1 bg-background/20 px-3 py-1 text-xs">
                      <item.icon className="w-3 h-3" />
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="comic-border bg-card p-8">
              <h3 className="font-[family-name:var(--font-display)] text-2xl text-primary mb-2">
                DROP ME A LINE ON THE PROXY TRAIL
              </h3>
              
              {/* Social buttons */}
              <div className="flex flex-wrap gap-2 mb-8">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-btn text-xs flex items-center gap-2 py-2"
                  >
                    <social.icon className="w-4 h-4" />
                    {social.label}
                  </a>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-[family-name:var(--font-display)] text-sm text-primary mb-2">
                    ALIAS
                  </label>
                  <input
                    type="text"
                    value={formState.alias}
                    onChange={(e) => setFormState({ ...formState, alias: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-muted border-2 border-primary text-foreground focus:outline-none focus:bg-muted/80 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block font-[family-name:var(--font-display)] text-sm text-primary mb-2">
                    CONTACT SIGNAL
                  </label>
                  <input
                    type="text"
                    value={formState.contact}
                    onChange={(e) => setFormState({ ...formState, contact: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-muted border-2 border-primary text-foreground focus:outline-none focus:bg-muted/80 transition-colors"
                    placeholder="Email or phone"
                  />
                </div>

                <div>
                  <label className="block font-[family-name:var(--font-display)] text-sm text-primary mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-muted border-2 border-primary text-foreground focus:outline-none focus:bg-muted/80 transition-colors resize-none"
                    placeholder="What's the mission?"
                  />
                </div>

                <button
                  type="submit"
                  className="brutal-btn w-full flex items-center justify-center gap-2 text-lg font-[family-name:var(--font-display)]"
                >
                  <Send className="w-5 h-5" />
                  SEND VIA GMAIL
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
