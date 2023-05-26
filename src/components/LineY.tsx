'use client'

import { motion } from 'framer-motion'
import React from 'react'

function LineY() {
    return (
        <svg className="absolute bg-blue-900 h-full " viewBox="0 0 10 100" xmlns="http://www.w3.org/2000/svg">
            <motion.path
                stroke="red"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                    duration: 1,
                    ease: 'easeInOut',
                    repeat: 1,
                    repeatType: 'loop',
                    repeatDelay: 1,
                }}
                d="M 0, 0 V 0 100"
            />
        </svg>
    )
}

export default LineY
