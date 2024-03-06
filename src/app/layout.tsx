import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { roboto } from './components/ui/fonts'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hackday UTA 2024',
  description: 'Hackday UTA 2024',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundImage: 'url("/bg.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundAttachment: 'fixed',
          height: '100vh',
        }}
        className={`${roboto.className} `}
      >
        {/* <div className="fixed z-0">
          <img className="" src={'/bg.png'} alt=""></img>
        </div> */}
        {children}
      </body>
    </html>
  )
}
