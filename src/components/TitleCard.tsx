import Link from 'next/link'
import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function TitleCard() {
    return (
        <div className="bg-white border border-black flex flex-col  py-2 w-fit mx-auto ">
            <p className={`text-xl sm:text-3xl text-center ${inter.className} px-3 mx-auto font-semibold`}>
                framebound photography
            </p>
            {/* <Line /> */}
            <p className={`text-sm text-center ${inter.className} px-3 mx-auto font-medium`}>by Ali Bassiouni.</p>
            <p className={`text-2xl my-4 text-center ${inter.className} px-3 mx-auto font-semibold`}>buy a print :) </p>
            <Link href="/shop" className="mx-auto border-black border-2 mt-3 py-1 px-3 text-sm font-medium">
                shop.
            </Link>
        </div>
    )
}

export default TitleCard
