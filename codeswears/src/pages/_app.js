import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {

  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
      console.error(error);
      localStorage.clear()
    }


  }, [])

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart))
    let subT = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subT += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subT)
  }
  // >> Add To Cart
  const addToCart = (itemCode, qty, price, size, variant, name) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant }
    }
    setCart(newCart)
    saveCart(newCart)
  }
  // >> Clear Cart
  const clearCart = () => {
    setCart({})
    saveCart({})
  }

  // >> Remove From Cart
  const removeFromCart = (itemCode, qty, price, size, variant, name) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart)
    saveCart(newCart)
  }
  return <>
    <Navbar addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} cart={cart} subTotal={subTotal} />
    <Component addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} cart={cart} subTotal={subTotal} {...pageProps} />
    <Footer />
  </>
}
