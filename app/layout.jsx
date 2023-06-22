import './globals.css'
import NavBar from '@/components/Containers/NavBar.jsx'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'U Traffic',
  description: 'Soluciones para peajes.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}