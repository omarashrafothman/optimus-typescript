"use client"
import Add from '@/components/add/Add'
import CustomizeProduct from '@/components/customizeProduct/CustomizeProduct'
import ProductImages from '@/components/productImages/ProductImages'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import productsArr from '../../../locals/products.json';
import { GalleryItemType, Product } from '../../../types/types'; // Import the type

function SinglePage() {
    const param = useParams();
    const slug = param?.slug ? Number(param.slug) : NaN;

    const formattedProducts = productsArr.map(product => ({
        ...product,
        gallery: Array.isArray(product.gallery)
            ? product.gallery.map(item => ({
                ...item,
                galleryItem: Array.isArray(item.galleryItem) ? item.galleryItem : [item.galleryItem]
            }))
            : []
    }));

    const [product, setProduct] = useState<Product | undefined>();

    useEffect(() => {
        if (!isNaN(slug)) {
            const foundProduct = productsArr.find(item => item.id === slug);
            setProduct(foundProduct);
        }
    }, [slug]);

    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
            {/* IMG */}
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
                <ProductImages images={product?.gallery?.filter((item) => item.id !== undefined) as GalleryItemType[]}
                />
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
                <CustomizeProduct attributes={product?.attributes ?? []} />
                <Add stock={product?.quantity} />
                <div className='h-[2px] bg-gray-100' />
                {product?.review && (
                    <div>
                        <h2>Reviews</h2>
                        {product.review.map((item: { id: React.Key | null | undefined; message: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined }) => (
                            <div className='text-sm' key={item.id}>
                                <p>{item.message}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default SinglePage;
