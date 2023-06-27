import './globals.css'
import NavBar from '@/components/Containers/NavBar.jsx'


export const metadata = {
  title: 'U Traffic',
  description: 'Soluciones para peajes.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
