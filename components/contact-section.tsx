"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setFormState({ name: "", email: "", message: "" })
    alert("Thank you for your message! I'll get back to you soon.")
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "baarhavimathesh11@gmail.com",
      href: "mailto:baarhavimathesh11@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6369163774",
      href: "tel:+916369163774",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, projects, or just having a chat about technology. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/BaarhaviGit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-white/10 transition-colors group"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="https://linkedin.com/in/baarhavi-m-d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-white/10 transition-colors group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>

              {/* Code snippet decoration */}
              <div className="mt-8 p-4 bg-muted/30 rounded-lg font-mono text-sm">
                <p className="text-muted-foreground">
                  <span className="text-primary">const</span>{" "}
                  <span className="text-foreground">developer</span> = {"{"}
                </p>
                <p className="pl-4 text-muted-foreground">
                  <span className="text-secondary">available</span>:{" "}
                  <span className="text-green-400">true</span>,
                </p>
                <p className="pl-4 text-muted-foreground">
                  <span className="text-secondary">openToWork</span>:{" "}
                  <span className="text-green-400">true</span>
                </p>
                <p className="text-muted-foreground">{"}"}</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
