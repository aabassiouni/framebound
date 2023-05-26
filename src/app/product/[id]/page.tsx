import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Price from '@/components/price'
import { sql } from '@vercel/postgres'

export const runtime = 'edge';

export default async function ProductPage({ params }: { params: { id: string } }) {

    const {rows: product } = await sql`SELECT * FROM items WHERE id = ${params.id}` 

    return (
        <div className="border-t border-black h-full flex flex-1 flex-wrap py-16 px-24 justify-between">

            <Image className="mr-5 object-contain" src={product[0]?.images ? product[0].images[0] : ""  } width={400} height={400} alt="" />
            <div className=" flex-1 border border-black flex flex-col p-6 justify-between ">
                <span className="self-center">{product[0].name}</span>
                <span className='text-center self-center'>{product[0].description}</span>
                <Price className="text-base self-center" amount={product[0].price} currencyCode="usd" />
                <button className="self-center border  p-2 border-black grow-0">add to cart</button>
            </div>
        </div>
    )
}
