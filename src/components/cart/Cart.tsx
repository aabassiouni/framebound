import React from 'react'
import { cookies } from 'next/headers'
import CartButton from './CartButton'
import { createCart, getCart } from '@/lib/cart'

async function Cart() {

    let cartID = cookies().get('cartID')?.value
    let cartIdUpdated = false
    let cart;

    
    console.log('cartID from cookies is', cartID);
    
    if (cartID) {
       cart = await getCart(cartID);
       
    }

    if (!cartID || !cart) {
        cart = await createCart();
        cartIdUpdated = true;
    }

    return <CartButton cart={cart} cartIdUpdated />
}

export default Cart
