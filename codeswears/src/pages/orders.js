import React from 'react'

function Orders() {
  return (
    <div><section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">CODESWEAR.com</h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">Order ID: #32fc56</h1>

            <p class="leading-relaxed mb-4">Your order has been succesfully placed!</p>
            <div class="flex mb-4">
              <a class="flex mr-auto text-pink-500 border-b-2 border-pink-500 py-2 text-lg px-1">Item</a>
              <a class="flex ml-auto border-b-2 border-gray-300 py-2 text-lg px-1">Quantity</a>
              <a class="flex ml-auto border-b-2 border-gray-300 py-2 text-lg px-1">Total Price</a>
            </div>
            <div class="flex border-t border-gray-200 py-2">
              <span class="text-gray-500 md:w-auto w-1/3">Coding Hoodie for Coders</span>
              <span class="ml-auto text-gray-900">2</span>
              <span class="ml-auto text-gray-900">₹498</span>
            </div>
            <div class="flex border-t border-gray-200 py-2">
              <span class="text-gray-500 md:w-auto w-1/3">Coding Hoodie for Coders</span>
              <span class="ml-auto text-gray-900">2</span>
              <span class="ml-auto text-gray-900">₹498</span>
            </div>
            <div class="flex border-t border-gray-200 py-2">
              <span class="text-gray-500 md:w-auto w-1/3">Coding Hoodie for Coders</span>
              <span class="ml-auto text-gray-900">2</span>
              <span class="ml-auto text-gray-900">₹498</span>
            </div>

            <div class="flex mt-4">
              <span class="title-font font-medium text-2xl text-gray-900">Sub-Total: ₹2600</span>
              <button class="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Track Order</button>

            </div>
          </div>
          <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
        </div>
      </div>
    </section></div>
  )
}

export default Orders