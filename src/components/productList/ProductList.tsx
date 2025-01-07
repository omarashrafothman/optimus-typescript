import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Pagination from '../pagination/Pagination'
import products from "../../locals/products.json";
import Product from '../product/Product';
function ProductList() {
    return (
        <div className='flex justify-between flex-wrap gap-x-8 gap-y-16'>

            {products.map((product) => (

                <Product key={product.id} productId={product.id} productName={product.name} productDescription={product.description} productImageOne={product.gallery[0].galleryItem} productImageTwo={product.gallery[1].galleryItem} />

            ))}

            {/*   <Pagination />*/}
        </div>
    )
}

export default ProductList