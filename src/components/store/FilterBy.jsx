
const FilterBy = ({ openMenu, active }) => {
    return (
        <div className='filter-by-comp'>
            <button onClick={() => { openMenu("filter") }}>
                Filter By
            </button>
            {active && <ul className='flexv'>
                {/* <option value="no filter">Price Ranger</option> */}
                <li>Price Range</li>
                <li>brand</li>
                <li>ratings</li>
                <li>Availability</li>
            </ul>}
            {/* <input type="text" />
            <select name="filter value" id="filter-value-selection">

            </select> */}
        </div>
    )
}

export default FilterBy