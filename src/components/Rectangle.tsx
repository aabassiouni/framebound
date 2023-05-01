"use client";

import { motion } from 'framer-motion'
import React from 'react'

function Rectangle() {
    return (
        <motion.svg
            className="self-center"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: [0, 1, 1, 0],
            }}
            transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 2,
                times: [0, 0.2, 0.8, 1],
            }}
            width="200"
            height="200"
            viewBox="0 0 200 200"
        >
            {/* <motion.rect
                            width="210"
                            height="210"
                            initial={{ 
                                pathLength: 0, 
                                pathOffset: 1,
                                // pathSpacing: 0
                                 }}
                            animate={{ 
                                pathLength: 1,
                                pathOffset: 0.2 ,
                                //   pathSpacing: 1
                                }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: 'loop',
                                repeatDelay: 2,
                            }}
                            x="0"
                            y="0"
                            rx="0"
                            stroke="#000000"
                            strokeLinecap="square"
                        /> */}
            {/* <motion.path
                            // d="M 0,0 L 210,0 L 210,210 L 0,210 L 0,0 z"
                            d="M 0,0 L 210,0 M 210,0 L 210,210 M 210,210 L 0,210 M 0,210 L 0,0 M 0,0 z"
                            // d="M 0,0 L 210,0 M 210,0 L 210,210 M 210,210 L 0,210 M 0,210 L 0,0 M 0,0 z"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="5"
                            strokeLinecap="square"
                            initial={{
                                pathLength: 1,
                                pathOffset: 1,
                            }}
                            animate={{
                                pathLength: 0,
                                pathOffset: 0,
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                repeatType: 'loop',
                                repeatDelay: 1,
                            }}
                        /> */}
            <motion.path
                // d="M 105,0 L 315,0 L 315,210 L 105,210 Z"
                d="M 100,0 L 0,0, L 0,200 L 200,200 L200,0 Z"
                fill="none"
                stroke="#000000"
                strokeWidth="5"
                strokeLinecap="square"
                strokeDasharray="800"
                strokeDashoffset="400"
                initial={{
                    strokeDashoffset: 800,
                    pathLength: 0,
                    // opacity: 0,
                }}
                animate={{
                    strokeDashoffset: [800, 0, 0, 0],
                    pathLength: [0, 1, 1],
                    // pathLength: [{value: 0, duration: 2}, {value: 0.5, duration: 2}, {value: 1, duration: 2}, {value: 1, duration: 2}],
                    // opacity: [0, 1, 1, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'linear',
                    repeatDelay: 2,
                    times: [0, 0.8, 1],
                }}
            />
        </motion.svg>
    )
}

export default Rectangle
