import HeartIcon from './HeartIcon'
import './scss/header.css'
import RatingParser from '../../util/RatingParser'
import Request from '../../Api/Axios'
import { useContext, useEffect, useState } from 'react'
import { useNotification } from '../../hooks/useNotification'
import Counter from './Counter'
import log from '../../util/Log'
import DiscountedPrice from '../misc/discountedPrice/DiscountedPrice'
import { loginContext } from '../../context/LoginStatus'
const Header = ({ title, image, briefDescription, price, discount, rating, id, discountPercentage, basePrice }) => {
    const { showNotification } = useNotification()
    const [count, setCount] = useState(1)
    const [disabled, setDisabled] = useState(false)
    const { user, isLogged } = useContext(loginContext)
    const [favorite, setFavorite] = useState(false)
    const addToCart = async () => {
        const payload = {
            productId: id,
            count: count,
            price: discount ? discount : price
        }
        log("single product payload", payload)
        const res = await Request("/add-to-cart", "POST", true, undefined, undefined, JSON.stringify(payload))
        showNotification("success", "Added To Cart")
        log("single product response", res)
    }
    const checkFav = async () => {
        const res = await Request(`/checkFav/${user._id}/${id}`, "GET", true)
        if (res.data) {
            setFavorite(true)
        }
        console.log(res)
    }
    const addtoFav = async () => {
        setDisabled(true)
        const res = await Request("/favorit", "POST", true, undefined, undefined, JSON.stringify({ id }))
        setDisabled(false)
        console.log(res)
    }
    useEffect(() => { log("header renders"); if (isLogged) { checkFav() } }, [id])
    return (
        <div className="product-header-root">
            <div className="container flex2">
                <div className="info flexv">
                    <h1>{title}</h1>
                    <p>{briefDescription}</p>
                    <div className="price-rating flex2">
                        <DiscountedPrice basePrice={basePrice} finalPrice={price} discountPercentage={discountPercentage} />
                        <RatingParser rating={rating} />
                    </div>
                    <div className="cta flex2">
                        <button className="primary" onClick={addToCart}>add to cart</button>
                        <Counter count={count} setCount={setCount} min={1} />
                        <button className={`favorit`} disabled={disabled} onClick={addtoFav}><HeartIcon favorite={favorite} setFavorite={setFavorite} /></button>
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