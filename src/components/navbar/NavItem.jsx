import { Link } from "react-router-dom"

const NavItem = ({ name, path, state, className }) => {
    return (
        <Link className={`nav-item ${className}`} to={path} state={state}>
            {name}
        </Link>
    )
}

export default NavItem