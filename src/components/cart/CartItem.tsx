import React, { useState } from 'react'
import Image from 'next/image'
import Price from '../price'
import { useRouter } from 'next/navigation'
import { useCookies } from 'react-cookie'
import EditQuantityButton from './EditQuantityButton'
import type { Item, LineItem } from '@/lib/cart'


function CartItem({ item }: { item: LineItem }) {
    console.log('in the cart item thing')
    const [cookies, setCookie] = useCookies(['cartID'])

    console.log('cartID in CartItem.tsx is', cookies['cartID']?.value)
    const [editing, setEditing] = useState(false)
    const router = useRouter()


    return (
        <li key={item.item.id} className="flex py-6">
            <div className="h-24 w-24 p-2 flex-shrink-0 overflow-hidden border border-black">
                <Image
                    width={96}
                    height={96}
                    src={item.item.images[0] ?? ''}
                    alt=""
                    className="h-full w-full object-contain object-center"
                />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between font-sans text-base font-medium text-gray-900">
                        <h3>
                            <a href={`${item.item.id}` ?? '/'}>{item.item.name}</a>
                        </h3>
                        {/* <p className="ml-4">{product.name}</p> */}

                        <Price className="ml-4" amount={item.item.price} currencyCode="USD" />
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
