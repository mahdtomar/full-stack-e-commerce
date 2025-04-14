import NavItem from "./NavItem"
import NavSearch from "./NavSearch"
import cart from './../../../assets/icons/ShoppingCartSimple.svg'
import './scss/navbar.css'
import menuIcon from './../../../assets/icons/menu-2.svg'
import { Link, useLocation } from "react-router-dom"
import { useContext } from "react"
import { loginContext } from "../../../context/LoginStatus"

const Navbar = () => {
    const location = useLocation();

    const navigationLinks = [
        { name: "home", path: "/" },
        { name: "store", path: "/store" },
        { name: "Contact Us", path: "/contact-us" },
    ];
    const { isLogged } = useContext(loginContext)
    return (
        <nav className="navbar-root ">
            <div className="container flex2">
                <div className="logo">Cartique</div>
                <NavSearch />
                <ul className="flex2 links-container">
                    {navigationLinks.map(({ name, path }, i) => (
                        <NavItem
                            key={i}
                            name={name}
                            path={path}
                            className={location.pathname === path ? "active" : ""}
                        />
                    ))}
                </ul>
                <div className="cart-container flex2">
                    <Link to={'/cart'}>
                        <img src={cart} alt="cart" />
                    </Link>
                    <div className="menu-icon">
                        <img src={menuIcon} alt="menu icon" />
                    </div>
                </div>
                <div className="cta">
                    {isLogged ?
                        <Link to={'/store'}><button className="primary">Shop Now</button></Link>
                        :
                        <Link to={"/login"}><button className="primary">Login</button></Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
