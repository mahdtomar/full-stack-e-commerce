import HeartIcon from './HeartIcon'
import './scss/header.css'
import RatingParser from '../../util/RatingParser'
const Header = ({ title, image, briefDescription, price, discount, rating }) => {
    return (
        <div className="product-header-root">
            <div className="container flex2">
                <div className="info flexv">
                    <h1>{title}</h1>
                    <p>{briefDescription}</p>
                    <div className="price-rating flex2">
                        <div className="price-container flex2">
                            {discount && <div className='discount flex2'>
                                <span className='old-price'>{price}</span>
                                <span className='discount-percentage'>{100 - (discount / price * 100)}%</span>
                            </div>}
                            <span className="price-tag">{discount ? discount : price} EGP</span>
                        </div>
                        <RatingParser rating={rating} />
                    </div>
                    <div className="cta flex2">
                        <button className="primary">add to cart</button>
                        <button className="favorit"><HeartIcon /></button>
                    </div>
                </div>
                <div className="gallery">
                    <img src={image} alt={title} />
                </div>
            </div>
        </div>
    )
}

export default Header