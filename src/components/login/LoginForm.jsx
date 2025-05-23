import { useContext, useState } from "react"
import Request from "../../Api/Axios"
import log from "../../util/Log"
import { useNavigate } from "react-router-dom"
import { useNotification } from "../../hooks/useNotification"
import logo from './../../assets/images/logo.png'
import './scss/LoginForm.css'
import { loginContext } from "../../context/LoginStatus"
const LoginForm = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [userpassword, setUserPassword] = useState("")
    const { showNotification } = useNotification()
    const { setLoggedUser } = useContext(loginContext)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await Request("/login", "POST", true, undefined, undefined, JSON.stringify({ email: email, password: userpassword }))
        if (!res.data) {
            showNotification("error", "invalid username or password")
            return
        }
        setLoggedUser(res.data)
        localStorage.setItem("user-info", JSON.stringify(res.data))
        const redirectPath = localStorage.getItem("redirectAfterLogin") || "/";
        localStorage.removeItem("redirectAfterLogin")
        log('user data', res.data)
        navigate((!redirectPath || redirectPath === "/full-stack-e-commerce/login") ? "/" : `../${redirectPath}`);
    }
    return (
        <div className="login-form-root">
            <div className="logo">Cartique</div>
            <img src={logo} alt="logo" />
            {/* <p>Login</p> */}
            <form className="flexv">
                <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" name="password" id="password" placeholder="Password" value={userpassword} onChange={e => setUserPassword(e.target.value)} />
                <button className="primary" type="submit" onClick={e => handleSubmit(e)}>Login</button>
            </form>
        </div>
    )
}

export default LoginForm