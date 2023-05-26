import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
    title: 'framebound',
    description: 'framebound is a collection of photgraphy pieces by @aabassiouni',
}

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={inter.variable}>
            <body className="flex min-h-screen flex-col">
                <Navbar />
                {children}
                <Footer />
                <Analytics />
            </body>
        </html>
    )
}
