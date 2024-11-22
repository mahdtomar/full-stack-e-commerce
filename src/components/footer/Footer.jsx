import { Link } from "react-router-dom"
import whatsapp from './../../assets/icons/WhatsappLogo.svg'
import linkedIn from './../../assets/icons/LinkedinLogo.svg'
import github from './../../assets/icons/brand-github.svg'
import './scss/footer.css'
const Footer = () => {
    return (
        <div className="footer container">
            <div className="flex2">
                <div className="links flex2">
                    <ul className="flexv">
                        <p>Customer Service</p>
                        <Link >FAQ</Link>
                        <Link >Returns</Link>
                        <Link >Shipping Info</Link>
                        <Link >Contact Us</Link>
                    </ul>
                    <ul className="flexv">
                        <p>About</p>
                        <Link >About Us</Link>
                        <Link >Careers</Link>
                        <Link >Sustainability</Link>
                    </ul>
                    <ul className="flexv">
                        <p>Policies</p>
                        <Link >Privacy Policy</Link>
                        <Link >Terms Of Service</Link>
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