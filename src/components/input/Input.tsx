import React from 'react'
import { inputType } from "../../types/types"
function Input({ placeholder, inputName, inputType, label }: inputType) {
    return (
        <div className='w-full flex flex-col'>
            <label className='text-gray-700 mb-2 capitalize text-sm'>{label}</label>
            <input type={inputType} placeholder={placeholder} name={inputName} className='ring-2 ring-gray-300 rounded-md w-full p-3' />
        </div>
    )
}

export default Input