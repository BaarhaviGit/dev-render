"use client"

import { motion } from "framer-motion"
import { Github, GitPullRequest, Bug, Sparkles, ArrowUpRight } from "lucide-react"

const repos = [
  {
    name: "FlowHub",
    desc: "Marketplace for reusable n8n automations",
    url: "https://github.com/BaarhaviGit/FlowHub",
  },
  {
    name: "Venom_Arena",
    desc: "Realtime multiplayer snake · Node · Docker · k8s · Redis",
    url: "https://github.com/BaarhaviGit/Venom_Arena",
  },
  {
    name: "Debug-Mate",
    desc: "AI playground that catches and fixes runtime errors",
    url: "https://github.com/BaarhaviGit/Debug-Mate",
  },
  {
    name: "Anti-Yap",
    desc: "Full-stack tab-session & Zen browser extension",
    url: "https://github.com/BaarhaviGit/Anti-Yap",
  },
]

const actions = [
  {
    icon: Bug,
    title: "Report a bug",
    desc: "Spotted something broken on this site or a repo?",
    url: "https://github.com/BaarhaviGit/FlowHub/issues",
  },
  {
    icon: Sparkles,
    title: "Request a feature",
    desc: "Got an idea that would make a project better?",
    url: "https://github.com/BaarhaviGit/FlowHub/issues",
  },
  {
    icon: GitPullRequest,
    title: "Submit a PR",
    desc: "First contribution or fiftieth — all are welcome.",
    url: "https://github.com/BaarhaviGit",
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t-2 border-foreground/80 mt-8">
      {/* CONTRIBUTE band */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="border-2 border-foreground/80 corner-marks p-8 md:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="tech-tag text-[10px]">OSS · OPEN SOURCE</span>
                  <span className="w-2 h-2 rounded-full bg-accent animate-status-pulse" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    contributors wanted
                  </span>
                </div>

                <h3 className="font-display text-3xl md:text-4xl font-bold uppercase leading-tight mb-4">
                  Built in the open.
                  <br />
                  <span className="text-primary">Let&apos;s build it together.</span>
                </h3>

                <p className="text-muted-foreground leading-relaxed max-w-lg mb-6">
                  This portfolio and my side-projects are open source. Found a bug, want a
                  feature, or just curious how something works? Fork the repo, raise an
                  issue, or open a pull request — every contribution counts, big or small.
                </p>

                <a
                  href="https://github.com/BaarhaviGit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white font-mono text-xs uppercase tracking-widest px-5 py-3 hover:bg-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Explore my GitHub
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* contribution actions */}
              <div className="grid sm:grid-cols-3 gap-3">
                {actions.map((a, i) => (
                  <motion.a
                    key={a.title}
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="group border border-border bg-background p-5 flex flex-col hover:border-primary hover:shadow-[0_6px_24px_-12px_rgba(31,91,214,0.5)] transition-all"
                  >
                    <a.icon className="w-6 h-6 text-primary mb-3" />
                    <p className="font-display font-semibold uppercase text-sm mb-1.5 group-hover:text-primary transition-colors">
                      {a.title}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-grow">
                      {a.desc}
                    </p>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-primary flex items-center gap-1">
                      open ↗
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* repos strip */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary border border-primary px-2 py-1">
              21 public repos
            </span>
            <span className="h-px flex-1 bg-border" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              recently shipped
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
                className="group border border-border bg-white p-4 hover:border-primary transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="font-mono text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                    {repo.name}
                  </p>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  {repo.desc}
                </p>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-1 group-hover:text-primary transition-colors">
                  open source <ArrowUpRight className="w-3 h-3" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-semibold tracking-widest text-foreground">
                BAARHAVI<span className="text-primary">_M_D</span>
              </span>
              <span className="tech-tag text-[9px]">v4.0 · blueprint</span>
            </div>

            <div className="flex items-center gap-2">
              {[
                { icon: Github, href: "https://github.com/BaarhaviGit", label: "GitHub" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                  aria-label={s.label}
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>

            <p className="font-mono text-xs text-muted-foreground">
              © {currentYear} Baarhavi M D · built in the open · made with Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}