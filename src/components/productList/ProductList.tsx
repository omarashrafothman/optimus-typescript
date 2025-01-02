import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
function ProductList() {
    return (
        <div className='flex justify-between flex-wrap gap-x-8 gap-y-16'>
            <Link href="/1" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500' src="https://images.pexels.com/photos/6237887/pexels-photo-6237887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill sizes="25vw" />
                    <Image className='absolute object-cover rounded-md' src="https://images.pexels.com/photos/7620577/pexels-photo-7620577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill sizes="25vw" />
                </div>

                <div className='flex justify-between'>

                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'></span>

                </div>
                <div className='text-sm text-gray-500'>My description</div>
                <button className='rounded-2xl ring-1 ring-lama text-lama py-2 px-4 w-max text-xs hover:bg-lama hover:text-white tr'>Add to Cart</button>




            </Link>
            <Link href="/1" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500' src="https://images.pexels.com/photos/6237887/pexels-photo-6237887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill sizes="25vw" />
                    <Image className='absolute object-cover rounded-md' src="https://images.pexels.com/photos/7620577/pexels-photo-7620577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill sizes="25vw" />
                </div>

                <div className='flex justify-between'>

                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'></span>

                </div>
                <div className='text-sm text-gray-500'>My description</div>
                <button className='rounded-2xl ring-1 ring-lama text-lama py-2 px-4 w-max text-xs hover:bg-lama hover:text-white tr'>Add to Cart</button>




            </Link>
            <Link href="/1" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500' src="https://images.pexels.com/photos/6237887/pexels-photo-6237887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill sizes="25vw" />
                    <Image className='absolute object-cover rounded-md' src="https://images.pexels.com/photos/7620577/pexels-photo-7620577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill sizes="25vw" />
                </div>

                <div className='flex justify-between'>

                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'></span>

                </div>
                <div className='text-sm text-gray-500'>My description</div>
                <button className='rounded-2xl ring-1 ring-lama text-lama py-2 px-4 w-max text-xs hover:bg-lama hover:text-white tr'>Add to Cart</button>




            </Link>
            <Link href="/1" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500' src="https://images.pexels.com/photos/6237887/pexels-photo-6237887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill sizes="25vw" />
                    <Image className='absolute object-cover rounded-md' src="https://images.pexels.com/photos/7620577/pexels-photo-7620577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill sizes="25vw" />
                </div>

                <div className='flex justify-between'>

                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'></span>

                </div>
                <div className='text-sm text-gray-500'>My description</div>
                <button className='rounded-2xl ring-1 ring-lama text-lama py-2 px-4 w-max text-xs hover:bg-lama hover:text-white tr'>Add to Cart</button>




            </Link>


        </div>
    )
}

export default ProductList