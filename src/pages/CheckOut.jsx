import React from 'react'
import CustomerDetails from '../components/checkout/CustomerDetails'
import ShippingDetails from '../components/checkout/ShippingDetails'

const CheckOut = () => {

    return (
        <div className='check-out-page container'>
            <div className="flex2">
                <div className="details">
                    <CustomerDetails />
                    <ShippingDetails />
                </div>
                <div className="preview"></div>
            </div>
        </div>
    )
}

export default CheckOut