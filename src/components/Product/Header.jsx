import HeartIcon from './HeartIcon'
import './scss/header.css'
import RatingParser from '../../util/RatingParser'
import Request from '../../Api/Axios'
import { useContext, useEffect, useState } from 'react'
import { useNotification } from '../../hooks/useNotification'
import Counter from './Counter'
const Header = ({ title, image, briefDescription, price, discount, rating, id }) => {
    const { showNotification } = useNotification()
    const [count, setCount] = useState(1)
    const addToCart = async () => {
        const payload = {
            productId: id,
            count: count,
            price: discount ? discount : price
        }
        console.log(payload)
        const res = await Request("/add-to-cart", "POST", true, undefined, undefined, JSON.stringify(payload))
        showNotification("success", "Added To Cart")
        console.log(res)
    }
    useEffect(() => { console.log("header renders") }, [])
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
                        <Counter count={count} setCount={setCount} min={1} />
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