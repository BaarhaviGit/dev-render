"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Terminal, Twitter, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socials = [
    { icon: Github, href: "https://github.com/BaarhaviGit", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/baarhavi-m-d", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:baarhavimathesh11@gmail.com", label: "Email" },
  ]

  return (
    <footer className="relative border-t-4 border-primary bg-primary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-display)] text-2xl text-primary-foreground mb-2"
          >
            THANKS FOR VISITING!
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-[family-name:var(--font-display)] text-4xl text-primary-foreground mb-6"
          >
            BAARHAVI M D
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground text-primary hover:bg-secondary hover:text-secondary-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm text-primary-foreground/80 flex items-center gap-1"
          >
            © {currentYear} Engineered with{" "}
            <Terminal size={14} className="text-secondary" /> and relentless
            innovation.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
