import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Catch a Vibe',
  description: 'Find EDM shows happening near you',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden`}>
        <div className="navbar bg-primary text-primary-content">
          <Link href="/" className="btn btn-ghost normal-case text-xl">Catch a Vibe</Link>
        </div>
        {children}
      </body>
    </html>
  )
}
