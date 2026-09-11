import { motion } from "framer-motion"

interface SectionHeaderProps {
  index: string
  title: string
  subtitle?: string
}

export function SectionHeader({ index, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-3">
        <span className="font-mono text-xs text-primary tracking-widest bg-white border border-primary px-2.5 py-1">
          № {index}
        </span>
        <span className="h-px flex-1 bg-border" />
        <span className="hidden md:block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {subtitle ?? "drawing continued"}
        </span>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight"
      >
        {title}
      </motion.h2>
    </div>
  )
}