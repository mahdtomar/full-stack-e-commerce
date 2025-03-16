import React, { useEffect, useRef, useState } from 'react'
import Counter from '../Product/Counter'
import './scss/cartProductCard.css'
const CartProductCard = ({ img, title, price, quantity, briefDescription }) => {
    const [count, setCount] = useState(quantity || 1)
    const descriptionRef = useRef(null)
    useEffect(() => {
        descriptionRef.current.innerHTML = briefDescription
    }, [])
    return (
        <div className='cart-product-card flex2'>
            <div className="image-container">
                <img src={img} alt={title} />
            </div>
            <div className="info flexv">
                <div className="wrapper">
                    <div className="flex2 title-container">
                        <p className='title'>{title}</p>
                        <p className="price">{price} USD</p>
                    </div>
                    <div className="description" ref={descriptionRef}>{briefDescription}</div>
                </div>
                <div className="wrapper">
                    <div className="total">{price * count} USD</div>
                    <div className="flex2 options">
                        <div className="counter-container flex2">
                            <Counter count={count} setCount={setCount} min={1} />
                            <button className="delete primary">Delete</button>
                        </div>
                        <button className="primary">Product Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProductCard