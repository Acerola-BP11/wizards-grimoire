import Header from '@/components/Header'
import { AuthProvider } from './context/AuthContext'
import './globals.css'
import Head from 'next/head'

export const metadata = {
  title: 'O grimório do mago',
  description: 'Site para criação de fichas de D&D 5e',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#111111]">
        <AuthProvider>
          <div className='flex flex-col h-screen w-screen'>
           <Header/>
           {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}