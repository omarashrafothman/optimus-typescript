"use client"
import React from 'react'
import Image from 'next/image'

import { useState } from "react";

function ProductImages({ images }: { images: { id: number }; galleryItem: string[] }) {

    const [index, setIndex] = useState(0);

    if (!images) {
        return <p>Loading...</p>;
    }
    if (images.length === 0) {
        return <p>No images available</p>;
    }
    return (
        <div className="">
            <div className="h-[500px] relative">
                <Image
                    src={images[index].galleryItem}
                    alt=""
                    fill
                    sizes="50vw"
                    className="object-cover rounded-md"
                />
            </div>
            <div className="flex justify-between gap-4 mt-8">
                {images.map((img: any, i: number) => (
                    <div
                        className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
                        key={img.id}
                        onClick={() => setIndex(i)}
                    >
                        <Image
                            src={img.galleryItem}
                            alt=""
                            fill
                            sizes="30vw"
                            className="object-cover rounded-md"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductImages