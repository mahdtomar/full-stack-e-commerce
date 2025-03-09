import HeartIcon from './HeartIcon'
import './scss/header.css'
import RatingParser from '../../util/RatingParser'
import Request from '../../Api/Axios'
const Header = ({ title, image, briefDescription, price, discount, rating, id }) => {
    const addToCart = async () => {
        const payload = {
            productId: id,
            count: 1,
            price: discount ? discount : price
        }
        console.log(payload)
        const res = await Request("/add-to-cart", "POST", true, undefined, undefined, JSON.stringify(payload))
        console.log(res)
    }
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
                        <button className="primary" onClick={addToCart}>add to cart</button>
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