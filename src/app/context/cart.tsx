'use client'

import { createContext, useContext, useEffect, useState } from 'react'

import { redis } from '../../lib/redis'

 type CartContextProps = {
    items: [],
    setCartItems: any
}

const CartContext = createContext<CartContextProps>({
    items: [],
    setCartItems: null
})

export  type Cart = {
    id: string,
    quantity: number,
    items: []
}
export const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<[]>([])
    // const [cartCount, setCartCount] = useState<number>(0);

    return <CartContext.Provider value={{items: cartItems, setCartItems}}>{children}</CartContext.Provider>
}

export function useCart() {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error('Context must be used within a Provider')
    }
    return context
}
