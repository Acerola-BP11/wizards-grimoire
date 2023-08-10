import { AuthProvider } from './context/AuthContext'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'O grimório do mago',
  description: 'Site para criação de fichas de D&D 5e',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[var(--bg)]">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}