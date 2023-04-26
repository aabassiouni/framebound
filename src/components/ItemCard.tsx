import React, { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { stripe } from '../lib/stripe'
import type Stripe from 'stripe'
import Price from './price'

async function ItemCard({ product }: { product: Stripe.Product }) {
    const price = await stripe.prices.retrieve(product.default_price as string)
    return (
            <Link href={`/product/${product.metadata.id}`}>
                <div className=" flex flex-col border-2 border-black ">
                    <Image
                        src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg"
                        width={400}
                        height={300}
                        alt=""
                    />
                    <p className="text-xl pt-4 px-4">{product.name}</p>
                    <Price className="text-sm px-4" amount={price.unit_amount ?? 0} currencyCode='usd' />
                    <button className=" m-3 mr-auto border-2 p-2 border-black">add to cart</button>

                    {/* <p className="text-sm px-4">{price.unit_amount}</p> */}
                </div>
            </Link>
    )
}

export default ItemCard
