import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Juan Canales Test App',
  description: 'Build and deployed by Juan Canales',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen h-screen flex flex-col overflow-hidden`}>
        {children}
        <Navbar />
      </body>
    </html>
  )
}
