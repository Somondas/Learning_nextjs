import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsCart2 } from 'react-icons/bs';
function Navbar() {
  return (
    <div className='flex flex-col md:flex-row md:justify-start items-center justify-center py-4' >
      <div className="logo">
        <Image width={200} height={40} className='mx-5' src="/logo-long.png" alt="" />
      </div>
      <div className="nav">
        <ul className='flex items-center space-x-2 font-bold'>
          <Link href={"/"}><li>Tshirts</li></Link>
          <Link href={"/"}><li>Hoodies</li></Link>
          <Link href={"/"}><li>Stickers</li></Link>
          <Link href={"/"}><li>Mugs</li></Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-4 mx-5">
        <BsCart2 className='text-xl md:text-3xl border-pink-500 border-[3px] rounded-full px-1' />
      </div>
    </div>
  )
}

export default Navbar