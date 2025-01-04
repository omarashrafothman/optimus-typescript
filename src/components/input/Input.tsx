import React from 'react'

function Input({ placeholder, inputName, type, value, label }: inputType) {
    return (
        <div className='w-full flex flex-col '>
            <label className='text-gray-700 my-2  capitalize'>{label}</label>
            <input type={type} placeholder={placeholder} name={inputName} value={value} className='ring-1 ring-gray-300 rounded-md w-full p-2' />
        </div>
    )
}

export default Input