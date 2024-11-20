import React from 'react'

const TopDealsCard = ({ title, price, discount, img, cardColor }) => {
    return (
        <div className='topdeals-card flexv' style={{ backgroundColor: cardColor }}>
            <div className="price flex2">
                <span>${price - discount}</span>
                <p>${price}</p>
            </div>
            <img src={img} alt={title} />
            <p className="title">{title}</p>
            <button className="primary">Add To Cart</button>
        </div>
    )
}

export default TopDealsCard