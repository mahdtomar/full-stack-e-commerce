import { Link } from 'react-router-dom'
import './scss/ProductCard.css'
const ProductCard = ({ title, img, price, discount, }) => {

    return (
        <Link to={`${title}`}>
            <div className="product-card flexv">
                <div className='image-container'>
                    <img src={img} alt={title} />
                </div>
                <p className="title">{title}</p>
                <div className="price-container flex2">
                    {discount && <div className='discount flex2'>
                        <span className='old-price'>{price}</span>
                        <span className='discount-percentage'>{100 - (discount / price * 100)}%</span>
                    </div>}
                    <span className="price-tag">{discount ? discount : price} USD</span>
                </div>
                <button className="primary">Add To Cart</button>
            </div>
        </Link>
    )
}

export default ProductCard