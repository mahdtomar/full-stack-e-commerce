import TopDealsCard from "./TopDealsCard"
import rightArrow from './../../assets/icons/ArrowRight.svg'
import './scss/topdeals.css'
import nikeShoes from './../../assets/images/nike-shoes.png'
import Markers from './../../assets/images/Markers.png'
import earpohnes from './../../assets/images/huwai-earphones-no-bg.png'
import utensilsSet from './../../assets/images/utinsiles-set.png'
import { useRef } from "react"


const TopDeals = () => {
    const topDealsSlider = useRef(null)
    const topDeals = [
        {
            title: "Gray Nike running Sneakers",
            price: 50,
            discount: 15,
            img: nikeShoes,
            cardColor: "#666363",
        },
        {
            title: "Colorful School Markers",
            price: 50,
            discount: 15,
            img: Markers,
            cardColor: "#45627F",
        },
        {
            title: "Huawei Earphones - purple",
            price: 50,
            discount: 15,
            img: earpohnes,
            cardColor: "#E4A211",
        },
        {
            title: "Pink Kitchen Utensils 5Psc",
            price: 50,
            discount: 15,
            img: utensilsSet,
            cardColor: "#9B7074",
        },
    ]
    const scroll = (e) => {
        const slider = topDealsSlider.current
        switch (e) {
            case "right":
                slider.scrollBy({
                    top: 0,
                    left: 250,
                    behavior: "smooth",
                })
                return
            case "left":
                slider.scrollBy({
                    top: 0,
                    left: -250,
                    behavior: "smooth",
                })
                return
        }
    }
    return (
        <div className="home-topdeals-root">
            <h2>Today’s Top Deals</h2>
            <div className="slider">
                <div className="controls">
                    <div onClick={() => { scroll("right") }} className="right-arrow"><img src={rightArrow} alt="right scroll arrow" /></div>
                    <div onClick={() => { scroll("left") }} className="left-arrow"><img src={rightArrow} alt="left scroll arrow" /></div>
                </div>
                <div className="deals-slider" ref={topDealsSlider}>
                    <div className="deals flex2">
                        {topDeals.map(({ title, price, discount, img, cardColor }, i) => {
                            return <TopDealsCard key={i} title={title} price={price} discount={discount} img={img} cardColor={cardColor} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopDeals