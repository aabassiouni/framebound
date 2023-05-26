import React from 'react'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Rectangle from './Rectangle'
import { clsx } from 'clsx'
import Line from './Line'
import LineX from './LineX'
import TitleCard from './TitleCard'
import LineY from './LineY'

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
    const leftValues = [
        ['left-[10%]', 'left-[20%]'],
        ['left-[40%]', 'left-[50%]'],
        ['left-[70%]', 'left-[80%]'],
        ['left-[90%]', 'left-full'],
    ]
    const mobileTopValues = ['top-0', 'top-[10%]', 'top-[20%]', 'top-[30%]', 'top-[40%]', 'top-[50%]']
    const mobileLeftValues = [
        'md:left-0',
        'md:left-[10%]',
        'md:left-[20%]',
        'md:left-[30%]',
        'md:left-[40%]',
        'md:left-[50%]',
    ]

    const classnames = Array.from({ length: 4 }, (_, index) => {
        // console.log("index is", index)
        return clsx(
            'absolute',
            topValues[Math.floor(Math.random() * 6)],
            leftValues[index][Math.floor(Math.random() * 3)],
            mobileLeftValues[Math.floor(Math.random() * 6)],
            'p-3',
            'flex'
        )
    })

    return (
        <div className="">
            <div className="border-y-2 border-black flex justify-center self-center relative h-[60vh] overflow-hidden">
                {/* {classnames.map((i, index) => {
                    return (
                        <div key={index} className=" h-4">
                            <Rectangle />
                        </div>
                    )
                })} */}
                {/* <div className='h-'> */}
                {/* <Rectangle2 /> */}

                {/* </div> */}
                <div className='w-full my-auto'>
                    {/* <LineY /> */}
                    <div className=" w-full my-auto space-y-5">
                        {/* <LineX /> */}
                        <TitleCard />
                        {/* <LineX /> */}
                        {/* <LineY /> */}
                    </div>
                    {/* <LineY /> */}
                </div>
            </div>
        </div>
    )
}

export default Main
