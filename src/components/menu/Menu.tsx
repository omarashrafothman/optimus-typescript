"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Menu() {
    const [open, setOpen] = useState(false)
    return (
        <div>

            <Image src="/menu.png" width={28} height={28} alt='' className='cursor-pointer' onClick={() => setOpen((prev) => !prev)} />
            {open && (<div className='flex justify-center  items-center gap-8 flex-col absolute bg-black text-white left-0 top-20 h-[calc(100vh-80px)] w-full text-xl z-10 '>

                <Link href="">Home</Link>
                <Link href="">Shop</Link>
                <Link href="">Deals</Link>
                <Link href="">About</Link>
                <Link href="">Contact</Link>
                <Link href="">Logout</Link>
                <Link href="">Cart(1)</Link>
            </div>)}
        </div>
    )
}

export default Menu