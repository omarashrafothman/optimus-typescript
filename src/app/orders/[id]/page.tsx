import React from 'react'
import Link from 'next/link';
function OrderPage({ params }: { params: { id: string } }) {
    const id = params.id;
    return (
        <div className="flex flex-col h-[calc(100vh-180px)] items-center justify-center ">
            <div className="shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] px-20 py-20 rounded-3xl">
                <h1 className="text-xl">Order Details</h1>
                <div className="mt-10 flex flex-col gap-5">
                    <div className="">
                        <span className="font-medium">Order Id: </span>
                        <span>{id}</span>
                    </div>
                    <div className="">
                        <span className="font-medium">Receiver Name: </span>
                        <span>

                        </span>
                    </div>
                    <div className="">
                        <span className="font-medium">Receiver Email: </span>
                        <span></span>
                    </div>
                    <div className="">
                        <span className="font-medium">Price: </span>
                        <span></span>
                    </div>
                    <div className="">
                        <span className="font-medium">Payment Status: </span>
                        <span></span>
                    </div>
                    <div className="">
                        <span className="font-medium">Order Status: </span>
                        <span></span>
                    </div>
                    <div className="">
                        <span className="font-medium">Delivery Address: </span>
                        <span>

                        </span>
                    </div>
                </div>
            </div>
            <Link href="/" className="underline mt-6">
                Have a problem? Contact us
            </Link>
        </div>
    )
}

export default OrderPage