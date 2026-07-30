import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Outfit } from 'next/font/google'
import { SmoothScrolling } from '@/components/smooth-scrolling'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono'
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-display'
})

export const metadata: Metadata = {
  title: 'Baarhavi | Software Engineer',
  description: 'Full Stack Developer & Cloud DevOps Enthusiast. Building scalable, secure, and modern digital experiences.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'Cloud', 'DevOps', 'React', 'Next.js', 'AWS', 'Portfolio'],
  authors: [{ name: 'Baarhavi M D' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${outfit.variable} bg-background`}>
      <body className="font-sans antialiased">
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  )
}
