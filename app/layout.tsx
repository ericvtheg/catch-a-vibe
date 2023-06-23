import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Find a show',
  description: 'Find EDM shows happening near you',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar bg-soundcloud text-primary-content mb-4">
          <a className="btn btn-ghost normal-case text-xl">Find a Show</a>
        </div>
        {children}
      </body>
    </html>
  )
}
