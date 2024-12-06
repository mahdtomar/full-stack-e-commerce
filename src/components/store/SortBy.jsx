
const SortBy = ({ openMenu, active }) => {
    return (
        <div className='sort-by-comp'>
            <button onClick={() => { openMenu("sort") }}>sort by</button>
            {active && <ul>
                <li>price: low to high</li>
                <li>price: high to low</li>
                <li>ratings</li>
                <li>new arrivals</li>
            </ul>}
        </div>
    )
}

export default SortBy