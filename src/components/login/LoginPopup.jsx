import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useLogin } from '../../context/LoginStatus'
import xCricle from './../../assets/icons/XCircle-black.svg'
import './scss/LoginPopup.css'
import Request, { setAccessToken } from '../../Api/Axios'
import { useNotification } from '../../hooks/useNotification'
const LoginPopup = ({ setShowLoginPopup }) => {
    const { setLoggedUser } = useLogin()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [userpassword, setUserPassword] = useState("")
    const { showNotification } = useNotification()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await Request("/login", "POST", true, undefined, undefined, JSON.stringify({ email: email, password: userpassword }))
        if (!res.data) {
            showNotification("error", "invalid username or password")
            return
        }
        showNotification("success", "Login successful")
        setShowLoginPopup(false)
        setLoggedUser(res.data);
        setAccessToken(res.data.accessToken)
    }
    const moveToRegisterPage = () => {
        localStorage.setItem(
            "redirectAfterRegister",
            window.location.pathname + window.location.search
        );
        setShowLoginPopup(false)
        navigate("/register")
    }
    return (
        <>
            <div className="login-popup">
                <div className="login-popup-container">
                    <img src={xCricle} alt="close-icon" className="close-icon cursor-pointer" onClick={() => setShowLoginPopup(false)} />
                    <form className='flexv'>
                        <div className="logo">Cartique</div>
                        <p>Login</p>
                        <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                        <input type="password" name="password" id="password" value={userpassword} onChange={e => setUserPassword(e.target.value)} placeholder='password' />
                        <button type="submit" className='primary' onClick={e => handleSubmit(e)}>Login</button>
                        <p>New User?<span onClick={moveToRegisterPage}> Register an Account </span></p>
                    </form>
                </div>
                <div className="drop-shadow" onClick={() => setShowLoginPopup(false)} ></div>
            </div>
        </>
    )
}

export default LoginPopup