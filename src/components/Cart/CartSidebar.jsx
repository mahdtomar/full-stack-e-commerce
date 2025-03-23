import React from 'react'
import { useCart } from '../../hooks/useCart'
import './scss/cartsidebar.css'
const CartSidebar = () => {
    const { cartTotals } = useCart()
    const { subtotal, productCount, discountAmount, total } = cartTotals
    return (
        <div className='cart-sidebar-root flexv'>
                <header>Cart Summery</header>
            <div className="checkout-box flexv">
                <div className="flex2">
                    <p>Product Count : </p>
                    <span>{productCount} USD</span>
                </div>
                <div className="flex2">
                    <p>SubTotal : </p>
                    <span>{subtotal} USD</span>
                </div>
                <div className="flex2">
                    <p>total discount : </p>
                    <span>{discountAmount} USD</span>
                </div>
                <div className="flex2">
                    <p>Total : </p>
                    <span>{total} USD</span>
                </div>
            </div>
                <button className="primary">Check Out</button>
        </div>
    )
}

export default CartSidebar