import { Link } from "react-router-dom"

const NavItem = ({ name, path, className, }) => {
    return (
        <li className={`nav-item ${className}`} >
            <Link to={path}>
                {name}
            </Link>
        </li >
    )
}

export default NavItem