import React, { useEffect, useState } from 'react'
import Request from '../Api/Axios'
import CartProductCard from '../components/Cart/CartProductCard'
import CartSidebar from '../components/Cart/CartSidebar'
import './scss/cart.css'
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
            {/* { img, title, price, count, description } */}
            <div className="cart-page-root container flex2">
                <div className="cart-items">
                    {cart.map(({ count, product }) => {
                        if (product.deleted) {
                            return <div>deleted</div>
                        }
                        return <CartProductCard key={product._id} img={product.image} title={product.title} price={product.basePrice} quantity={count} briefDescription={product.briefDescription} />
                    })}
                    {cart.length === 0 && <div>Your cart is empty</div>}
                </div>
                <CartSidebar />
            </div>
        </>
    )
}

export default Cart