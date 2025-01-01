"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import CartModal from '../cartModal/CartModal'
function NavIcons() {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)
    const router = useRouter();
    const isLoggedIn = false;

    const handleProfile = () => {
        if (!isLoggedIn) {
            router.push('/login')
        }
        setIsProfileOpen((prev) => !prev)
    }

    return (
        <div className='flex items-center gap-4 xl:gap-6 relative'>

            <Image src="/profile.png" width={22} height={22} className='cursor-pointer' alt="profile" onClick={handleProfile} />
            {isProfileOpen && <div className='absolute p-4 rounded-md top-12 left-0 shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20' >

                <Link href="/">profile</Link>
                <div className='mt-2 cursor-pointer'>Logout</div>

            </div>}


            <Image src="/notification.png" width={22} height={22} className='cursor-pointer' alt="notification" />
            <div className='cursor-pointer relative'>

                <div className='absolute -top-4 -right-4 w-6 h-6 bg-lama   rounded-full flex text-white text-sm items-center justify-center'>2</div>

                <Image src="/cart.png" width={22} height={22} className='cursor-pointer' alt="cart" onClick={() => setIsCartOpen((prev) => !prev)} />

            </div>
            {isCartOpen && (<CartModal />)}
        </div>
    )
}

export default NavIcons