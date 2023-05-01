import React from 'react'
import { InstagramLogoIcon,  } from '@radix-ui/react-icons'


function Footer() {
    return (
        <div className="flex gap-2 w-full h-[10vh] justify-between bg-white border-t border-black px-7 sm:px-14">
            <p className='self-center'>framebound by Ali Bassiouni.</p>
            <InstagramLogoIcon width={24} className='self-center h-12' />
            
        </div>
    )
}

export default Footer
