import React from 'react'

function Input({ placeholder, inputName, inputType, value, label }: inputType) {
    return (
        <div className='w-full flex flex-col '>
            <label className='text-gray-700 mb-2  capitalize text-sma'>{label}</label>
            <input type={inputType} placeholder={placeholder} name={inputName} value={value} className='ring-2 ring-gray-300 rounded-md w-full p-3' />
        </div>
    )
}

export default Input