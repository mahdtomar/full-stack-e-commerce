import { useEffect, useRef, useState } from 'react'
import FilterBy from './FilterBy'
import SortBy from './SortBy'
import CategorySelection from './CategorySelection'
import './scss/filtersbar.css'
const FiltersBar = () => {
    const [filters, setFilters] = useState(false)
    const [sort, setSort] = useState(false)
    const [category, setCategory] = useState(false)
    const containerRef = useRef(null)
    function openMenu(menu) {
        setFilters(false)
        setSort(false)
        setCategory(false)
        switch (menu) {
            case 'filter':
                setFilters(true)
                break;
            case 'sort':
                setSort(true)
                break;
            case 'category':
                setCategory(true)
                break;
            default:
                break;
        }
    }
    function closeMenu(e) {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
            setFilters(false);
            setSort(false);
            setCategory(false);
        }
    }
    useEffect(() => {
        document.addEventListener('click', closeMenu);
        return () => {
            document.removeEventListener('click', closeMenu);
        };
    }, [])
    return (
        <div className='filters-bar-root' ref={containerRef}>
            <div className="container flex2">
                <p>Sorting & Filters</p>
                <FilterBy openMenu={openMenu} active={filters} />
                <SortBy openMenu={openMenu} active={sort} />
                <CategorySelection openMenu={openMenu} active={category} />
            </div>
        </div>
    )
}

export default FiltersBar