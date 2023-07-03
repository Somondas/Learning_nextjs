import Link from 'next/link'
import React from 'react'
import mongoose, { connect } from "mongoose";
import handler from './api/hello';
import Product from '../models/Product';

function Tshirts({ products }) {
  console.log(products);
  return (
    <div className=' md:w-3/4 md:mx-auto'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full m-5 shadow-lg">
              <Link href={"/product/while-alive-eat-sleep-code"}>
                <Link href={""} className="block relative rounded overflow-hidden L-Affiliate-Tagged">
                  <img alt="ecommerce" className=" m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="https://m.media-amazon.com/images/I/51R70m41beL._UX679_.jpg" />
                </Link>
                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirt</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">DUDEME While Alive Eat Sleep Code</h2>
                  <p className="mt-1">$16.00</p>
                </div>
              </Link>
            </div>




          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connection.readyState[0]) {
    // return handler(req, res)
    await mongoose.connect(process.env.NEXT_PUBLIC_DATABASE);
  }
  let products = await Product.find()

  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  }
}

export default Tshirts