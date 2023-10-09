import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { AuthProvider } from '../components/AuthContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
            <head>
        <title>e-commerce</title>
        <meta name="description" content="..."></meta>
      </head>
      <body className={inter.className}>
      <AuthProvider>
        <header>
          <Navbar/>
        </header>
        <main>
          {children}
        </main>
        <Footer/>
        </AuthProvider>
      </body>
    </html>
  )
}
