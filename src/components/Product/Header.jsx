import { useState, useEffect } from 'react'
import HeartIcon from './HeartIcon'
import fullStar from './../../assets/icons/FullStar.svg'
import halfStar from './../../assets/icons/StarHalf.svg'
import emptyStar from './../../assets/icons/Empty-Star.svg'
import './scss/header.css'
const Header = ({ title, image, description, price, discount, rating }) => {
    const [starCount, setStarCount] = useState(0)
    const [isHalf, setIsHalf] = useState(false)
    const [emptyStars, setEmptyStart] = useState(0)
    const calculateRating = () => {
        const fullStars = Math.round(rating)
        console.log(fullStars)
        const halfStars = rating % 1 >= 0.25 && rating % 1 < 0.5
        setEmptyStart(5 - (fullStars + halfStars))
        setStarCount(fullStars)
        setIsHalf(halfStars)
    }
    useEffect(() => { calculateRating() }, [])
    return (
        <div className="product-header-root">
            <div className="container flex2">
                <div className="info flexv">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <div className="price-rating flex2">
                        <div className="price-container flex2">
                            {discount && <div className='discount flex2'>
                                <span className='old-price'>{price}</span>
                                <span className='discount-percentage'>{100 - (discount / price * 100)}%</span>
                            </div>}
                            <span className="price-tag">{discount ? discount : price} EGP</span>
                        </div>
                        <div className="rating flex2">
                            {isHalf && starCount < 4 ? Array(starCount).fill(0).map((e, i) => { return <img key={i} src={fullStar} alt={"star icon"} /> }) : Array(starCount).fill(0).map((e, i) => { return <img key={i} src={fullStar} alt={"star icon"} /> })}
                            {isHalf && <img src={halfStar} alt="half star icon" />}{Array(emptyStars).fill(0).map((e, i) => <img key={i} src={emptyStar} alt="Empty Star" />)}
                        </div>
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