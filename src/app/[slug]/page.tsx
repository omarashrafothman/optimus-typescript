import Add from '@/components/add/Add'
import CustomizeProduct from '@/components/customizeProduct/CustomizeProduct'
import ProductImages from '@/components/productImages/ProductImages'
import React from 'react'

function SinglePage() {
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
            {/* IMG */}
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">

                <ProductImages />
            </div>
            {/* TEXTS */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h1 className='text-4xl font-medium'>Product Name</h1>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla alias ea facilis cupiditate nostrum quasi harum iste, minus corporis quam maxime earum possimus vero. Provident nesciunt ratione aperiam porro recusandae?</p>
                <div className='h-[2px] bg-gray-100' />
                <div className='flex items-center gap-4'>
                    <h3 className='text-xl text-gray-500 line-through'>$59</h3>
                    <h2 className='font-medium text-2xl' >$29</h2>

                </div>
                <div className='h-[2px] bg-gray-100' />

                <CustomizeProduct />
                <Add />
                <div className='h-[2px] bg-gray-100' />

                <div className='text-sm'>

                    <h4 className='font-medium mb-4'>Tittle</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis veniam mollitia repellendus labore minima est inventore id incidunt in eum qui at voluptatum odit pariatur delectus ipsum, aliquid fugiat? At!</p>
                </div>
                <div className='text-sm'>

                    <h4 className='font-medium mb-4'>Tittle</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis veniam mollitia repellendus labore minima est inventore id incidunt in eum qui at voluptatum odit pariatur delectus ipsum, aliquid fugiat? At!</p>
                </div>
            </div>
        </div>
    )
}

export default SinglePage