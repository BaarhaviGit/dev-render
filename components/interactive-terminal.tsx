"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Terminal, Send, CornerDownLeft, Sparkles, Copy, Check } from "lucide-react"

interface CommandHistory {
  command: string
  output: React.ReactNode
  timestamp: string
}

export function InteractiveTerminal() {
  const [inputVal, setInputVal] = useState("")
  const [copied, setCopied] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalEndRef = useRef<HTMLDivElement>(null)

  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "whoami",
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-emerald-400 font-bold">Baarhavi M D</p>
          <p>Full Stack Software Engineer & Cloud Practitioner</p>
          <p className="text-muted-foreground text-xs">
            B.E. Computer Science and Engineering · K.S.R. College of Engineering (CGPA: 8.5)
          </p>
        </div>
      ),
      timestamp: "10:00:01",
    },
    {
      command: "status",
      output: (
        <div className="flex items-center gap-2 text-emerald-400 font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>AVAILABLE FOR OPPORTUNITIES (Full Stack / SWE / Cloud Roles)</span>
        </div>
      ),
      timestamp: "10:00:03",
    },
  ])

  const executeCommand = (cmdText: string) => {
    const cleanCmd = cmdText.trim().toLowerCase()
    if (!cleanCmd) return

    let outputNode: React.ReactNode = null
    const timestamp = new Date().toLocaleTimeString()

    switch (cleanCmd) {
      case "whoami":
        outputNode = (
          <div className="space-y-1 text-slate-300">
            <p className="text-emerald-400 font-bold">Baarhavi M D</p>
            <p>Full Stack Software Engineer & Cloud DevOps Enthusiast</p>
            <p className="text-muted-foreground text-xs">
              Focus: Scalable Backend Services, Distributed Databases, React/Next.js Frontends.
            </p>
          </div>
        )
        break

      case "skills":
        outputNode = (
          <div className="space-y-1.5 text-slate-300 text-xs sm:text-sm">
            <p><span className="text-emerald-400 font-mono">Frontend:</span> React.js, Next.js 15, Flutter, Tailwind CSS, JavaScript, HTML5/CSS3</p>
            <p><span className="text-cyan-400 font-mono">Backend:</span> Node.js, Express.js, REST APIs, Python, Java, C</p>
            <p><span className="text-blue-400 font-mono">Databases:</span> PostgreSQL, MongoDB, SQL, Firebase, SQLite</p>
            <p><span className="text-purple-400 font-mono">Cloud & DevOps:</span> AWS (DynamoDB, Cognito), Vercel, Netlify</p>
            <p><span className="text-amber-400 font-mono">Automation:</span> Git, GitHub, n8n Pipelines, Webhooks</p>
          </div>
        )
        break

      case "status":
        outputNode = (
          <div className="flex items-center gap-2 text-emerald-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>AVAILABLE FOR OPPORTUNITIES · Open to Full-Time, Remote & SWE Internships</span>
          </div>
        )
        break

      case "projects":
        outputNode = (
          <div className="space-y-2 text-xs sm:text-sm">
            <p className="text-slate-300 font-semibold">Top Verified Projects:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-400">
              <div>• <span className="text-white font-medium">PlaciPY:</span> Placement Training System (AWS, React, Node)</div>
              <div>• <span className="text-white font-medium">FlowHub:</span> Automation Hub for n8n Workflows</div>
              <div>• <span className="text-white font-medium">SmartSplit AI:</span> Fintech Group Expense Ledger</div>
              <div>• <span className="text-white font-medium">DigitalX:</span> Landing Page (Praskla Internship)</div>
              <div>• <span className="text-white font-medium">Honeybee Learning:</span> Education Platform (MongoDB)</div>
            </div>
            <p className="text-muted-foreground text-[11px] pt-1 font-mono">Run #projects link or check Projects section.</p>
          </div>
        )
        break

      case "experience":
        outputNode = (
          <div className="space-y-1.5 text-xs sm:text-sm text-slate-300">
            <p>
              <span className="text-emerald-400 font-bold">1. Software Engineering Intern (8 Months)</span> @ Praskla Technology
              <br />
              <span className="text-muted-foreground text-xs">Worked on REST APIs, auth workflows, and PostgreSQL database integration.</span>
            </p>
            <p>
              <span className="text-cyan-400 font-bold">2. Cyber Security Intern</span> @ Zero Touch, Hyderabad
              <br />
              <span className="text-muted-foreground text-xs">Vulnerability assessment, network security, and threat analysis.</span>
            </p>
          </div>
        )
        break

      case "education":
        outputNode = (
          <div className="space-y-1 text-xs sm:text-sm text-slate-300">
            <p className="text-white font-bold">B.E. Computer Science and Engineering (2023 - 2027)</p>
            <p className="text-emerald-400">K.S.R. College of Engineering · Current CGPA: 8.5</p>
            <p className="text-muted-foreground text-xs">HSC: 88% | SSLC: 74%</p>
          </div>
        )
        break

      case "contact":
        outputNode = (
          <div className="space-y-1 text-xs sm:text-sm text-slate-300">
            <p>Email: <a href="mailto:baarhavimathesh11@gmail.com" className="text-emerald-400 underline">baarhavimathesh11@gmail.com</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/baarhavi-m-d" target="_blank" className="text-cyan-400 underline">linkedin.com/in/baarhavi-m-d</a></p>
            <p>GitHub: <a href="https://github.com/BaarhaviGit" target="_blank" className="text-blue-400 underline">github.com/BaarhaviGit</a></p>
            <p>X: <a href="https://x.com/Baaruu_11" target="_blank" className="text-slate-400 underline">@Baaruu_11</a></p>
          </div>
        )
        break

      case "clear":
        setHistory([])
        setInputVal("")
        return

      case "help":
      default:
        outputNode = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-muted-foreground">Available commands:</p>
            <p><span className="text-emerald-400 font-mono">whoami</span> - Developer profile summary</p>
            <p><span className="text-emerald-400 font-mono">skills</span> - Breakdown of engineering stack</p>
            <p><span className="text-emerald-400 font-mono">status</span> - Current hiring availability</p>
            <p><span className="text-emerald-400 font-mono">projects</span> - Shipped applications list</p>
            <p><span className="text-emerald-400 font-mono">experience</span> - Internship track record</p>
            <p><span className="text-emerald-400 font-mono">education</span> - University degree & CGPA</p>
            <p><span className="text-emerald-400 font-mono">contact</span> - Direct channels to get in touch</p>
            <p><span className="text-emerald-400 font-mono">clear</span> - Clear console output</p>
          </div>
        )
        break
    }

    setHistory((prev) => [...prev, { command: cmdText, output: outputNode, timestamp }])
    setInputVal("")
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(inputVal)
    }
  }

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [history])

  const copyEmail = () => {
    navigator.clipboard.writeText("baarhavimathesh11@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const quickChips = ["whoami", "skills", "status", "projects", "experience", "contact"]

  return (
    <section id="terminal" className="py-20 relative overflow-hidden bg-[#07090e]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs text-emerald-400 border-emerald-500/30 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span className="font-mono uppercase tracking-wider font-semibold">Interactive Shell</span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Developer <span className="gradient-text">Console</span>
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm mt-1">
            Query my credentials, architecture experience, and availability directly from the CLI.
          </p>
        </div>

        {/* Quick Command Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <span className="text-[11px] font-mono text-muted-foreground mr-1">Quick Run:</span>
          {quickChips.map((chip) => (
            <button
              key={chip}
              onClick={() => executeCommand(chip)}
              className="text-xs font-mono px-3 py-1 rounded-lg glass-panel text-emerald-400 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-colors border-white/10"
            >
              ${" "}{chip}
            </button>
          ))}
        </div>

        {/* Terminal Window Box */}
        <div 
          onClick={() => inputRef.current?.focus()}
          className="rounded-2xl glass-panel border border-white/15 bg-[#090d17]/95 shadow-2xl overflow-hidden cursor-text"
        >
          {/* Top Window Chrome Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">
                baarhavi@developer-box: ~ (zsh)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  copyEmail()
                }}
                className="flex items-center gap-1 text-[11px] font-mono text-muted-foreground hover:text-emerald-400 transition-colors px-2 py-0.5 rounded border border-white/5 bg-white/5"
                title="Copy Email"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? "Copied" : "Copy Email"}</span>
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-5 font-mono text-xs sm:text-sm space-y-4 max-h-[380px] overflow-y-auto custom-scrollbar">
            {/* Initial Welcome */}
            <div className="text-slate-400 text-xs pb-1 border-b border-white/5">
              <span>Type </span>
              <span className="text-emerald-400 font-semibold">help</span>
              <span> to inspect available commands or click the chips above.</span>
            </div>

            {/* History Loop */}
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-emerald-400 font-bold">➜</span>
                  <span className="text-cyan-400">baarhavi@dev</span>
                  <span className="text-slate-500">git:(main)</span>
                  <span className="text-white font-semibold">${" "}{item.command}</span>
                </div>
                <div className="pl-4 border-l border-emerald-500/20 py-0.5">
                  {item.output}
                </div>
              </div>
            ))}

            {/* Active Input Line */}
            <div className="flex items-center gap-2 text-muted-foreground pt-1">
              <span className="text-emerald-400 font-bold">➜</span>
              <span className="text-cyan-400">baarhavi@dev</span>
              <span className="text-slate-500">git:(main)</span>
              <span className="text-white">$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type command (e.g. skills, status, projects)..."
                className="flex-grow bg-transparent text-white font-mono text-xs sm:text-sm focus:outline-none placeholder:text-muted-foreground/40"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                onClick={() => executeCommand(inputVal)}
                className="text-muted-foreground hover:text-emerald-400 transition-colors p-1"
                aria-label="Run command"
              >
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </div>

            <div ref={terminalEndRef} />
          </div>
        </div>
      </div>
    </section>
  )
}
