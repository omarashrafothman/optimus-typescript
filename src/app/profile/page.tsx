"use client"
import OrderTable from '@/components/orderTable/OrderTable'
import React from 'react'
import orders from "../../locals/orders.json";
import Input from '@/components/input/Input';

function Profile() {

    return (
        <div className='flex flex-col md:flex-row gap-24  h-[calc(100vh-180px)] items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
            <div className='w-full md:w-1/2'>
                <div className='md:w-full lg:w-3/4  flex flex-col'>
                    <form className='w-full px-2'>
                        <Input placeholder={"John Deo"} label={"username"} inputType={"text"} inputName={"username"} />
                        <Input placeholder={"email@example.com"} label={"email"} inputType={"email"} inputName={"email"} />
                        <Input placeholder={"password"} label={"password"} inputType={"password"} inputName={"password"} />
                        <div className='flex justify-end my-2'>
                            <button className='bg-lama text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed max-w-96' >Update</button>
                        </div>
                    </form>


                </div>
            </div>
            <div className='w-full md:w-1/2'>
                <OrderTable content={orders} />
            </div>
        </div>
    )
}

export default Profile