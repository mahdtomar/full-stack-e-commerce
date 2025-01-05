import Footer from "../components/misc/footer/Footer"
import Navbar from "../components/misc/navbar/Navbar"
import FiltersBar from "../components/store/FiltersBar"
import ProductPages from "../components/store/ProductPages"
import StoreFiltersContextProvider from "../context/StoreFiltersContext"

const Store = () => {
    return (
        <>
            <Navbar />
            <StoreFiltersContextProvider>
                <FiltersBar />
                <ProductPages />
            </StoreFiltersContextProvider>
            <Footer />
        </>
    )
}

export default Store