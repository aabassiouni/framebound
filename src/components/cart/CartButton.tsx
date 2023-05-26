'use client';
import { useEffect, useRef, useState } from 'react'
import { useCookies } from 'react-cookie'
import CartModal from './CartModal'
import { Inter } from 'next/font/google'
import { Cart as CartType } from '@/lib/cart'

const inter = Inter({ subsets: ['latin'] })

function CartButton({ cart, cartIdUpdated}: { cart: CartType, cartIdUpdated: boolean}) {
    const [, setCookie] = useCookies(['cartID'])
    const [cartIsOpen, setCartIsOpen] = useState<boolean>(false)

    const quantityRef = useRef(cart.totalQuantity)

    // Temporary hack to update the `cartId` cookie when it changes since we cannot update it
    // on the server-side (yet).
    useEffect(() => {
        if (cartIdUpdated) {
            console.log("setting cookie using cartID: ", cart.cartID)
            setCookie('cartID', cart.cartID, {
                path: '/',
                sameSite: 'strict',
                // secure: process.env.NODE_ENV === 'production',
            })
        }
        return
    }, [setCookie, cartIdUpdated, cart.cartID])
    
    useEffect(() => {
        // Open cart modal when when quantity changes.
        if (cart.totalQuantity !== quantityRef.current) {
            // But only if it's not already open (quantity also changes when editing items in cart).
            if (!cartIsOpen) {
                setCartIsOpen(true)
            }

            // Always update the quantity reference
            quantityRef.current = cart.totalQuantity
        }
    }, [cartIsOpen, cart.totalQuantity, quantityRef])
    
    return (
        <>
            <CartModal isOpen={cartIsOpen} cart={cart} onClose={() => setCartIsOpen(false)}  />

            <button
                aria-label="Open cart"
                onClick={() => {
                    setCartIsOpen(true)
                }}
            >
                <p className={`justify-end self-center font-bold ${inter.className}`}>
                    cart 
                    <span className="ml-1 border border-black px-1 font-semibold">{cart?.totalQuantity ?? 0}</span>
                </p>
            </button>
        </>
    )
}

export default CartButton
