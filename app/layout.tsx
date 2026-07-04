import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Anton, Inter } from 'next/font/google'
import './globals.css'

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Summit Fitness Coaching — Transform Your Body in 90 Days',
  description:
    'Online personal training that gets real results. 1-on-1 virtual coaching, custom meal plans, and weekly check-ins designed around your life.',
  keywords: ['online personal trainer', 'fitness coaching', 'virtual coaching', 'weight loss', '90 day transformation'],
  icons: {
    icon: [{ url: '/logo.png', type: 'image/png' }],
    apple: [{ url: '/logo.png', type: 'image/png' }],
    shortcut: '/logo.png',
  },
  openGraph: {
    title: 'Summit Fitness Coaching — Transform Your Body in 90 Days',
    description:
      'Online personal training that gets real results. 1-on-1 virtual coaching, custom meal plans, and weekly check-ins.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0B',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} bg-base text-ink`}>
      <body className="font-body antialiased bg-base text-ink film-grain">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
