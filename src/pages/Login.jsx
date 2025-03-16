import './scss/Login.css'
const Login = ({ content }) => {

    return (
        <div className="login-page-root flexv">
            <div className="container form-container">
                {content}
            </div>
        </div>
    )
}

export default Login