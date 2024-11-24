import NavItem from "./NavItem"
import NavSearch from "./NavSearch"
import cart from './../../assets/icons/ShoppingCartSimple.svg'
import './scss/navbar.css'
import menuIcon from './../../assets/icons/menu-2.svg'
const Navbar = () => {
    const navigationLinks = [
        { name: "home", path: "/", state: {}, className: "active" },
        { name: "sales", path: "/sales", state: {}, className: "" },
        { name: "Contact Us", path: "/contact-us", state: {}, className: "" },
    ]
    return (
        <nav className="navbar-root ">
            <div className="container flex2">
                <div className="logo">Cartique</div>
                <NavSearch />
                <ul className="flex2">
                    {navigationLinks.map(({ name, path, state, className }, i) => <NavItem key={i} name={name} path={path} state={state} className={className} />)}
                    <div className="cart"><img src={cart} alt="cart" /></div>
                    <button className="primary">Shop Now</button>
                </ul>
                <div className="menu-icon"><img src={menuIcon} alt="menu icon" /></div>
            </div>
        </nav>
    )
}

export default Navbar