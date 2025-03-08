import React, { useState } from 'react'
import Counter from '../Product/Counter'
import './scss/cartProductCard.css'
const CartProductCard = ({ img, title, price, count, description }) => {
    const [count, setCount] = useState(count)
    return (
        <div className='cart-product-card flex2'>
            <div className="image-container">
                <img src={img} alt={title} />
            </div>
            <div className="info">
                <div className="flex2">
                    <p className='title'>{title}</p>
                    <span className="price">{price} USD</span>
                </div>
                <div className="description">{description}</div>
                <div className="total">{price * count}</div>
                <div className="flex2">
                    <div className="counter-container flex2">
                        <Counter count={count} setCount={setCount} />
                        <button className="delete">Delete</button>
                    </div>
                    <button className="primary">Product Details</button>
                </div>
            </div>
        </div>
    )
}

export default CartProductCard