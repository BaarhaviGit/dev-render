import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-sans'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'Baarhavi M D | Full Stack Developer',
  description: 'Full Stack Developer & Cloud DevOps Enthusiast. Building scalable, secure, and modern digital experiences.',
  keywords: ['Full Stack Developer', 'Cloud', 'DevOps', 'React', 'Next.js', 'AWS', 'Portfolio'],
  authors: [{ name: 'Baarhavi M D' }],
  openGraph: {
    title: 'Baarhavi M D | Full Stack Developer',
    description: 'Building scalable, secure, and modern digital experiences.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
