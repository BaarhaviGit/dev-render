"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-xl font-bold text-gradient mb-2">
              {"<Baarhavi />"}
            </p>
            <p className="text-sm text-muted-foreground">
              Building the future, one line of code at a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/BaarhaviGit"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} className="text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/baarhavi-m-d"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-muted-foreground hover:text-foreground transition-colors" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} Baarhavi M D. Made with{" "}
            <Heart size={14} className="text-red-500 fill-current" /> and lots of
            coffee.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
