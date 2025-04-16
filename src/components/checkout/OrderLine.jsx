import React from 'react'
import './scss/orderLine.css'
import deleteIcon from './../../assets/icons/trash.svg'
const OrderLine = ({ img, title, quantity, total }) => {
    return (
        <div className='checkout-order-line flex2'>
            <div className="wrapper flex2">
                <div className="image-container">
                    <img src={img} alt={title} />
                </div>
                <p className='title sm-text'>{title}</p>
            </div>
            <div className="wrapper flex2">
                <div className="flex2 countxtotal">
                    <span>{quantity}</span>
                    <span className='poppins-bold'>{total}USD</span>
                </div>
                <div className="deleteIcon cursor-pointer ">
                    <img src={deleteIcon} alt="delete icon" className='cursor-pointer ' />
                </div>
            </div>
        </div>
    )
}

export default OrderLine