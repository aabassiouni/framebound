import { stripe } from '@/lib/stripe'
import React, { Suspense } from 'react'
import ItemCard from './ItemCard'
import { sql } from '@vercel/postgres'
import type { Item } from '../lib/cart'


export default async function ItemSection({ limit, featured }: { limit?: number; featured?: boolean }) {
    let featuredCondition = featured ? 'WHERE featured = true' : ''

    let products: { rows: Item[] } = { rows: [] }

    if (featured) {
        products = await sql`SELECT * FROM items WHERE featured = true order by id asc`
    } else {
        products = await sql`SELECT * FROM items order by id asc`
    }

    return (
        <div className=" flex flex-wrap justify-evenly gap-7 p-4">
            {products.rows.map((product) => (
                <Suspense key={product.id} fallback={<p>Loading...</p>}>
                    {/* @ts-ignore */}
                    <ItemCard  product={product} />
                </Suspense>
            ))}
        </div>
    )
}
