import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono, Bangers } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-sans'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono'
})

const bangers = Bangers({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-display'
})

export const metadata: Metadata = {
  title: 'Dev Render | Portfolio',
  description: 'Full Stack Developer & Cloud DevOps Enthusiast. Building scalable, secure, and modern digital experiences.',
  keywords: ['Full Stack Developer', 'Cloud', 'DevOps', 'React', 'Next.js', 'AWS', 'Portfolio'],
  authors: [{ name: 'Baarhavi M D' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${bangers.variable} bg-background`}>
      <body className="font-sans antialiased noise-bg">
        {children}
      </body>
    </html>
  )
}
