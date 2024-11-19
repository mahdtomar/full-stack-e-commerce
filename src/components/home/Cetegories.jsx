import smartphones from './../../assets/images/smartphones-cover-image.png'
import accessories from './../../assets/images/accessories-cover-image.png'
import electronics from './../../assets/images/electronics-cover-image.png'
import supermarket from './../../assets/images/superMarket-cover-image.png'
import CatetoryCard from './CatetoryCard'
import './scss/Categories.css'
const Cetegories = () => {
    const categories = [
        {
            title: "smartPhones", img: smartphones
        },
        {
            title: "accessories", img: accessories
        },
        {
            title: "electronics", img: electronics
        },
        {
            title: "super Market", img: supermarket
        },
    ]
    return (
        <div className="home-categories-root container">
            <h2>Shop By Category</h2>
            <p>Find exactly what you’re looking for with ease.</p>
            <div className="flex2 categories-cards">
                {categories.map(({ title, img }, i) => <CatetoryCard key={i} title={title} img={img} />)}
            </div>
        </div>
    )
}

export default Cetegories