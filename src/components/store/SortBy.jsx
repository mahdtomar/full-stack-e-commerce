import { useContext } from "react"
import { storeFiltersContext } from "../../context/StoreFiltersContext"

const SortBy = ({ openMenu, active }) => {
    const { sort, setSort } = useContext(storeFiltersContext)
    return (
        <div className='sort-by-comp'>
            <button onClick={() => { openMenu("sort") }}>sort by</button>
            {active && <ul>
                <li onClick={() => { setSort("price-ascending"); openMenu("i") }}>price: low to high</li>
                <li onClick={() => { setSort("price-descending"); openMenu("i") }}>price: high to low</li>
                <li onClick={() => { setSort("rating"); openMenu("i") }}>ratings</li>
                <li onClick={() => { setSort("new-arrivals"); openMenu("i") }}>new arrivals</li>
            </ul>}
        </div>
    )
}

export default SortBy