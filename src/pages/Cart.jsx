import React, { useEffect, useState } from 'react'
import Navbar from '../components/misc/navbar/Navbar'
import Footer from '../components/misc/footer/Footer'
import Request from '../Api/Axios'
import CartProductCard from '../components/Cart/CartProductCard'
import CartSidebar from '../components/Cart/CartSidebar'

const Cart = () => {
    const [cart, setCart] = useState([])
    const getCart = async () => {
        const userCart = await Request("/get-cart", "GET", true)
        setCart(userCart.data)
        console.log(userCart)
    }
    useEffect(() => {
        getCart()
    }, [])
    return (
        <>
            <Navbar />
            {/* { img, title, price, count, description } */}
            <div className="container">
                {cart.map(({ count, product }) => {
                    return <CartProductCard key={product._id} img={product.image} title={product.title} price={product.basePrice} quantity={count} briefDescription={product.briefDescription} />
                })}
                <CartSidebar />
            </div>
            <Footer />
        </>
    )
}

export default Cart