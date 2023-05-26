// import { redis } from '@/lib/redis'
// import { stripe } from '@/lib/stripe'
import { sql } from '@vercel/postgres'

import { Redis } from '@upstash/redis'
// import https from 'https'

console.log('making redis connection')
export const redis = Redis.fromEnv()
export type RedisItem = { price_id: string; quantity: number }
export type RedisCart = {
    items: RedisItem[]
} | null

export type Item = {
    id: number
    name: string
    description: string
    stripe_product_id: string
    stripe_price_id: string
    featured: boolean
    price: number
    images: string[],
    active: boolean
    quantity: number
}
export type LineItem = { item: Item; quantity: number }

export type Cart = {
    cartID: string
    line_items: LineItem[]
    total: number
    totalQuantity: number
}

export async function createCart(): Promise<Cart> {

    const cartID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    await redis.set(cartID, JSON.stringify({ items: [] }))

    return { cartID, line_items: [], total: 0, totalQuantity: 0 }
}

export async function getCart(cartID: string): Promise<Cart> {
    let redisCart: RedisCart = await redis.get(cartID)
    let cart: Cart = { cartID, line_items: [], total: 0, totalQuantity: 0 }
    let items: string[] = []
    console.log('cart from redis is', redisCart)

    if (redisCart === null) {
        return cart
    }

    for (let item of redisCart?.items) {
        items.push(item.price_id)

        const { rows }: { rows: Item[] } = await sql`SELECT * FROM items WHERE stripe_price_id IN (${item.price_id})`
        console.log('rows from postgres are', rows)
        console.log("price in getCart is ", rows[0].price)
        cart.line_items.push({ item: rows[0], quantity: item.quantity })
        cart.total += Number(rows[0].price * item.quantity)
        cart.totalQuantity += item.quantity
    }

    return cart
}

export async function addToCart(cartID: string, item: string) {
    console.log('cartID', cartID)
    console.log('item', item)

    const cart: RedisCart | null = await redis.get(cartID)
    console.log('data from redis is', cart)

    if (cart) {
        if (cart.items.some((i) => i.price_id === item)) {
            const newCart: RedisCart = {
                items: cart.items.map((i) => {
                    if (i.price_id === item) {
                        return { ...i, quantity: i.quantity + 1 }
                    } else {
                        return i
                    }
                }),
            }
            await redis.set(cartID, JSON.stringify(newCart))
            return newCart
        }

        const newCart: RedisCart = { items: [...cart.items, { price_id: item, quantity: 1 }] }
        await redis.set(cartID, JSON.stringify(newCart))
        return newCart
    } else {
        return null
    }
}

export async function updateCart(cartID: string, item: string, quantity: number) {
    console.log('////////////////////////// Updating Cart ///////////////////////////')
    const cart: RedisCart | null = await redis.get(cartID)
    console.log('data from redis is', cart)

    if (cart) {
        if (cart.items.some((i) => i.price_id === item)) {
            const newCart: RedisCart = {
                items: cart.items.map((i) => {
                    if (i.price_id === item) {
                        return { ...i, quantity: quantity }
                    } else {
                        return i
                    }
                }),
            }
            await redis.set(cartID, JSON.stringify(newCart))
            return newCart
        }
    }
}

export async function deleteFromCart(cartID: string, item: string) {
    console.log('////////////////////////// Deleting From Cart ///////////////////////////')
    const cart: RedisCart | null = await redis.get(cartID)
    console.log('data from redis is', cart)

    if (cart) {
        if (cart.items.some((i) => i.price_id === item)) {
            const newCart: RedisCart = {
                items: cart.items.filter((i) => i.price_id !== item),
            }
            await redis.set(cartID, JSON.stringify(newCart))
            return newCart
        }
    }
}
