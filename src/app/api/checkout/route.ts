
import { Redis } from '@upstash/redis'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { RedisCart } from '@/lib/cart'

// export const runtime = 'edge';


const redis = Redis.fromEnv()

export async function POST(request: NextRequest) {
    console.log('/////////////// creating checkout session ///////////////')
    const cartID = cookies().get('cartID')?.value

    if (!cartID) {
        return NextResponse.redirect('/')
    }

    const cart: RedisCart | null = await redis.get(cartID)
    const origin = request.headers.get('origin')
    try {
        // Create Checkout Sessions from body params.
        if(cart === null) {
            return NextResponse.json({ error: 'No cart found' })
        }

        const session = await stripe.checkout.sessions.create({
            line_items: cart.items.map((item) => {
                return {
                    price: item.price_id,
                    quantity: item.quantity,
                }
            }),
            mode: 'payment',
            success_url: `${origin}/?success=true`,
            cancel_url: `${origin}`,
        })
        
        if (!session){
            return NextResponse.json({ error: 'something happened' })
        }


        return NextResponse.redirect(session?.url ?? "/", 303)
    } catch (err) {
        return NextResponse.json({ error: 'something happened' })
    }
}
