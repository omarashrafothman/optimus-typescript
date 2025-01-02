"use client"
import React, { useEffect, useState } from 'react'
import slides from "../../locals/slides.json";
import Link from 'next/link';
import Image from 'next/image';
function Slider() {
    const [current, setCurrent] = useState(0)
    useEffect(() => {

        const interval = setInterval(() => {

            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))

        }, 3000)

        return () => clearInterval(interval)
    }, [])
    return (
        <div className='h-[calc(100vh-80px)] overflow-hidden'>

            <div className='w-max h-full flex transition-all ease-in-out duration-1000 ' style={{ transform: `translateX(-${current * 100}vw)` }}>

                {slides.map((slide) => (
                    <div className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`} key={slide.id}>
                        <div className='h-1/2 xl:w-1/2 flex flex-col xl:h-full  items-center justify-center gap-8 2xl:gap-12 text-center'>

                            <h2 className='text-xl lg:text-3xl 2xl:text-5xl'>{slide.description}</h2>
                            <h1 className='text-5xl  lg:text-6xl  2xl:text-8xl  font-semibold'>{slide.title}</h1>
                            <Link href={slide.url}><button className='rounded-md b g-black text-white py-3 px-4'>SHOP NOW</button></Link>

                        </div>
                        {/*IMAGE CONTAINER*/}
                        <div className='relative h-1/2 xl:w-1/2 xl:h-full'>
                            <Image src={slide.img} alt="" fill className='object-cover' sizes='100%' />
                        </div>
                    </div>
                ))}

            </div>
            <div className='absolute m-auto left-1/2 bottom-8 flex gap-4'>
                {
                    slides.map((item, index) => (<div className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? "scale-150" : ""}`} key={item.id} onClick={() => setCurrent(index)}>


                        {current === index && (

                            <div className='w-[6px] h-[6px] bg-gray-600 rounded-full'></div>

                        )}



                    </div>))


                }
            </div>

        </div>
    )
}

export default Slider