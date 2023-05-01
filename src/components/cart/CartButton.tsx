'use client';
import { useEffect, useRef, useState } from 'react'
import { useCookies } from 'react-cookie'
// import type { Cart } from 'lib/shopify/types';
// import CartIcon from 'components/icons/cart';

import CartModal from './CartModal'
import { Inter } from 'next/font/google'
import { useCart } from '@/app/context/cart'
import { CartProvider } from 'use-shopping-cart'
import { FinalCartItem, RedisCart } from './Cart';

const inter = Inter({ subsets: ['latin'] })

function CartButton({cartID, cart, cartIdUpdated}: {cartID: string | null, cart: FinalCartItem[], cartIdUpdated: boolean}) {
    const [, setCookie] = useCookies(['cartID'])
    // const  {items, setCartItems} = useCart()
    // const [items, setCartItems] = useState<[]>([])
    const [cartIsOpen, setCartIsOpen] = useState<boolean>(false)

    // console.log("cartItems in cart button: ", items);
    // const quantityRef = useRef(cart.totalQuantity)

    // Temporary hack to update the `cartId` cookie when it changes since we cannot update it
    // on the server-side (yet).
    useEffect(() => {
        if (cartIdUpdated) {
            console.log("setting cookie using cartID: ", cartID)
            setCookie('cartID', cartID, {
                path: '/',
                sameSite: 'strict',
                // secure: process.env.NODE_ENV === 'production',
            })
        }
        return
    }, [setCookie, cartIdUpdated, cartID])

    // useEffect(() => {
    //     // Open cart modal when when quantity changes.
    //     if (cart.totalQuantity !== quantityRef.current) {
    //         // But only if it's not already open (quantity also changes when editing items in cart).
    //         if (!cartIsOpen) {
    //             setCartIsOpen(true)
    //         }

    //         // Always update the quantity reference
    //         quantityRef.current = cart.totalQuantity
    //     }
    // }, [cartIsOpen, cart.totalQuantity, quantityRef])
    
    
    // useEffect(() => {
    //     // const cartID = localStorage.getItem("cartID");
    //     // console.log('cartID: ', cartID)

    //     // async function fetchData() {
    //     //     console.log("fetching cart on load")

    //     //     const cart = await fetch('/api/cart?cartID=' + cartID, {
    //     //         method: 'GET',
    //     //         headers: {
    //     //             'Content-Type': 'application/json',
    //     //         }
    //     //     })

    //     //     const cartItems = await cart.json()
    //     //     console.log('cart is: ', cartItems?.items)

    //     //     if (cartItems?.cartID){
    //     //         localStorage.setItem("cartID", cartItems.cartID);
    //     //     }
    //     //     setCartItems(cartItems?.items)
    //     // }

    //     // fetchData()
    
    // }, [])

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
                    cart. 
                    <span className="ml-1 border border-black px-1 font-semibold">{cart?.length ?? 0}</span>
                </p>
            </button>
        </>
    )
}

export default CartButton
