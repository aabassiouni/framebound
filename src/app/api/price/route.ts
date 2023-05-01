import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";




export async function GET(request: NextRequest) {
    console.log('/////////////// fetching price ///////////////')
    const url = new URL(request.url)
    const item = url.searchParams.get('item')

    if (!item) {
        return NextResponse.json({ error: 'No item provided' })
    }

    const product = await stripe.products.retrieve(item, {
        expand: ['default_price']
    })

    if (!product) {
        return NextResponse.json({ error: 'Product not found' })
    }
    
    return NextResponse.json( product )
}