import React from 'react'
import CustomerDetails from '../components/checkout/CustomerDetails'
import ShippingDetails from '../components/checkout/ShippingDetails'
import PaymentMethod from '../components/checkout/PaymentMethod'
import CartPreview from '../components/checkout/CartPreview'
import './scss/checkout.css'
import PreviewOrderDetails from '../components/checkout/PreviewOrderDetails'
import CheckOutButton from '../components/checkout/CheckOutButton'
const CheckOut = () => {

    return (
        <div className='check-out-page container flex2'>
            <div className="details">
                <CustomerDetails />
                <ShippingDetails />
                <PaymentMethod />
            </div>
            <div className="sidebar-preview">
                <h2>Order Details</h2>
                <CartPreview />
                <PreviewOrderDetails />
                <CheckOutButton />
            </div>
        </div>
    )
}

export default CheckOut