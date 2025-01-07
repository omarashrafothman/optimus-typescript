"use client"
import Add from '@/components/add/Add'
import CustomizeProduct from '@/components/customizeProduct/CustomizeProduct'
import ProductImages from '@/components/productImages/ProductImages'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import productsArr from '../../../locals/products.json';
function SinglePage() {
    const param = useParams()
    const slug = Number(param.slug)
    const [product, setProduct] = useState<Product | undefined>(undefined);
    const [products, setProducts] = useState();


    useEffect(() => {
        setProducts(productsArr);
        const getProduct = (items: Product[], productId: number): Product | undefined => {
            return items.find(item => item.id === productId);
        };
        if (products) {
            const foundProduct = getProduct(products, slug);
            setProduct(foundProduct);
        }
    }, [slug, products]);

    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
            {/* IMG */}
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">

                <ProductImages images={product?.gallery} />
            </div>
            {/* TEXTS */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h1 className='text-4xl font-medium'>{product?.name}</h1>
                <p className='text-gray-500'>{product?.description}</p>
                <div className='h-[2px] bg-gray-100' />
                <div className='flex items-center gap-4'>
                    <h3 className='text-xl text-gray-500 line-through'>${product?.price}</h3>
                    <h2 className='font-medium text-2xl' >${product?.discount}</h2>

                </div>
                <div className='h-[2px] bg-gray-100' />

                <CustomizeProduct attributes={product?.attributes} />
                <Add stock={product?.quantity} />
                <div className='h-[2px] bg-gray-100' />

                {product?.review.map(item => (<div className='text-sm' key={item.id}>

                    {/* <h4 className='font-medium mb-4'>Tittle</h4> */}
                    <p>{item.message}</p>
                </div>))}

            </div>
        </div>
    )
}

export default SinglePage