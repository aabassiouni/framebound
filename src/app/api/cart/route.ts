import { Redis } from '@upstash/redis'
import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { cookies } from 'next/headers'

const redis = Redis.fromEnv()

// export const revalidate = 0

type RedisItem = { product_id: string; quantity: number }
type RedisCart = { items: RedisItem[] }

export async function GET(request: NextRequest) {
    console.log('/////////////// fetching cart ///////////////')
    try {
        let updatedCart = []

        const cartID = new URL(request.url).searchParams.get('cartID')
        if (cartID === null) {
            console.log('cartID is null')
            return NextResponse.json({ error: 'No cartID provided' })
        }

        if (cartID === 'null') {
            console.log('creating new cartID')
            const newCartID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
            await redis.set(newCartID, JSON.stringify({ items: [] }))

            console.log('new cartID is', newCartID)
            console.log('returning new cartID...')
            return NextResponse.json({ cartID: newCartID, items: [] })
        }

        const cart: RedisCart | null = await redis.get(cartID)
        console.log('data from redis is', cart)

        if (cart) {
            for (let item of cart?.items) {
                const product = await stripe.products.retrieve(item.product_id)
                updatedCart.push(product)
            }
        }

        return NextResponse.json({ items: cart })
    } catch (error) {
        console.log('error fetching cart:', error)
        return NextResponse.json({ error: 'something happened' })
    }
}

export async function POST(request: NextRequest) {
    console.log('/////////////// adding item to cart ///////////////')
    try {
        const { cartID, item } = await request.json()
        // const url = new URL(request.url)
        // const cartID = url.searchParams.get('cartID')
        // const item = url.searchParams.get('item')

        console.log('cartID', cartID)
        console.log('item', item)

        if (!item) {
            return NextResponse.json({ error: 'No item provided' })
        }
        if (!cartID) {
            return NextResponse.json({ error: 'No cartID provided' })
        }

        const cart: RedisCart | null = await redis.get(cartID)
        console.log('cart from redis is', cart)

        let items = cart?.items ? cart.items : []

        const itemExists = items.findIndex((o) => o.product_id === item)

        if (itemExists === -1) {
            items.push({ product_id: item, quantity: 1 })
        } else {
            items[itemExists].quantity += 1
        }

        // if (cart) {
        //     items.find((o, i) => {
        //         if (o.product_id === item) {
        //             items[i] = { product_id: o.product_id, quantity: o.quantity + 1 }
        //             return true
        //         }
        //     })
        // }

        await redis.set(cartID, JSON.stringify({ items }))

        return NextResponse.json({ items })
    } catch (error) {
        console.log('error adding item to cart:', error)
        return NextResponse.json({ error: 'something happened' })
    }
}

export async function PUT(request: NextRequest) {
    const cartId = cookies().get('cartID')?.value

    const { item, quantity } = await request.json()

    if (!cartId) {
        return NextResponse.json({ error: 'Missing cartId' }, { status: 400 })
    }
    if (!item) {
        return NextResponse.json({ error: 'Missing item' }, { status: 400 })
    }
    if (!quantity) {
        return NextResponse.json({ error: 'Missing quantity' }, { status: 400 })
    }

    try {
        const cart: RedisCart | null = await redis.get(cartId)
        console.log('cart from redis is', cart)

        let items = cart?.items ? cart.items : []

        const itemExists = items.findIndex((o) => o.product_id === item)

        if (itemExists === -1) {
            items.push({ product_id: item, quantity })
        } else {
            items[itemExists].quantity = quantity
        }

        await redis.set(cartId, JSON.stringify({ items }))

        return NextResponse.json({ items })
    } catch (error) {
        console.log('error updating cart:', error)
        return NextResponse.json({ error: 'something happened' })
    }
}

export async function DELETE(request: NextRequest) {
    console.log('/////////////// deleting item from cart ///////////////')
    const { item } = await request.json()

    // console.log('req is', item )
    try {
        // const cartID = cookies().get('cartID')?.value
        // console.log('cartID is', cartID)
        // console.log('item is', item)
        // if (!cartID || !item) {
        //     return NextResponse.json({ error: 'Missing cartID or item' }, { status: 400 })
        // }
        // const cart: RedisCart | null = await redis.get(cartID)
        // console.log('cart from redis is', cart)

        // let items = cart?.items ? cart.items : []

        // items = items.filter((i) => i?.product_id !== item)

        // await redis.set(cartID, JSON.stringify({ items }))

        // return NextResponse.json({ items })
    } catch (error) {
        console.log('error deleting item from cart:', error)
        return NextResponse.json({ error: 'something happened' })
    }
}
