import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { BsCart2 } from 'react-icons/bs';
import { AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';

function Navbar({ cart, addToCart, removeFromCart, clearCart, subTotal }) {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full")
      ref.current.classList.add("translate-x-0")
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.add("translate-x-full")
      ref.current.classList.remove("translate-x-0")
    }
  }
  const ref = useRef()
  return (
    <div className='flex flex-col md:flex-row md:justify-start items-center justify-center py-4 sticky top-0 bg-white shadow-md z-10' >
      <div className="logo">
        <Image width={200} height={40} className='mx-5' src="/logo-long.png" alt="" />
      </div>
      <div className="nav">
        <ul className='flex items-center space-x-2 font-bold'>
          <Link href={"/tshirts"}><li>Tshirts</li></Link>
          <Link href={"/hoodies"}><li>Hoodies</li></Link>
          <Link href={"/stickers"}><li>Stickers</li></Link>
          <Link href={"/mugs"}><li>Mugs</li></Link>
        </ul>
      </div>
      <div onClick={toggleCart} className="cart absolute right-0 top-4 mx-5 cursor-pointer">
        <BsCart2 className='text-xl md:text-3xl border-pink-500 border-[3px] rounded-full px-1' />
      </div>

      <div ref={ref} className="sidebar absolute w-72 px-8 py-10 top-0 h-[100vh] right-0 bg-pink-100 shadow-md p-10 transform transition-transform translate-x-full">
        <h2 className="font-bold text-xl">Shopping Cart</h2>
        <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500">
          <AiFillCloseCircle />
        </span>
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
        <div className="flex">
          <Link href={"/checkout"}>
            <button class="flex mx-auto text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded text-lg">Checkout</button>
          </Link>
          <button
            onClick={() => clearCart()}
            class="flex mx-auto text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded text-lg">Clear Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar