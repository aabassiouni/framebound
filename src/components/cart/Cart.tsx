import React from 'react'
import { cookies } from 'next/headers'
import CartButton from './CartButton'
import { redis } from '@/lib/redis'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

export type RedisItem = { product_id: string; quantity: number }
export type RedisCart = { items?: RedisItem[] }
export type FinalCartItem = { product: Stripe.Product; quantity: number }

async function Cart() {
    let cartID = cookies().get('cartID')?.value || null
    let cartIdUpdated = false
    let cart: RedisCart | null = { items: [] }
    let finalCart: FinalCartItem[] = []

    console.log('cartID from cookies is', cartID)

    if (cartID) {
        console.log('cartID in Cart.tsx is', cartID)

        cart = await redis.get(cartID)
        console.log('cart from redis is', cart)

        
        console.log('data from redis is', cart)
        if (cart?.items) {
            for (let item of cart?.items) {
                const product = await stripe.products.retrieve(item.product_id,{
                    expand: ['default_price']
                })

                if(item){
                    finalCart.push({product, quantity: item?.quantity})
                }
            }
        }
        // console.log('finalCart is', finalCart)
    }

    if (!cartID || !cart) {

        // console.log('creating new cartID')
        cartID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        await redis.set(cartID, JSON.stringify({ items: [] }))
        cartIdUpdated = true;
        // console.log('new cartID is', cartID)
        // console.log('returning new cartID...')
    }



    return <CartButton cartID={cartID} cart={finalCart} cartIdUpdated />
}

export default Cart
