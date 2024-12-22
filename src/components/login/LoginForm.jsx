import axios from "axios"
import { useState } from "react"

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email, password)
        const { data } = await axios.post("http://localhost:9000/login", {
            email: email,
            password: password,
        })
        console.log(data)
    }
    return (
        <div>
            <div className="logo">Cartique</div>
            <p>Login</p>
            <form>
                <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit" onClick={e => handleSubmit(e)}>Login</button>
            </form>
        </div>
    )
}

export default LoginForm