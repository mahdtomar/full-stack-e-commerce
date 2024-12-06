import { Link } from "react-router-dom"

const NavItem = ({ name, path, state, className }) => {
    return (
        <li>
            <Link className={`nav-item ${className}`} to={path} state={state}>
                {name}
            </Link>
        </li>
    )
}

export default NavItem