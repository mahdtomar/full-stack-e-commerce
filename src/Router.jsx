import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Store from "./pages/Store"
import SingleProduct from "./pages/SingleProduct"
import Login from "./pages/Login"
import RegistrationForm from "./components/login/RegistrationForm"
import LoginForm from "./components/login/LoginForm"
import AddProduct from "./pages/AddProduct"
import Cart from "./pages/Cart"

const Router = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="register" element={<Login content={<RegistrationForm />} />} />
            <Route path="login" element={<Login content={<LoginForm />} />} />
            <Route path="store" element={<Store />} />
            <Route path="store/:id" element={<SingleProduct />} />
            <Route path="cart" element={<Cart />} />
            <Route path="add-product" element={<AddProduct />} />
        </Routes>
    )
}

export default Router