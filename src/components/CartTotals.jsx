import React from 'react'
import { useSelector } from 'react-redux';
import { FaSoap } from 'react-icons/fa6';

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector((state) => state.cartState)
  return (
    <div className="card bag-base200">
        <div className="card-body">
            {/* SUBTOTAL */}
            <p className="flex justify-between text-xs border-b border-base-300 pb-2">
               <span>Subtotal</span> 
               <span className='font-medium'>
                    ${cartTotal / 100}
               </span>
            </p>
                {/* SHIPPING */}
                <p className="flex justify-between text-xs border-b border-base-300 pb-2">
               <span>Shipping</span> 
               <span className='font-medium'>
                    ${shipping / 100}
               </span>
            </p>
                {/* Tax */}
                        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
               <span>Tax</span> 
               <span className='font-medium'>
                    ${tax / 100}
               </span>
            </p>
                        {/* orderTotal */}
            <p className="flex justify-between text-sm mt-4 pb-2">
               <span>orderTotal</span> 
               <span className='font-medium'>
                    ${orderTotal / 100}
               </span>
            </p>
        </div>
    </div>
  )
}

export default CartTotals