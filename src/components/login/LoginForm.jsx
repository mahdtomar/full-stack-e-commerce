import axios from "axios"
import { useState } from "react"
import Request from "../../Api/Axios"
import log from "../../util/Log"

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [userpassword, setUserPassword] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email, userpassword)
        const data = await Request("/login", "POST", true, undefined, undefined, JSON.stringify({ email: email, password: userpassword }))
        log('user data', data)
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