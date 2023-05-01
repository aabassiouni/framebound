import React from 'react'
import { useState, startTransition } from 'react'
import { useRouter } from 'next/navigation'
import { FinalCartItem } from './Cart'

function EditQuantityButton({ type, item }: { type: 'plus' | 'minus'; item: FinalCartItem }) {
    console.log('in the cart item thing')

    const [editing, setEditing] = useState(false)
    const router = useRouter()


    async function handleEdit() {
        setEditing(true)
        console.log('in the handle edit function', item.product.id, item.quantity)
        const response = await fetch(`/api/cart`, {
            method: type === 'minus' && item.quantity - 1 === 0 ? 'DELETE' : 'PUT',
            body: JSON.stringify({
                item: item.product.id,
                quantity: type === 'plus' ? item.quantity + 1 : item.quantity - 1,
            }),
        })
        // console.log('response is', response)

        // const data = await response.json()

        // if (data.error) {
        //     alert(data.error)
        //     return
        // }

        setEditing(false)
        
        startTransition(() => {
            router.refresh()
        })
    }

    return (
        <button
            type="button"
            onClick={handleEdit}
            className="font-medium border border-black p-1 font-sans hover:text-indigo-500"
        >
            {type === 'plus' ? (
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    ></path>
                </svg>
            ) : (
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            )}
        </button>
    )
}

export default EditQuantityButton
