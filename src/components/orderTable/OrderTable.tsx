import React from 'react'
import { orderType } from '@/types/types'
function OrderTable({ content }: orderType) {
    return (
        <table className="table-auto rounded-2xl w-full ">
            <thead className='bg-lama '>
                <tr className='bg-gray-200 '>
                    <th className='py-3 '>ID</th>
                    <th className='py-3 '>Time</th>
                    <th className='py-3 '>Status</th>
                </tr>
            </thead>
            <tbody className='even:bg-slate-100'>
                <tr className='hover:bg-green-50 rounded-md'>
                    <td className='text-center py-3 '>1</td>
                    <td className='text-center py-3 '>Malcolm Lockyer</td>
                    <td className='text-center py-3 '>pending</td>
                </tr>
                <tr className='hover:bg-green-50 rounded-md'>
                    <td className='text-center py-3'>2</td>
                    <td className='text-center py-3'>Malcolm Lockyer</td>
                    <td className='text-center py-3'>success</td>
                </tr>
                <tr className='hover:bg-green-50 rounded-md'>
                    <td className='text-center py-3'>2</td>
                    <td className='text-center py-3'>Malcolm Lockyer</td>
                    <td className='text-center py-3'>success</td>
                </tr>


            </tbody>
        </table>
    )
}

export default OrderTable