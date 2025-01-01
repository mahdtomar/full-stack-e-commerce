import { createContext } from 'react'

const StoreFiltersContext = (children) => {
    const storeFiltersContext = createContext({})
    const [filters, setFilters] = useState(false)
    const [sort, setSort] = useState(false)
    const [category, setCategory] = useState(false)
    return (
        <storeFiltersContext.Provider value={{
            filters,
            setFilters,
            sort,
            setSort,
            category,
            setCategory,
        }}>{children}</storeFiltersContext.Provider>
    )
}

export default StoreFiltersContext