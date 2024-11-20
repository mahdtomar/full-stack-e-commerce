import WhyChooseUsCard from "./WhyChooseUsCard"
import './scss/whyChooseUs.css'
import creditCart from './../../assets/icons/CreditCard.svg'
import coins from './../../assets/icons/Coins.svg'
import user from './../../assets/icons/User.svg'
import delivaryPackage from './../../assets/icons/Package.svg'
const WhyChooseUs = () => {
    return (
        <div className="why-choose-us-root flex2 container">
            <div className="flexv">
                <WhyChooseUsCard title={"Secure Payments & Return Policy"} icon={creditCart} />
                <WhyChooseUsCard title={"Free Shipping on Orders Over $50"} icon={coins} />
            </div>
            <div className="text">
                <h2>Why Choose Us?</h2>
                <p>Discover quality products, unbeatable deals, and seamless shopping all in one place. Enjoy fast shipping, secure payments, and customer support you can count on.</p>
            </div>
            <div className="flexv">
                <WhyChooseUsCard title={"24/7 Customer Support"} icon={user} />
                <WhyChooseUsCard title={"Hassel-Free Returns"} icon={delivaryPackage} />
            </div>
        </div>
    )
}

export default WhyChooseUs