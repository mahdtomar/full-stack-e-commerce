import React, { useContext, useEffect, useState } from 'react'
import Request from '../Api/Axios'
import CartProductCard from '../components/Cart/CartProductCard'
import CartSidebar from '../components/Cart/CartSidebar'
import './scss/cart.css'
import { useCart } from '../hooks/useCart'
import { loginContext } from '../context/LoginStatus'
import LoginPopup from '../components/login/LoginPopup'
const Cart = () => {
    const { isLogged } = useContext(loginContext)
    const { cart, getUserCart } = useCart()
    const [showLoginPopus, setShowLoginPopup] = useState()
    console.log(cart)
    useEffect(() => {
        if (isLogged) {
            getUserCart();
        }
    }, [getUserCart, isLogged]);
    if (!isLogged) {
        return <>
            <div style={{ textAlign: "center", margin: "20px auto" }}>
                In order to access the cart You Need To <button className='primary' onClick={() => { setShowLoginPopup(true) }}>login</button> First
            </div>
            {showLoginPopus && <LoginPopup setShowLoginPopup={setShowLoginPopup} />}
        </>
    }
    return (
        <>
            {/* { img, title, price, count, description } */}
            <div className="cart-page-root container flex2">
                <div className="cart-items flexv">
                    {cart.map(({ count, product }) => {
                        if (!product) {
                            return "this item is not availabe"
                        }
                        return <CartProductCard key={product._id} id={product._id} img={product.image} title={product.title} price={product.basePrice} quantity={count || 1} briefDescription={product.briefDescription} cloudinary_url={product.cloudinary_url} />
                    })}
                    {cart.length === 0 && <div>Your cart is empty</div>}
                </div>
                <CartSidebar />
            </div>
        </>
    )
}

export default Cart