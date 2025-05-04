import NavItem from "./NavItem"
import NavSearch from "./NavSearch"
import cart from './../../../assets/icons/ShoppingCartSimple.svg'
import './scss/navbar.css'
import menuIcon from './../../../assets/icons/menu-2.svg'
import { Link, useLocation } from "react-router-dom"
import { useContext } from "react"
import { loginContext } from "../../../context/LoginStatus"

const VendorNavbar = () => {
    const location = useLocation();

    const navigationLinks = [
        { name: "Dashboard", path: "/vendor/dashboard" },
        { name: "Products", path: "/vendor/products" },
        { name: "Home", path: "/" },
        { name: "Contact Us", path: "/contact-us" },
    ];
    const { isLogged } = useContext(loginContext)
    return (
        <nav className="vendor-navbar-root ">
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
                <div className="cart">
                    <Link to={'/cart'}>
                        <img src={cart} alt="cart" />
                    </Link>
                </div>
                {isLogged ?
                    <Link to={'/store'}><button className="primary">Shop Now</button></Link>
                    :
                    <Link to={"/login"}><button className="primary">Login</button></Link>
                }
                <div className="menu-icon">
                    <img src={menuIcon} alt="menu icon" />
                </div>
            </div>
        </nav>
    );
};

export default VendorNavbar;
