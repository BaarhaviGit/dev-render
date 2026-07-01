import type { Metadata } from 'next'
import { Chakra_Petch, Share_Tech_Mono, Caveat } from 'next/font/google'
import './globals.css'

const chakra = Chakra_Petch({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-sans'
})

const shareTechMono = Share_Tech_Mono({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-mono'
})

const caveat = Caveat({
  subsets: ["latin"],
  variable: '--font-display'
})

export const metadata: Metadata = {
  title: 'Baarhavi',
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
    <html lang="en" className={`${chakra.variable} ${shareTechMono.variable} ${caveat.variable} bg-background`}>
      <body className="font-sans antialiased noise-bg">
        {children}
      </body>
    </html>
  )
}
