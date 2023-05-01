import React, { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { stripe } from '../lib/stripe'
import type Stripe from 'stripe'
import Price from './price'
import AddToCartBtn from './AddToCartBtn'

async function ItemCard({ product }: { product: Stripe.Product }) {
    // const price = await stripe.prices.retrieve(product.default_price as string)
    // console.log("product price from expansion is ", product?.default_price?.unit_amount)
    let price: number = 0

    if (typeof product.default_price === 'object') {
        if (product?.default_price?.unit_amount === undefined) {
            price = 0
        }

        if (product?.default_price?.unit_amount) {
            price = product?.default_price?.unit_amount
        }
    }
    return (
            <Link href={`/product/${product.metadata.id}`}>
                <div className=" flex flex-col border-2 border-black ">
                    <Image
                        src="https://s3.us-east-2.amazonaws.com/framebound/DSC_0293.jpg"
                        width={400}
                        height={400}
                        alt=""
                        className='m-4 object-COVER w-[400px] h-[300px]'
                    />
                    <p className="text-xl pt-4 px-4">{product.name}</p>
                    <Price className="text-sm px-4" amount={price} currencyCode='usd' />
                    <AddToCartBtn product={product.id} />
                    {/* <button className=" m-3 mr-auto border-2 p-2 border-black">add to cart</button> */}

                    {/* <p className="text-sm px-4">{price.unit_amount}</p> */}
                </div>
            </Link>
    )
}

export default ItemCard;
