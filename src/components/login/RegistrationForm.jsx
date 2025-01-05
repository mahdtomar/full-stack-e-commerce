import { useState } from "react"

const RegistrationForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            name: username,
            email: email,
            password: password,
            user_type: "customer"
        }
        console.log(body)
        const res = await fetch("http://localhost:9000/register", {
            body: JSON.stringify(body),
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        console.log(data)
    }
    return (
        <div>
            <div className="logo">Cartique</div>
            <p>Register</p>
            <form>
                <input type="text" name="username" placeholder="Full Name" maxLength={20} value={username} onChange={e => setUsername(e.target.value)} />
                <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button onClick={e => handleSubmit(e)}>Register</button>
            </form>
        </div>
    )
}

export default RegistrationForm