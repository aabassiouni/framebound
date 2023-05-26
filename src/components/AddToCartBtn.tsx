'use client'

import { useRouter } from 'next/navigation'
import React, { useState, useTransition } from 'react'
import LoadingSpinner from './LoadingSpinner'

function AddToCartBtn({ product }: { product: string }) {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const [adding, setAdding] = useState(false)
    
    const isMutating = isPending || adding;

    async function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();

        console.log('adding to cart:', product);
        setAdding(true)

        const productID = product;
        const response = await fetch(`/api/cart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                item: productID,
            }),
        });
        const data = await response.json();

        if (data.error) {
            alert(data.error)
            return
        }

        setAdding(false)

        startTransition(() => {
            router.refresh()
        })
    }

    return (
        <button type="button" disabled={isMutating} onClick={handleClick} className="btn-link w-28 h-12 bg-white hover:-translate-y-1 m-3 mr-auto border-2 p-2 border-black">
            {isMutating ? <LoadingSpinner />: <span className='link-inner'> add to cart</span>}
            
            
        </button>
    )
}

export default AddToCartBtn
