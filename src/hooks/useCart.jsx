import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import Request from '../Api/Axios'
import { loginContext } from '../context/LoginStatus'
import { useNotification } from './useNotification'
import log from '../util/Log'
const cartContext = createContext()
export const useCart = () => useContext(cartContext)
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const { isLogged } = useContext(loginContext)
    const [cartTotals, setCartTotals] = useState({})
    const { showNotification } = useNotification()

    const getUserCart = useCallback(async () => {
        if (!isLogged) {
            console.log("user is not logged in")
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
        let total = 0;
        let subtotal = 0;
        let productCount = 0;
        let discountAmount = 0;
        cart.forEach(element => {
            if (!element.product) {
                return;
            }
            // calculating total for the current product
            const cost = element.product.cost
            const basePrice = element.product.basePrice;
            const discount = (basePrice * element.product.discountPercentage) / 100;
            const finalPrice = element.product.finalPrice;
            // accumulating totals for all products
            productCount += element.count;
            discountAmount += discount * element.count;
            subtotal += basePrice * element.count;
            total += finalPrice * element.count;
        });
        setCartTotals({ subtotal, productCount, discountAmount, total });
    };
    const addToCart = async (id, count = 1) => {
        const payload = {
            productId: id,
            count: count,
        }
        log("single product payload", payload)
        const res = await Request("/add-to-cart", "POST", true, undefined, undefined, JSON.stringify(payload))
        showNotification("success", "Added To Cart")
        log("single product response", res)
    }
    const clearCart = async () => {
        const res = await Request("/clear-cart", "DELETE", true)
        log("cart cleared, current cart: ", res)
        getUserCart();
    }
    
    useEffect(() => {
        calcTotals()
    }, [cart])

    return (
        <cartContext.Provider value={{ cart, getUserCart, deleteCartItem, cartTotals, addToCart, clearCart }}>{children}</cartContext.Provider>
    )
}

export default CartProvider