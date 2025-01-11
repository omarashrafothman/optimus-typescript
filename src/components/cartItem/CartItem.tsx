"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import Image from 'next/image';
function CartItem({ name, price, img }: cartType) {
    const [qty, setQuantity] = useState(1);
    function handleQuantityChange(action: 'increase' | 'decrease') {
        setQuantity(prevQuantity => {
            if (action === 'increase') {
                return prevQuantity + 1;
            } else if (action === 'decrease') {

                if (prevQuantity > 1) {
                    return prevQuantity - 1;
                } else {
                    return prevQuantity;
                }
            }
            return prevQuantity;
        });
    }
    return (
        <>
            <div className="flex items-center gap-4">
                <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                    <Link href="/1"> <Image src={img} className="w-full h-full object-contain" alt='' /></Link>
                </div>
                <div className="w-full">
                    <h3 className="text-base font-semibold text-gray-800"><Link href="/1">{name}</Link></h3>
                    <h6 className="text-sm text-gray-800 font-bold cursor-pointer mt-0.5">${price}</h6>
                    <div className="flex gap-4 mt-4">
                        <div className='flex justify-between'>
                            <button type="button"
                                className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md" onClick={() => handleQuantityChange('decrease')}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 124 124">
                                    <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                                </svg>
                            </button>
                            <span className="mx-2.5">{qty}</span>
                            <button className='flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md' onClick={() => handleQuantityChange('increase')}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 42 42">
                                    <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="ml-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-red-500 inline cursor-pointer" viewBox="0 0 24 24">
                                <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000"></path>
                                <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-gray-300" />
        </>
    )
}

export default CartItem