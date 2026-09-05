"use client"

import { useEffect } from "react"
import Lenis from "lenis"

export function SmoothScrolling({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Respect user accessibility preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    // Handle hash anchors smoothly
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        const targetElement = document.querySelector(anchor.hash) as HTMLElement
        if (targetElement) {
          e.preventDefault()
          lenis.scrollTo(targetElement, { offset: -60, duration: 1.2 })
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener("click", handleAnchorClick)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
