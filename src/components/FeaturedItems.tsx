import { stripe } from '@/lib/stripe'
import React, { Suspense } from 'react'
import ItemCard from './ItemCard'

export default async function FeaturedItems({ limit }: { limit: number}) {
    const products = await stripe.products.list({
        limit: limit,
        expand: ['data.default_price']
    })
    // const data = setTimeout(async () => {
    //     const products = await stripe.products.list({
    //         limit: 3,
    //     })
    //     return products
    // }, 1000)
    
    // console.log('rendering')
    return (
        // <Suspense fallback={<p>Loading...</p>}>
            <div className=" gap-7 p-4 flex flex-wrap justify-evenly">
                {products.data.map((product) => (
                    /* @ts-ignore */
                    <ItemCard key={product.id} product={product} />
                ))}
            </div>
        // </Suspense>
    )
}
