import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import Request from '../Api/Axios'
import { loginContext } from '../context/LoginStatus'
const cartContext = createContext()
export const useCart = () => useContext(cartContext)
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const { isLogged } = useContext(loginContext)

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
            setCart(DeleteItem.data)
        } catch (error) {
            console.log("Error Deleting Cart Item", error)
        }
    }


    return (
        <cartContext.Provider value={{ cart, getUserCart, deleteCartItem, getUserCart }}>{children}</cartContext.Provider>
    )
}

export default CartProvider