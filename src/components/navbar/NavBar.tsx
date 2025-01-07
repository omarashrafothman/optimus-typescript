"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Menu from '../menu/Menu'
import Image from 'next/image'
import SearchBar from '../searchBar/SearchBar'
import NavIcons from '../navIcon/NavIcons'


function NavBar() {
    const [isLogedIn, setIsLoggedIn] = useState(true)
    return (
        <div className='h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-32 relative '>
            <div className='h-full flex items-center justify-between md:hidden'>
                {/* mobile screen */}

                <Link href="/"><div className='text-2xl tracking-wide'>LAMA</div></Link>
                <Menu />
            </div>
            {/* bigger screen */}


            <div className='hidden md:flex items-center justify-between gap-8  h-full '>

                {/* left */}

                <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
                    <Link href="/" className=' flex items-center gap-3'>
                        <Image src="/logo.png" alt="" width={24} height={24} />


                        <div className='text-2xl tracking-wide'>LAMA</div></Link>

                    <div className='hidden xl:flex gap-4'>
                        <Link href="/">Home</Link>

                        <Link href="">About</Link>
                        <Link href="">Contact</Link>


                    </div>
                </div>

                {/* right */}
                <div className='w-2/3 flex justify-between gap-8 xl:w-1/2 items-center'>
                    <SearchBar />
                    {isLogedIn ? <NavIcons /> : <div>
                        <Link className='bg-lama text-white p-3 rounded-md' href="/auth/login">Login Now</Link>
                    </div>}



                </div>


            </div>
        </div>
    )
}

export default NavBar