import { createContext, useContext, useEffect, useState } from 'react'
import LoginPopup from '../components/login/LoginPopup'
export const loginContext = createContext()
const LoginStatus = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false)
    const [user, setUser] = useState(null)
    const [showLoginPopup, setShowLoginPopup] = useState(false)
    const getLoggedUser = () => {
        const user = JSON.parse(localStorage.getItem("user-info"))
        if (user) {
            setIsLogged(true)
            setUser(user)
        }
    }
    const setLoggedUser = (user) => {
        localStorage.setItem("user-info", JSON.stringify(user))
        setIsLogged(true)
        setUser(user)
    }
    useEffect(() => {
        getLoggedUser()
    }, [])
    return (
        <loginContext.Provider value={{
            getLoggedUser,
            setLoggedUser,
            user,
            isLogged,
            setShowLoginPopup,
            showLoginPopup
        }}>
            {children}
            {showLoginPopup && <LoginPopup setShowLoginPopup={setShowLoginPopup} />}
        </loginContext.Provider>
    )
}

export const useLogin = () => useContext(loginContext)
export default LoginStatus