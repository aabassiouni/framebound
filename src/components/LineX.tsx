'use client'

import { motion } from 'framer-motion'
import React from 'react'

function LineX() {
    return (
        <svg className="bg-blue-900 w-full" viewBox="0 0 100 1" xmlns="http://www.w3.org/2000/svg">
            <motion.path
                stroke="red"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                    duration: 1,
                    ease: 'easeInOut',
                    // repeat: 1,
                    // repeatType: 'loop',
                    // repeatDelay: 1,
                }}
                d="M 0, 0 L 50, 0"
            />
        </svg>
    )
}

export default LineX
