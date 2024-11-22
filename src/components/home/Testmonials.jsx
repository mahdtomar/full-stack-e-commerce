import user1 from './../../assets/images/user-1.png'
import user2 from './../../assets/images/user-2.png'
import user3 from './../../assets/images/user-3.png'
import TestmonialsCards from './TestmonialsCards'
import './scss/testmonials.css'
const Testmonials = () => {
    const ratings = [
        {
            img: user1,
            rating: 4.90,
            userName: "Michael Brown",
            comment: '"The deals are unbeatable! I’ve saved so much money shopping here, and the products are always top-notch. Highly recommend to anyone looking for great value."',
        },
        {
            img: user2,
            rating: 4.25,
            userName: "James Lee",
            comment: '"This is my go-to store for everything! From fashion to gadgets, I find it all here. The product descriptions and reviews make it easy to shop with confidence."',
        },
        {
            img: user3,
            rating: 4.6,
            userName: "Sarah Johnson",
            comment: '"I’ve been a loyal customer for over a year now, and I’ve never been disappointed. The returns process is seamless, and the discounts keep me coming back!"',
        },
    ]
    return (
        <div className="testmonials-home-root">
            <h2>What Our Customers Say</h2>
            <div className="container flex2">
                {ratings.map(({ img, rating, userName, comment }, i) => {
                    return <TestmonialsCards key={i} img={img} rating={rating} userName={userName} comment={comment} />
                })}
            </div>
            <div className="cta container">
                <p>Want to see more stories from our happy customers?</p>
                <button className="primary">Read More Reviews</button>
            </div>
        </div>
    )
}

export default Testmonials