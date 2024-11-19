import { useRef } from 'react'
import magnifyingGlass from './../../assets/icons/MagnifyingGlass.svg'
const NavSearch = () => {
    const searchRef = useRef(null)
    const search = () => {
        searchRef.current.focus()
    }
    return (
        <div className='nav-search flex2'>
            <img onClick={search} src={magnifyingGlass} alt="search" />
            <input type="text" name="search" id="navsearch" placeholder='Search' ref={searchRef} />
        </div>
    )
}

export default NavSearch