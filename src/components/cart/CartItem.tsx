import React, { MouseEventHandler, startTransition, useEffect, useState } from 'react'
import Image from 'next/image'
// import { stripe } from '@/lib/stripe'
import { FinalCartItem, RedisItem } from './Cart'
import Price from '../price'
import Stripe from 'stripe'
import { useRouter } from 'next/navigation'
import { useCookies } from 'react-cookie'
import EditQuantityButton from './EditQuantityButton'
type Product = {
    id: string
    name: string
    description: string
    images: string[]
    metadata: {
        id: string
    }
}

function CartItem({ item }: { item: FinalCartItem }) {
    console.log('in the cart item thing')
    const [cookies, setCookie] = useCookies(['cartID'])

    console.log('cartID in CartItem.tsx is', cookies['cartID']?.value)
    const [editing, setEditing] = useState(false)
    const router = useRouter()

    let price: number = 0

    if (typeof item.product.default_price === 'object') {
        if (item?.product?.default_price?.unit_amount === undefined) {
            price = 0
        }

        if (item?.product?.default_price?.unit_amount) {
            price = item?.product?.default_price?.unit_amount
        }
    }

    return (
        <li key={item.product.id} className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden border border-black">
                {/* <Image
                    width={96}
                    height={96}
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover object-center"
                /> */}
            </div>

            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between font-sans text-base font-medium text-gray-900">
                        <h3>
                            <a href={item.product?.url ?? '/'}>{item.product.name}</a>
                        </h3>
                        {/* <p className="ml-4">{product.name}</p> */}

                        <Price className="ml-4" amount={price} currencyCode="USD" />
                    </div>

                    {/* <p className="mt-1 font-sans text-sm text-gray-500">{item.color}</p> */}
                </div>
                <div className="flex flex-1 items-end justify-end text-sm">
                    <div className="flex gap-2 ">
                        <EditQuantityButton item={item} type={'minus'} />
                        <p className="font-sans self-center ">{item.quantity}</p>
                        <EditQuantityButton item={item} type={'plus'} />
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CartItem
