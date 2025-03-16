
import FiltersBar from "../components/store/FiltersBar"
import ProductPages from "../components/store/ProductPages"
import StoreFiltersContextProvider from "../context/StoreFiltersContext"

const Store = () => {
    return (
        <>
            <StoreFiltersContextProvider>
                <FiltersBar />
                <ProductPages />
            </StoreFiltersContextProvider>
        </>
    )
}

export default Store