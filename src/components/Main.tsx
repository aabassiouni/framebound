"use client";

import React from 'react'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { motion } from "framer-motion";

const inter = Inter({ subsets: ['latin'] })
function Main() {
    return (
        <div className=''>
            <div className="relative grid grid-cols-2 sm:grid-cols-6 ">
                <motion.div className="w-full h-full bg-black" animate={{ scale: 1.1 }} transition={{ duration: 1 }}>
                    <img src="/9x9.svg" />
                </motion.div>
                <div className="w-full h-full">
                    <img src="/9x9.svg" />
                </div>
                <div className="w-full h-full bg-black"></div>
                <div className="w-full h-full">
                    <img src="/2x4.svg" />
                </div>
                <div className="w-full h-full bg-black"></div>

                <div className="hidden sm:block w-full h-full">
                    <img src="/9x9.svg" />
                </div>
                <div className="hidden sm:block w-full h-full bg-black"></div>
                <div className="hidden sm:block w-full h-full col-span-2 ">
                    <div className="w-1/2 h-full bg-black animate-grow"></div>
                </div>
                <div className="hidden sm:block  w-full h-full">
                    <img src="/9x9.svg" />
                </div>
                <div className="hidden sm:block  w-full h-full bg-black"></div>
                <div className="w-full h-full bg-black"></div>

                <div className="hidden sm:block w-full h-full bg-black"></div>
                <div className="bg-white flex flex-col absolute top-1/2 left-1/2 py-2 -translate-y-1/2 -translate-x-1/2 ">
                    <p className={`text-3xl text-center ${inter.className} px-3 mx-auto font-semibold`}>framebound photography</p>
                    <p className={`text-sm text-center ${inter.className} px-3 mx-auto font-medium`}>by Ali Bassiouni.</p>
                    <p className={`text-3xl text-center ${inter.className} px-3 mx-auto font-semibold`}>buy a print :) </p>
                    <Link href={"/shop"} className='mx-auto border-black border-2 mt-3 py-1 px-3 text-sm font-medium'>shop.</Link>
                </div>
            </div>
        </div>
    )
}

export default Main
