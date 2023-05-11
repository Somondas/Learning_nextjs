import React from 'react'
import Link from 'next/link'
import { BsCart2 } from 'react-icons/bs';
import { AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';

function Checkout({ cart, addToCart, removeFromCart, subTotal }) {
  return (
    <div className='container m-auto md:w-4/5 px-5 md:px-0'>
      <h1 className='font-bold text-3xl my-8 text-center'>Checkout</h1>
      <h2 className='text-lg font-bold '>1. Delivery Details</h2>
      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div class=" mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div class=" mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <div className="px-2 w-full">
        <div class=" mb-4">
          <label for="address" class="leading-7 text-sm text-gray-600">Address</label>
          <textarea cols="30" rows="2" type="text" id="address" name="address" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
        </div>
      </div>
      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div class=" mb-4">
            <label for="phone" class="leading-7 text-sm text-gray-600">Phone</label>
            <input type="text" id="phone" name="phone" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div class=" mb-4">
            <label for="city" class="leading-7 text-sm text-gray-600">City</label>
            <input type="text" id="city" name="city" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div class=" mb-4">
            <label for="state" class="leading-7 text-sm text-gray-600">State</label>
            <input type="text" id="state" name="state" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div class=" mb-4">
            <label for="pincode" class="leading-7 text-sm text-gray-600">PIN Code</label>
            <input type="text" id="pincode" name="pincode" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <h1 className='mt-4 text-lg font-semibold'>2. Review Cart Items & Pay</h1>
      <div className="sidebar  w-full my-4  right-0 bg-pink-100 shadow-md p-10 ">
        <ol>
          {Object.keys(cart).length === 0 && <div className='my-4 font-semibold'>Cart is empty!</div>}
          {Object.keys(cart).map((key) => {
            return <li>
              <div className="item flex my-5">
                <div className=" w-2/3 font-semibold">{cart[key].name}</div>
                <div className=" w-1/3 flex font-semibold items-center justify-center text-lg">
                  <AiFillMinusCircle
                    onClick={() => removeFromCart(key, 1, cart[key].price, cart[key].size, cart[key].variant, cart[key].name)}
                    className='text-pink-400 cursor-pointer' />
                  <span className="mx-2">{cart[key].qty}</span>
                  <AiFillPlusCircle
                    onClick={() => addToCart(key, 1, cart[key].price, cart[key].size, cart[key].variant, cart[key].name)}
                    className='text-pink-400 cursor-pointer' />

                </div>
              </div>
            </li>
          })}
        </ol>
        <span className="subtotal">
          Subtotal: ₹{subTotal}
        </span>
      </div>
      <Link href={"/checkout"}>
        <button class=" text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded text-lg">Pay ₹{subTotal}</button>
      </Link>
    </div>
  )
}

export default Checkout