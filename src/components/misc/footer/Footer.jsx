import { Link } from "react-router-dom"
import whatsapp from './../../../assets/icons/WhatsappLogo.svg'
import linkedIn from './../../../assets/icons/LinkedinLogo.svg'
import github from './../../../assets/icons/brand-github.svg'
import './scss/footer.css'
import NavItem from "../navbar/NavItem"
const Footer = () => {
    return (
        <div className="footer container">
            <div className="flex2">
                <div className="links flex2">
                    <ul className="flexv">
                        <li>
                            <p>Customer Service</p>
                        </li>
                        <NavItem path={''} name={"FAQ"} />
                        <NavItem path={''} name={"Returns"} />
                        <NavItem path={''} name={"Shipping Info"} />
                        <NavItem path={''} name={"Contact Us"} />
                    </ul>
                    <ul className="flexv">
                        <li>
                            <p>About</p>
                        </li>
                        <NavItem path={''} name={"About Us"} />
                        <NavItem path={''} name={"Careers"} />
                        <NavItem path={''} name={"Sustainability"} />
                    </ul>
                    <ul className="flexv">
                        <li>
                            <p>Policies</p>
                        </li>
                        <NavItem path={''} name={"Privacy Policy"} />
                        <NavItem path={''} name={"Terms Of Service"} />
                    </ul>
                </div>
                <div className="logo flexv">
                    <div className="logo">Cartique</div>
                    <div className="flex2">
                        <Link to={"https://www.linkedin.com/in/omar-mahdy-83626723b/"} target="blank"><img src={linkedIn} alt="what's app icon" /></Link>
                        <Link to={"https://wa.me/+201029949333"} target="blank"><img src={whatsapp} alt="linkedin icon" /></Link>
                        <Link to={"https://github.com/mahdtomar"} target="blank"><img src={github} alt="github icon" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer