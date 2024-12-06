const CategorySelection = ({ openMenu, active }) => {
    const categories = ['smart phones', 'electronics', 'super market', 'accessories']
    return (
        <div className="category-selection-comp">
            <button onClick={() => { openMenu("category") }}>Category</button>
            {active && <ul>
                {categories.map((e, i) => <li key={i} value={e.replace(" ", "-")}>{e}</li>)}
            </ul>}
        </div>
    )
}

export default CategorySelection