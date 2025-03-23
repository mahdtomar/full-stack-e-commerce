import React, { useContext } from 'react'
import { useCart } from '../hooks/useCart'
import { loginContext } from '../context/LoginStatus'

const CheckOut = () => {
    const { cartTotals, cart } = useCart()
    const { total, totalCost } = cartTotals
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
        <div>CheckOut</div>
    )
}

export default CheckOut