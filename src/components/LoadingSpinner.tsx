import React from 'react'

function LoadingSpinner() {
    return (
        <svg className='mx-auto' width="15" height="15" viewBox="0 0 50 50">
            <circle
                cx="25"
                cy="25"
                r="20"
                stroke="black"
                stroke-width="5"
                fill="none"
                stroke-dasharray="94.24777960769379"
                stroke-dashoffset="94.24777960769379"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 25 25"
                    to="360 25 25"
                    dur="1s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="stroke-dashoffset"
                    values="94.24777960769379;0"
                    dur="1s"
                    repeatCount="indefinite"
                />
            </circle>
        </svg>
    )
}

export default LoadingSpinner
