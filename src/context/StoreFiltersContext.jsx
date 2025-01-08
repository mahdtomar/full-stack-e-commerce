import { createContext, useState } from 'react'

export const storeFiltersContext = createContext({})
const StoreFiltersContextProvider = ({ children }) => {
    const [filters, setFilters] = useState('')
    const [sort, setSort] = useState('new-arrivals')
    const [category, setCategory] = useState('')
    return (
        <storeFiltersContext.Provider value={{
            filters,
            setFilters,
            sort,
            setSort,
            category,
            setCategory,
        }}>
            {children}
        </storeFiltersContext.Provider>
    )
}

export default StoreFiltersContextProvider