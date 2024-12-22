import Footer from "../components/misc/footer/Footer"
import Navbar from "../components/misc/navbar/Navbar"
import FiltersBar from "../components/store/FiltersBar"
import ProductPages from "../components/store/ProductPages"

const Store = () => {
    return (
        <>
            <Navbar />
            <FiltersBar />
            <ProductPages />
            <Footer />
        </>
    )
}

export default Store