import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './app.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Design Engineer Challenge',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-midnight">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
