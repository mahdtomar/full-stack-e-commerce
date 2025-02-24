import axios from "axios"
import { useState } from "react"
import Request from "../../Api/Axios"
import log from "../../util/Log"
import { useNavigate } from "react-router-dom"
const LoginForm = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [userpassword, setUserPassword] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email, userpassword)
        const res = await Request("/login", "POST", true, undefined, undefined, JSON.stringify({ email: email, password: userpassword }))
        if (!res.data) {
            console.log("stop here")
            return
        }
        localStorage.setItem("user-info", JSON.stringify(res.data))
        const redirectPath = localStorage.getItem("redirectAfterLogin") || "/";
        log('user data', res.data)
        navigate(!redirectPath || redirectPath === "/login" ? "/" : redirectPath);
    }
    return (
        <div>
            <div className="logo">Cartique</div>
            <p>Login</p>
            <form>
                <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" name="password" id="password" value={userpassword} onChange={e => setUserPassword(e.target.value)} />
                <button type="submit" onClick={e => handleSubmit(e)}>Login</button>
            </form>
        </div>
    )
}

export default LoginForm