import type { Metadata, Viewport } from "next"
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"
import { SmoothScrolling } from "@/components/smooth-scrolling"
import { AmbientGlow } from "@/components/ambient-glow"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Baarhavi M D | Full Stack & Software Engineer",
  description: "Aspiring Full Stack Developer with expertise in Cloud & DevOps. Architecting scalable, secure, and high-performance applications.",
  keywords: [
    "Baarhavi",
    "Baarhavi M D",
    "Full Stack Developer",
    "Software Engineer",
    "Cloud Engineer",
    "DevOps",
    "React",
    "Next.js",
    "Node.js",
    "AWS",
    "Portfolio",
  ],
  authors: [{ name: "Baarhavi M D" }],
  creator: "Baarhavi M D",
  openGraph: {
    title: "Baarhavi M D | Full Stack & Software Engineer",
    description: "Architecting Scalable Systems — Full Stack Developer & Cloud Engineer Portfolio.",
    type: "website",
    locale: "en_US",
  },
}

export const viewport: Viewport = {
  themeColor: "#07090e",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${jakarta.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-background text-foreground relative min-h-screen overflow-x-hidden">
        <SmoothScrolling>
          <AmbientGlow />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  )
}
