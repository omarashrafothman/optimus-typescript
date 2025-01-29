import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { productType } from "../../types/types";
function Product({ productId, productName, productDescription, productImageOne, productImageTwo }: productType) {
    return (
        <Link href={`/productdetails/${productId}`} className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
            <div className='relative w-full h-80'>
                <Image className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500' src={productImageOne} alt="" fill sizes="25vw" />
                <Image className='absolute object-cover rounded-md' src={productImageTwo} alt="" fill sizes="25vw" />
            </div>

            <div className='flex justify-between'>

                <span className='font-medium'>{productName}</span>
                <span className='font-semibold'></span>

            </div>
            <div className='text-sm text-gray-500'>{productDescription}</div>
            <button className='rounded-2xl ring-1 ring-lama text-lama py-2 px-4 w-max text-xs hover:bg-lama hover:text-white tr'>Add to Cart</button>
        </Link>
    )
}

export default Product