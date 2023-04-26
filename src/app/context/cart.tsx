'use client';

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext({})

export const CartContextProvider = ({ children }:{children: any}) => {
    const [cartItems, setCartItems] = useState({});

    useEffect(() => {
        const cartItems = JSON.parse(sessionStorage.getItem('cartItems') || '{}');
        setCartItems(cartItems);
    }, []);
    
    
    return (
        <CartContext.Provider value={{ cartItems }}>
            {children}
        </CartContext.Provider>
    )
};

export const useCartContext = () => useContext(CartContext);