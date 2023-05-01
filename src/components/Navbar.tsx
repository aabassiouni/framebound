import React, { Suspense } from 'react'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import CartButton from './cart/CartButton'
import { CartContextProvider } from '@/app/context/cart'
import Cart from './cart/Cart'

const inter = Inter({ subsets: ['latin'] })

function Navbar() {
    // console.log(inter.className)
    return (
        // <div className='h-20 w-screen'>
        //     <div className='flex flex-row h-full mx-5'>
        //         <p className={`self-center text-4xl font-black italic ${inter.className}`}>framebound</p>
        //         <div className='flex justify-end gap-2'>
        //             <a className={`self-center ${inter.className}`}>Home</a>
        //             <a className={`self-center ${inter.className}`}>About</a>
        //             <a className={`self-center ${inter.className}`}>Contact</a>
        //         </div>
        //         <p className={`justify-end self-center font-bold ${inter.className}`}>Cart.</p>

        //     </div>
        // </div>

        <nav className="h-[10vh] py-5 border-b- sm:px-5">
            <div className="container px-7 sm:px-14 mx-auto flex flex-wrap items-center justify-between">
                <Link href="" className="flex items-center">
                    <p className={`self-center text-4xl sm:text-3xl font-black  ${inter.className}`}>framebound</p>
                </Link>
                <nav className="hidden sm:block space-x-8">
                    <Link href="/" className={` ${inter.className}`}>
                        home
                    </Link>
                    <Link href="/shop" className={` ${inter.className}`}>
                        shop
                    </Link>
                    <Link href="/about" className={` ${inter.className}`}>
                        about
                    </Link>
                </nav>
                {/* <p className={`justify-end self-center font-bold ${inter.className}`}>cart. <span className='border border-black px-1 font-semibold'>0</span></p> */}
                {/* <CartContextProvider> */}
                {/* <UseClient> */}
                <Suspense fallback={<p>Loading Cart</p>}>
                    {/* @ts-expect-error Server Component */}
                    <Cart />
                </Suspense>
                {/* </UseClient> */}

                {/* </CartContextProvider> */}
            </div>
        </nav>
    )
}

export default Navbar
