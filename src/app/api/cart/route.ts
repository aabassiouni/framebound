import { Redis } from '@upstash/redis'
import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { cookies } from 'next/headers'
import { getCart, createCart, addToCart, updateCart, deleteFromCart } from '@/lib/cart'

export const runtime = 'edge';

const redis = Redis.fromEnv()

// export const revalidate = 0

// export async function GET(request: NextRequest) {
//     console.log('/////////////// fetching cart ///////////////')
//     const cartID = cookies().get('cartID')?.value ?? null

//     try {
//         let updatedCart = []

//         if (cartID === null) {
//             console.log('cartID is null')
//             return NextResponse.json({ error: 'No cartID provided' })
//         }

//         if (cartID === 'null') {
//             console.log('creating new cartID')
//             const newCartID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
//             await redis.set(newCartID, JSON.stringify({ items: [] }))

//             console.log('new cartID is', newCartID)
//             console.log('returning new cartID...')
//             return NextResponse.json({ cartID: newCartID, items: [] })
//         }

//         const cart = await redis.get(cartID)
//         console.log('data from redis is', cart)

//         if (cart) {
//             for (let item of cart?.items) {
//                 const product = await stripe.products.retrieve(item.product_id)
//                 updatedCart.push(product)
//             }
//         }

//         return NextResponse.json({ items: cart })
//     } catch (error) {
//         console.log('error fetching cart:', error)
//         return NextResponse.json({ error: 'something happened' })
//     }
// }

export async function POST(request: NextRequest) {
    console.log('/////////////// adding item to cart ///////////////')
    const cartID = cookies().get('cartID')?.value ?? null

    if (cartID === null) {
        console.log('cartID is null')
        return NextResponse.json({ error: 'No cartID provided' })
    }

    const { item } = await request.json()

    try {

        await addToCart(cartID, item)
        return NextResponse.json({ item })
    } catch (error) {

        console.log('error adding item to cart:', error)
        return NextResponse.json({ error: 'something happened' })
    }
}

export async function PUT(request: NextRequest) {
    const cartID = cookies().get('cartID')?.value

    const { item, quantity } = await request.json()

    if (!cartID) {
        return NextResponse.json({ error: 'Missing cartId' }, { status: 400 })
    }
    try {
        if(quantity === 0) {
            await deleteFromCart(cartID, item)
        }

        await updateCart(cartID, item, quantity)

        return NextResponse.json({ item })
    } catch (error) {
        console.log('error updating cart:', error)
        return NextResponse.json({ error: 'something happened' })
    }
}

export async function DELETE(request: NextRequest) {
    console.log('/////////////// deleting item from cart ///////////////')

    try {
        const cartID = cookies().get('cartID')?.value
        const { item, quantity } = await request.json()
    
        if (!cartID || !item) {
            return NextResponse.json({ error: 'Missing cartId or item' }, { status: 400 })
        }
    
        await deleteFromCart(cartID, item)

        return NextResponse.json({ state: 'success' })
    } catch (error) {
        console.log('error deleting item from cart:', error)
        return NextResponse.json({ error: 'something happened' })
    }
}
