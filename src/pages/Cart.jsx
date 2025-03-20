import React, { useContext, useEffect, useState } from 'react'
import Request from '../Api/Axios'
import CartProductCard from '../components/Cart/CartProductCard'
import CartSidebar from '../components/Cart/CartSidebar'
import './scss/cart.css'
import { useCart } from '../hooks/useCart'
import { loginContext } from '../context/LoginStatus'
const Cart = () => {
    const { isLogged } = useContext(loginContext)
    const { cart, getUserCart } = useCart()
    console.log(cart)
    useEffect(() => {
        if (isLogged) {
            getUserCart();
        }
    }, [getUserCart]);

    return (
        <>
            {/* { img, title, price, count, description } */}
            <div className="cart-page-root container flex2">
                {
                    !isLogged && <div>
                        In order to access the cart You Need To Login First
                    </div>
                }
                <div className="cart-items">
                    {cart.map(({ count, product }) => {
                        if (product.deleted) {
                            return <div>deleted</div>
                        }
                        return <CartProductCard key={product._id} id={product._id} img={product.image} title={product.title} price={product.basePrice} quantity={count || 1} briefDescription={product.briefDescription} />
                    })}
                    {cart.length === 0 && <div>Your cart is empty</div>}
                </div>
                <CartSidebar />
            </div>
        </>
    )
}

export default Cart