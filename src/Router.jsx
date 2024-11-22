import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

const Router = () => {
    return (
        <Routes>
            <Route path="/full-stack-e-commerce" element={<Home />} />
        </Routes>
    )
}

export default Router