import React, { useContext, useState } from 'react'
import { useCart } from '../hooks/useCart'
import { loginContext } from '../context/LoginStatus'
import log from '../util/Log'
import { useNotification } from './../hooks/useNotification'
import Request from './../Api/Axios'
import LoginPopup from '../components/login/LoginPopup'
const CheckOutButton = () => {
    const { cartTotals, cart } = useCart()
    const { total, totalCost } = cartTotals
    const { user } = useContext(loginContext)
    const [showLoginPopus, setShowLoginPopup] = useState(false)
    const { showNotification } = useNotification()
    const handleCheckOut = async () => {
        const products = cart.map(({ count, product }) => ({
            product_id: product._id,
            quantity: count || 1,
        }))
        if (!user) {
            showNotification("error", "Please Login First")
            setShowLoginPopup(true)
            return
        }
        const res = await Request('/create-order', "POST", true, undefined, undefined, { products, totalAmount: total, totalCost: totalCost })
        log("order", res)
    }
    return (
        <div className='check-out-page container'>
            <div className="flex2">
                <button className="primary" onClick={handleCheckOut}>Checkout</button>
            </div>
            {showLoginPopus && <LoginPopup setShowLoginPopup={setShowLoginPopup} />}
        </div>
    )
}

export default CheckOutButton