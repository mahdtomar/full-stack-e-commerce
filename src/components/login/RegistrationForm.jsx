import { useRef, useState } from "react"
import log from "../../util/Log"

const RegistrationForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const regesterationFormRef = useRef(null)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(regesterationFormRef.current)
        const body = {
            name: username,
            email: email,
            password: password,
            user_type: "customer"
        }
        formData.append("user_type", "customer")
        for (const [key, value] of formData) {
            console.log(key, value)
        }
        log("body", body)
        const res = await fetch("http://localhost:9000/register", {
            body: formData,
            method: "POST",

        })
        const data = await res.json()
        log("data", data)
    }
    return (
        <div>
            <div className="logo">Cartique</div>
            <p>Register</p>
            <form ref={regesterationFormRef}>
                <input type="text" name="name" placeholder="Full Name" maxLength={20} value={username} onChange={e => setUsername(e.target.value)} />
                <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                <input type="file" name="avatar" id="user-avater" />
                <button onClick={e => handleSubmit(e)}>Register</button>
            </form>
        </div>
    )
}

export default RegistrationForm