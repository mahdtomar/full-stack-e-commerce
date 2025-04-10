import React from 'react'
import './scss/discountedPrice.css'
const DiscountedPrice = ({ discountPercentage, basePrice, finalPrice, size }) => {
    return (
        <div className={`price-container flex2 ${size}`}>
            {discountPercentage > 0 && <div className='discount flex2'>
                <span className='old-price'>{basePrice}</span>
                <span className='discount-percentage'>{discountPercentage}%</span>
            </div>}
            <span className="price-tag">{finalPrice} EGP</span>
        </div>
    )
}

export default DiscountedPrice