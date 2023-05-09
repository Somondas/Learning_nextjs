import React from 'react'

function Checkout() {
  return (
    <div className='container m-auto md:w-4/5 px-5 md:px-0'>
      <h1 className='font-bold text-3xl my-8 text-center'>Checkout</h1>
      <h2>1. Delivery Details</h2>
      <div className="mx-auto">
        <div className="px-2 w-1/2">
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout