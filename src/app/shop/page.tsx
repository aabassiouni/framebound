import React from 'react'
import ItemCard from '../../components/ItemCard'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { stripe } from '@/lib/stripe'
import { Suspense } from 'react'
import FeaturedItems from '@/components/FeaturedItems'

const inter = Inter({ subsets: ['latin'] })

export default async function ShopPage() {
    

    return (
        <div className="border-y border-black flex flex-col items-center">
            <p className={`text-3xl mt-3 justify-evenly ${inter.className}`}>All Pieces</p>
            {/* <Suspense fallback={<p>Loading...</p>}>
                <div className=" gap-7 p-4 flex flex-wrap justify-evenly">
                    {products.data.map((product) => {
                        <ItemCard key={product.id} product={product} />
                    })}
    
                </div>
            </Suspense> */}
            {/* @ts-ignore */}
            <FeaturedItems limit={10}/>
        </div>
    )
}
