import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Inter, Roboto_Mono } from 'next/font/google';

export const metadata = {
    title: 'framebound',
    description: 'Generated by create next app',
}

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    display: 'swap'
  });

  const roboto_mono = Roboto_Mono({
    variable: '--font-roboto-mono',
    subsets: ['latin'],
    display: 'swap'
  });
  
  
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={inter.className}>
            <body className=''>
                <Navbar />
                {children}
                <Footer />
            </body>
            
        </html>
    )
}
