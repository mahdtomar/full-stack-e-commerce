import React, { useContext } from 'react'
import { useCart } from '../../hooks/useCart'
import './scss/cartsidebar.css'
import { loginContext } from '../../context/LoginStatus'
import { Link } from 'react-router-dom'
const CartSidebar = () => {
    const { cartTotals, cart } = useCart()
    const { subtotal, productCount, discountAmount, total, totalCost } = cartTotals
    const { user } = useContext(loginContext)
    const handleCheckOut = async () => {
        const order = {
            customer: user._id,
            items: cart,
            totalCost: totalCost,
            totalPrice: total,
        }
    }
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
            <Link to={'/check-out'}><button className="primary">Check Out</button></Link>
        </div>
    )
}

export default CartSidebar