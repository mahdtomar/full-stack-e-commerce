import { useEffect, useState } from "react"
import fullStar from './../../assets/icons/FullStar.svg'
import halfStar from './../../assets/icons/StarHalf.svg'
const TestmonialsCards = ({ img, rating, userName, comment }) => {
    const [starCount, setStarCount] = useState(0)
    const [isHalf, setIsHalf] = useState(false)
    const calculateRating = () => {
        const fullStars = Math.round(rating)
        const halfStars = rating % 1 >= 0.25 && rating % 1 < 0.5
        setStarCount(fullStars)
        setIsHalf(halfStars)
    }
    useEffect(() => { calculateRating() }, [])
    return (
        <div className="testmonial-card">
            <img src={img} alt="user image" className="user-image" />
            <div className="rating">
                {isHalf && starCount < 4 ? Array(starCount - 1).fill(0).map((e, i) => { return <img key={i} src={fullStar} alt={"star icon"} /> }) : Array(starCount).fill(0).map((e, i) => { return <img key={i} src={fullStar} alt={"star icon"} /> })}
                {isHalf && <img src={halfStar} alt="half star icon" />}
            </div>
            <div className="testmonial">
                <span>{userName}</span>
                <p>{comment}</p>
            </div>
        </div>
    )
}

export default TestmonialsCards