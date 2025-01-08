import { Link } from 'react-router-dom'
import './scss/ProductCard.css'
import { useState } from 'react';
const ProductCard = ({ title, img, price, discount, }) => {
    const [isImageLoading, setIsImageLoading] = useState(true);

    return (
        <Link to={`/store/${title}`}>
            <div className="product-card flexv">
                <div>
                    <div className='image-container'>
                        {/* Placeholder or Spinner */}
                        {isImageLoading && (
                            <div
                                className="placeholder"
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    background: "#f0f0f0",
                                }}
                            >
                                Loading...
                            </div>
                        )}
                        <img src={img} alt={title} onLoad={() => { setIsImageLoading(false) }} />
                    </div>
                    <p className="title">{title}</p>
                </div>
                <div>
                    <div className="price-container flex2">
                        {discount && <div className='discount flex2'>
                            <span className='old-price'>{price}</span>
                            <span className='discount-percentage'>{100 - (discount / price * 100)}%</span>
                        </div>}
                        <span className="price-tag">{discount ? discount : price} USD</span>
                    </div>
                    <button className="primary">Add To Cart</button></div>
            </div>
        </Link>
    )
}

export default ProductCard