import arrow from './../../assets/icons/ArrowRight.svg'
import ipad from './../../assets/images/ipad.png'
import earphones from './../../assets/images/earphones.png'
import watch from './../../assets/images/watch.png'
import knife from './../../assets/images/ketchin-knife.png'
import './scss/home.css'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <header className='homepage-header-root container flex2'>
            <div className="header">
                <h1>Elevate Your Style Discover Our Latest Collection!</h1>
                <p>Shop our exclusive range of premium products with unbeatable prices.</p>
                <div className="flex2">
                    <Link to={'/store'}><button className="primary">Shop Now</button></Link>
                    <button className="secondary">
                        <span>explore Deals</span>
                        <img src={arrow} alt="more deals" />
                    </button>
                </div>
            </div>
            <div className="gallery">
                <div className="images flex2">
                    <div className="flexv">
                        <img src={ipad} alt="ipad" />
                        <img src={earphones} alt="earphones" />
                    </div>
                    <div className="flexv">
                        <img src={watch} alt="watch" />
                        <img src={knife} alt="knife" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header