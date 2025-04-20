import React, { useContext, useState } from 'react'
import { useCart } from './../../hooks/useCart'
import { loginContext } from '../../context/LoginStatus'
import log from '../../util/Log'
import { useNotification } from './../../hooks/useNotification'
import Request from './../../Api/Axios'
import LoginPopup from '../../components/login/LoginPopup'
import { CustomerOrderContext } from '../../context/CustomerOrderProvider'
const CheckOutButton = () => {
    const { cartTotals, cart, clearCart } = useCart()
    const { total } = cartTotals
    const { user } = useContext(loginContext)
    const [showLoginPopus, setShowLoginPopup] = useState(false)
    const { showNotification } = useNotification()
    const { customerDetails, shippingDetails, paymentMethod } = useContext(CustomerOrderContext)
    const handleCheckOut = async () => {
        if (!user) {
            showNotification("error", "Please Login First")
            setShowLoginPopup(true)
            return
        }
        const products = cart.map(({ count, product }) => ({
            product_id: product._id,
            quantity: count || 1,
        }))
        const payload = JSON.stringify({
            customer: customerDetails,
            items: products,
            totalPrice: total,
            shipping: shippingDetails,
            payment: {
                method: paymentMethod === "onDelivery" ? "On Delivery" : " Credit Card"
            }
        })
        try {
            const res = await Request('/create-order', "POST", true, undefined, undefined, payload)
            log("order", res)
            clearCart()
        } catch (error) {
            log("error in checkOut : ", error)
        }
    }
    return (
        <>
            <div className="flex2">
                <button className="primary" onClick={handleCheckOut}>Checkout</button>
            </div>
            {showLoginPopus && <LoginPopup setShowLoginPopup={setShowLoginPopup} />}
        </>
    )
}

export default CheckOutButton