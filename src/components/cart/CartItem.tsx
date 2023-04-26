import React from 'react'

function CartItem({ product }: { product: any }) {
    return (
        <li key={product.id} className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden border border-black">
                <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between font-sans text-base font-medium text-gray-900">
                        <h3>
                            <a href={product.href}>{product.name}</a>
                        </h3>
                        <p className="ml-4">{product.price}</p>
                    </div>
                    <p className="mt-1 font-sans text-sm text-gray-500">{product.color}</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="font-sans text-gray-500">Qty {product.quantity}</p>

                    <div className="flex">
                        <button type="button" className="font-medium font-sans hover:text-indigo-500">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CartItem
