import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import Request from '../Api/Axios'
import { loginContext } from '../context/LoginStatus'
const cartContext = createContext()
export const useCart = () => useContext(cartContext)
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const { isLogged } = useContext(loginContext)
    const [cartTotals, setCartTotals] = useState({})
    const getUserCart = useCallback(async () => {
        if (!isLogged) {
            return
        }
        const userCart = await Request("/get-cart", "GET", true)
        console.log(userCart)
        setCart(userCart.data)
    }, [isLogged])

    const deleteCartItem = async (id) => {
        try {
            const DeleteItem = await Request(`/delete-item/${id}`, "DELETE", true)
            console.log(DeleteItem)
            setCart(DeleteItem.data) // returns the rest of the products after deleting the target product
        } catch (error) {
            console.log("Error Deleting Cart Item", error)
        }
    }

    const calcTotals = () => {
        let total = 0
        let subtotal = 0
        let productCount = 0
        let discountAmount = 0
        cart.forEach(element => {
            if (!element.product) {
                return
            }
            productCount += element.count
            discountAmount = (discountAmount + (element.product.basePrice * element.product.discountPercentage / 100)) * element.count
            subtotal = (subtotal + element.product.basePrice) * element.count
            total = (total + element.product.finalPrice) * element.count
        });

        setCartTotals({ subtotal, productCount, discountAmount, total })
    }
    useEffect(() => {
        calcTotals()
    }, [cart])

    return (
        <cartContext.Provider value={{ cart, getUserCart, deleteCartItem, cartTotals }}>{children}</cartContext.Provider>
    )
}

export default CartProvider