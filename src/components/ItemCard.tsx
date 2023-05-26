import React, { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Price from './price'
import AddToCartBtn from './AddToCartBtn'
import type { Item } from '../lib/cart'

async function ItemCard({ product }: { product: Item }) {
    return (
        <Link href={`/product/${product.id}`}>
            <div className=" flex flex-col border-2 border-black ">
                <Image
                    // @ts-ignore
                    src={product.images[0] ?? ''}
                    width={400}
                    height={400}
                    alt=""
                    className="h-[300px] w-[400px] object-contain p-4"
                />
                <p className="px-4 pt-4 text-xl">{product.name}</p>
                <Suspense fallback={<p>Loading...</p>}>
                    <Price className="px-4 text-sm" amount={product.price ?? 0} currencyCode="usd" />
                </Suspense>
                {product.stripe_price_id !== null && <AddToCartBtn product={product.stripe_price_id} />}
            </div>
        </Link>
    )
}

export default ItemCard
