import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Store from "./pages/Store"
import SingleProduct from "./pages/SingleProduct"
import Login from "./pages/Login"
import RegistrationForm from "./components/login/RegistrationForm"
import LoginForm from "./components/login/LoginForm"
import AddProduct from "./vendor/pages/AddProduct"
import Cart from "./pages/Cart"
import CustomerLayout from './layout/CustomerLayout'
import ContactUs from './pages/ContactUs'
import CheckOut from "./pages/CheckOut"
import VendorLayout from "./layout/VendorLayout"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<CustomerLayout />}>
                <Route index element={<Home />} />
                <Route path="register" element={<Login content={<RegistrationForm />} />} />
                <Route path="login" element={<Login content={<LoginForm />} />} />
                <Route path="store" element={<Store />} />
                <Route path="store/:id" element={<SingleProduct />} />
                <Route path="cart" element={<Cart />} />
                <Route path="contact-us" element={<ContactUs />} />
                <Route path="/check-out" element={<CheckOut />} />
            </Route>
            <Route path="/vendor" element={<VendorLayout />}>
                <Route path="add-product" element={<AddProduct />} />
            </Route>
        </Routes>
    )
}

export default Router