"use client"

import { useEffect, useState } from "react"

export function AmbientGlow() {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0
    setIsTouchDevice(isTouch)
    if (isTouch) return

    let rafId: number
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      })
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  if (isTouchDevice || !mousePosition) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
      style={{
        background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.04), rgba(6, 182, 212, 0.02) 40%, transparent 80%)`,
      }}
    />
  )
}
