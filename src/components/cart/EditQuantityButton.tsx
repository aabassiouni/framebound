import React, { useTransition } from 'react'
import { useState, startTransition } from 'react'
import { useRouter } from 'next/navigation'
import { LineItem } from '@/lib/cart'
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'
import LoadingSpinner from '../LoadingSpinner'

function EditQuantityButton({ type, item }: { type: 'plus' | 'minus'; item: LineItem }) {
    console.log('in the cart item thing')

    const [editing, setEditing] = useState(false)
    const router = useRouter()

    async function handleEdit() {
        setEditing(true)
        console.log('in the handle edit function', item.item.name, item.quantity)

        const response = await fetch(`/api/cart`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                item: item.item.stripe_price_id,
                quantity: type === 'plus' ? item.quantity + 1 : item.quantity - 1,
            }),
        })

        setEditing(false)

        startTransition(() => {
            router.refresh()
        })
    }

    return (
        <button
            type="button"
            onClick={handleEdit}
            className="border border-black p-1 font-sans font-medium hover:text-indigo-500"
        >
            {type === 'plus' ? (
                !editing ? (
                    <PlusIcon />
                ) : (
                    <LoadingSpinner />
                )
            ) : !editing ? (
                <MinusIcon />
            ) : (
                <LoadingSpinner />
            )}
        </button>
    )
}

export default EditQuantityButton
