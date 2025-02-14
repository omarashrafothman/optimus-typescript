"use client"
import Image from "next/image";
import Link from "next/link";
function CartModal() {
    const cartItems = true;
    function goToCart() {



    }
    return (
        <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">{

            !cartItems ? (<div className="">Cart Is Empty</div>)
                : (<>
                    <h2 className="text-xl">Shopping Cart</h2>
                    <div className="flex flex-col gap-8">
                        {/*ITEM*/}
                        <div className="flex gap-4">

                            <Image src="/product1.webp" alt="" width={72} height={96} className="object-cover rounded-md" />
                            <div className="flex flex-col justify-between w-full">
                                {/*Top*/}
                                <div className="">
                                    {/*Tittle*/}
                                    <div className="flex item-center justify-between gap-8">
                                        <h3 className="font-semibold">Product Name</h3>
                                        <div className=" p-1 bg-gray-50 rounded-sm">$94</div>
                                    </div>
                                    {/*Desc*/}
                                    <div className="text-sm text-gray-500">available</div>
                                </div>
                                {/*Bottom*/}
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Qty. 2</span>
                                    <span className="text-blue-500">Remove</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/*bottom*/}

                    <div className="">
                        <div className="flex items-center justify-between font-semibold">
                            <span className="">SubTotal</span>
                            <span className="">$94</span>
                        </div>
                        <p className="text-gray-500 text-sm mt-2 mb-4">Lorem ipsum dolor sit amet consectetur.</p>
                        <div className="flex justify-between text-sm">
                            <Link className="rounded-md py-3 px-4 ring-1 ring-gray-300" href="/cart">View Cart</Link>
                            <button className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>
                        </div>
                    </div>
                </>

                )}

        </div>
    )
}

export default CartModal