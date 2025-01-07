import React from 'react'

function CustomizeProduct({ attributes }: { attributes: Attribute[] }) {

    if (!attributes) {
        return <div>Loading...</div>;
    }
    if (attributes.length === 0) {

        return <div>No attributes Available</div>
    }
    return (
        <div className="flex flex-col gap-6">
            {attributes.map((attribute, index) => (
                <div key={index}>
                    {attribute.type === 'color' && (
                        <>
                            <h4 className="font-medium">Choose a {attribute.type}</h4>
                            <div className="flex items-center gap-3">
                                {attribute.colors.map((colorItem, i) => (
                                    <div
                                        key={i}
                                        className={`w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative`}
                                        style={{ backgroundColor: colorItem.value }}
                                    >
                                        {!colorItem.available && (
                                            <div className="absolute w-10 h-[2px] rotate-45 bg-red-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {attribute.sizes && attribute.type === 'size' && (
                        <>
                            <h4 className="font-medium">Choose a {attribute.type}</h4>
                            <div className="flex items-center gap-3">

                                {attribute.sizes.map((size, i) => (


                                    <div
                                        key={i}
                                        className={`ring-1 text-sm rounded-md py-1 px-4 cursor-pointer ${size.sizeName === 'medium' ? 'ring-lama text-white bg-lama' : 'ring-gray-300'}`}
                                        style={{ cursor: size.sizeName === 'large' ? 'not-allowed' : 'pointer' }}
                                    >
                                        {size.sizeName}
                                    </div>

                                ))}
                            </div>
                        </>
                    )}

                </div>
            ))}
        </div>
    )
}

export default CustomizeProduct