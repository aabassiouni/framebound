'use client'

import { useRouter } from 'next/navigation'
import React, { useTransition } from 'react'
import { useCookies } from 'react-cookie'
import type { Stripe } from 'stripe'

function AddToCartBtn({ product }: { product: string }) {
    const router = useRouter()
    const [cookies, setCookie] = useCookies(['cartID'])
    const [isPending, startTransition] = useTransition()

    async function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        console.log('adding to cart:', product);
        e.preventDefault();
        const cartID = cookies['cartID'];
        const productID = product;
        const response = await fetch(`/api/cart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cartID,
                item: productID,
            }),
        });
        const data = await response.json();

        if (data.error) {
            alert(data.error)
            return
        }
        
        console.log('data: ', data);

        startTransition(() => {
            router.refresh()
        })
    }

    return (
        <button type="button" onClick={handleClick} className=" m-3 mr-auto border-2 p-2 border-black">
            add to cart
        </button>
    )
}

export default AddToCartBtn
