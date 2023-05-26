import React from 'react'
import { Inter } from 'next/font/google'
import ItemSection from '@/components/ItemSection'

const inter = Inter({ subsets: ['latin'] })
export const runtime = 'edge';

export default async function ShopPage() {
    

    return (
        <div className="border-y border-black flex flex-1 flex-col items-center">
            <p className={`text-3xl mt-3 justify-evenly ${inter.className}`}>All Pieces</p>
            {/* @ts-ignore */}
            <ItemSection />
        </div>
    )
}
