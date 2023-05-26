import React, { Suspense } from 'react'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Cart from './cart/Cart'
import MobileMenu from './MobileMenu'

const inter = Inter({ subsets: ['latin'] })

function Navbar() {
    return (
        <nav className="h-[10vh] py-5 border-b- sm:px-5">
            <div className="container px-7 sm:px-14 mx-auto flex flex-wrap items-center justify-between">
                <Link href="" className="flex items-center">
                    <p className={`self-center text-2xl sm:text-3xl font-black  ${inter.className}`}>framebound</p>
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
                <div className='flex gap-3'>

                    <Suspense fallback={<p>Loading Cart</p>}>
                        {/* @ts-expect-error Server Component */}
                        <Cart />
                    </Suspense>

                    {/* <CartContextProvider >
                        <CartButton />
                    </CartContextProvider> */}



                    < MobileMenu />
                    {/* <button className="sm:hidden border-black p-1 border text-sm font-medium">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                                fill="currentColor"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
