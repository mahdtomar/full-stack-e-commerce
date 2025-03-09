import React from 'react'

const CartSidebar = ({ ProductsCount, subTotal }) => {
    return (
        <div className='cart-sidebar-root'>
            <div className="checkout-box flexv">
                <header>Cart Summery</header>
                <div className="flex2">
                    <p>Product Count : </p>
                    <span></span>
                </div>
                <div className="flex2">
                    <p>SubTotal : </p>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default CartSidebar