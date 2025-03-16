import { Link } from 'react-router-dom'
import './scss/ProductCard.css'
import star from './../../assets/icons/Star-thin.svg'
import { useEffect, useRef, useState } from 'react';
const ProductCard = ({ title, img, price, discount, id, rating }) => {
    const [isImageLoading, setIsImageLoading] = useState(true);
    const imagePlaceHolderRef = useRef(null)
    useEffect(() => {
        if (isImageLoading && img) {
            let imageTimeout = setTimeout(() => {
                if (imagePlaceHolderRef.current) {
                    imagePlaceHolderRef.current.innerHTML = "Image Not Found";
                }
            }, 3000);
            return () => clearTimeout(imageTimeout); 
        }
    }, [isImageLoading, img]);
    return (
        <Link to={`/user/store/${title}`} state={{ productId: id }}>
            <div className="product-card flexv">
                <div className="rating flex2">
                    <span>{rating > 0 ? rating.toFixed(2) : rating}</span><img src={star} alt="star icon" />
                </div>
                <div>
                    <div className='image-container'>
                        {/* Placeholder or Spinner */}
                        {isImageLoading && img && (
                            <div
                                ref={imagePlaceHolderRef}
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
                                }}>
                                Loading...
                            </div>
                        )}
                        {!img && <div className="placeholder" style={{ background: "#f0f0f0" }}>No Image</div>}
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
        </Link >
    )
}

export default ProductCard