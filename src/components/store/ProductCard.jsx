import { Link } from 'react-router-dom'
import './scss/ProductCard.css'
import star from './../../assets/icons/Star-thin.svg'
import { useEffect, useRef, useState } from 'react';
import DiscountedPrice from '../misc/discountedPrice/DiscountedPrice';
import { useCart } from '../../hooks/useCart';
const ProductCard = ({ title, img, price, discount, id, rating, cloudinary_url, discountPercentage, basePrice }) => {
    const [isImageLoading, setIsImageLoading] = useState(true);
    const imagePlaceHolderRef = useRef(null)
    const { addToCart } = useCart()
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
        <div className="product-card flexv">
            <Link to={`/store/${title}`} state={{ productId: id }}>
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
                        {!img && !cloudinary_url && <div className="placeholder" style={{ background: "#f0f0f0" }}>No Image</div>}
                        <img src={cloudinary_url} alt={title} onLoad={() => { setIsImageLoading(false) }} />
                    </div>
                    <p className="title">{title}</p>
                </div>
            </Link>
            <div>
                <Link to={`/store/${title}`} state={{ productId: id }}>
                    <DiscountedPrice discountPercentage={discountPercentage} finalPrice={price} basePrice={basePrice} size={'m'} />
                </Link>
                <button className="primary" onClick={() => { addToCart(id) }}>Add To Cart</button>
            </div>
        </div>

    )
}

export default ProductCard