import React, { useEffect, useRef, useState } from 'react'
import Counter from '../Product/Counter'
import './scss/cartProductCard.css'
import { useCart } from '../../hooks/useCart'
import Request from '../../Api/Axios'
import { Link } from 'react-router-dom'
import DiscountedPrice from '../misc/discountedPrice/DiscountedPrice'
const CartProductCard = ({ id, title, price, quantity, briefDescription, cloudinary_url, discountPercentage, basePrice }) => {
    const [count, setCount] = useState(quantity)
    const descriptionRef = useRef(null)
    const { deleteCartItem, getUserCart, } = useCart()
    const updateCountRef = useRef(null)

    const updateProductCount = async () => {
        const updateItem = await Request(`/updateCartItem/${id}`,
            "PUT",
            true,
            undefined,
            undefined, JSON.stringify({ count: count }))
        console.log("update request", updateItem.data)
        getUserCart()
    }
    useEffect(() => {
        if (count !== quantity) {
            if (updateCountRef.current) {
                clearTimeout(updateCountRef.current)
            }
            updateCountRef.current = setTimeout(updateProductCount, 1000)
        }
        return () => {
            if (updateCountRef.current) {
                clearTimeout(updateCountRef.current)
            }
        }
    }, [count])
    useEffect(() => {
        descriptionRef.current.innerHTML = briefDescription
    }, [])
    console.log(discountPercentage)
    return (
        <div className='cart-product-card flex2'>
            <div className="image-container">
                {cloudinary_url === "no-image" ? <p className="no-image">no image</p> : <img src={cloudinary_url} alt={title} />}
                <div className="wrapper">
                    <div className="flex2 title-container">
                        <p className='title'>{title}</p>
                        <DiscountedPrice basePrice={basePrice} discountPercentage={discountPercentage} finalPrice={price} size={'m'} />
                    </div>
                    <div className="description" ref={descriptionRef}>{briefDescription}</div>
                </div>
            </div>
            <div className="info flexv">
                <div className="wrapper">
                    <div className="flex2 title-container">
                        <p className='title'>{title}</p>
                        <DiscountedPrice basePrice={basePrice} discountPercentage={discountPercentage} finalPrice={price} size={'m'} />
                    </div>
                    <div className="description" ref={descriptionRef}>{briefDescription}</div>
                </div>
                <div className="wrapper">
                    <div className="flexv price-total">
                        <DiscountedPrice basePrice={basePrice} discountPercentage={discountPercentage} finalPrice={price} size={'m'} />
                        <div className="total">{price * count} USD</div>
                    </div>
                    <div className="flex2 options">
                        <div className="counter-container flex2">
                            <Counter count={count} setCount={setCount} min={1} />
                            <button className="delete primary" onClick={() => deleteCartItem(id)}>Delete</button>
                        </div>
                        <button className="primary">
                            <Link to={`/store/${title}`} state={{ productId: id }}>Details</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProductCard