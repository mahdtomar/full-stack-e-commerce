import React, { useEffect } from 'react'
import { useCart } from '../../hooks/useCart'
import OrderLine from './orderLine'
import './scss/cartpreview.css'
const CartPreview = () => {
  const { cart, getUserCart } = useCart()
  const initializeCart = async () => {
    await getUserCart();
  }
  useEffect(() => { initializeCart(); }, [])
  return (
    <div className="order-lines-container">
      <div className="slider flexv">
        {cart.map(({ count, product }) => <OrderLine key={product._id} quantity={count} img={product.cloudinary_url} total={product.finalPrice * count} title={product.title} />)}
      </div>
    </div>
  )
}

export default CartPreview