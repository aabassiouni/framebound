import Image from 'next/image'
import Main from '../components/Main'
import ItemCard from '../components/ItemCard'
import { Inter } from 'next/font/google'
import { stripe } from '../lib/stripe'
import FeaturedItems from '@/components/FeaturedItems'

const inter = Inter({ subsets: ['latin'] })
export default async function HomePage() {
    return (
        <>
            <Main />
            <div className="flex flex-col justify-center items-center">
                <span className={`text-3xl mt-3 ${inter.className}`}>Featured Pieces</span>
                {/* @ts-ignore */}
                <FeaturedItems limit={3} />
            </div>
        </>
    )
}
