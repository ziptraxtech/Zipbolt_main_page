import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ZIPBOLT - Powering India\'s EV Future with Intelligence',
  description: 'ZipBolt is the intelligence layer—the invisible backbone that makes electric mobility smarter, safer and sustainable.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}