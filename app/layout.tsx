import type { Metadata } from 'next'
import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-sans'
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ["latin"],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'Baarhavi M D',
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
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}