import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { stripe } from '@/lib/stripe'
import Price from '@/components/price'

export default async function ProductPage({ params }: { params: { id: string } }) {
    const product = await stripe.products.search({
        query: `metadata[\'id\']:\'${params.id}\'`,
    })
    const price = await stripe.prices.retrieve(product.data[0].default_price as string)

    console.log(product.data[0].name)
    return (
        <div className="border-t border-black h-full flex flex-wrap py-16 px-24 justify-between">
            <Image className="mr-5" src="/9x9.svg" width={400} height={400} alt="" />
            <div className=" flex-1 border border-black flex flex-col p-6 justify-between ">
                <span className="self-center">{product.data[0].name}</span>
                <span className='text-center self-center'>{product.data[0].description}</span>
                <Price className="text-base self-center" amount={price.unit_amount ?? 0} currencyCode="usd" />
                <button className="self-center border  p-2 border-black grow-0">add to cart</button>
            </div>
        </div>
    )
}
