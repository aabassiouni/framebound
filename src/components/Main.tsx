
import React from 'react'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Rectangle from './Rectangle'
import {clsx} from 'clsx'

const inter = Inter({ subsets: ['latin'] })
const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: any) => {
        const delay = 1 + i * 0.5
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 },
                repeat: 10000000,
                repeatType: 'loop',
                repeatDelay: 2,
            },
        }
    },
}
function Main() {
    

    const topValues = ['top-0', 'top-[10%]', 'top-[20%]', 'top-[30%]', 'top-[40%]', 'top-[50%]']
    // const horizontal
    const leftValues = [[ 'left-[10%]', 'left-[20%]'], [ 'left-[40%]', 'left-[50%]'],['left-[70%]', 'left-[80%]',],[ 'left-[90%]', 'left-full']]
    const mobileTopValues = ['top-0', 'top-[10%]', 'top-[20%]', 'top-[30%]', 'top-[40%]', 'top-[50%]']
    const mobileLeftValues = ['md:left-0', 'md:left-[10%]', 'md:left-[20%]', 'md:left-[30%]', 'md:left-[40%]', 'md:left-[50%]']

    const classnames = Array.from({ length: 4 }, (_, index) => {
        // console.log("index is", index)
        return (
            clsx('absolute', topValues[Math.floor(Math.random() * 6)], leftValues[index][Math.floor(Math.random() * 3)], mobileLeftValues[Math.floor(Math.random() * 6)], 'p-3', 'flex')
        )
    })


    return (
        <div className="">
            <div className="border-y-2 border-black relative h-[60vh] overflow-hidden">
                {classnames.map((i, index) => {
                    return (
                        <div key={index} className={i}>
                            <Rectangle />
                        </div>
                    )
                })}
                {/* <div className="w-full h-full">
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

                <div className="hidden sm:block w-full h-full bg-black"></div>*/}
                <div className="bg-white border border-black flex flex-col absolute top-1/2 left-1/2 py-2 -translate-y-1/2 -translate-x-1/2 ">
                    <p className={`text-3xl text-center ${inter.className} px-3 mx-auto font-semibold`}>
                        framebound photography
                    </p>
                    <p className={`text-sm text-center ${inter.className} px-3 mx-auto font-medium`}>
                        by Ali Bassiouni.
                    </p>
                    <p className={`text-2xl my-4 text-center ${inter.className} px-3 mx-auto font-semibold`}>
                        buy a print :){' '}
                    </p>
                    <Link href={'/shop'} className="mx-auto border-black border-2 mt-3 py-1 px-3 text-sm font-medium">
                        shop.
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Main
