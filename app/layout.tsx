import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Summit Fitness Coaching — Transform Your Body in 90 Days',
  description:
    'Online personal training that gets real results. 1-on-1 virtual coaching, custom meal plans, and weekly check-ins designed around your life.',
  generator: 'v0.app',
  keywords: ['online personal trainer', 'fitness coaching', 'virtual coaching', 'weight loss', '90 day transformation'],
  openGraph: {
    title: 'Summit Fitness Coaching — Transform Your Body in 90 Days',
    description:
      'Online personal training that gets real results. 1-on-1 virtual coaching, custom meal plans, and weekly check-ins.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a1628',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
