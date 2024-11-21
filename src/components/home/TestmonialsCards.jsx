import { useEffect, useState } from "react"

const TestmonialsCards = ({ img, rating, userName, comment }) => {
    const [starCount, setStarCount] = useState(0)
    const [isHalf, setIsHalf] = useState(false)
    const calculateRating = () => {
        const fullStars = Math.round(rating)
        const halfStars = rating % 1 >= 0.25 && rating % 1 < 0.75
        setStarCount(fullStars)
        setIsHalf(halfStars)
        console.log("full stars are", fullStars, "half stars are :", halfStars)
    }
    useEffect(() => { calculateRating() }, [])
    return (
        <div className="testmonial-card">
            <img src={img} alt="user image" />
            <div className="rating">
                {Array(fullStars).fill(0).map()}
            </div>
            <div className="testmonial">
                <span>{userName}</span>
                <p>{comment}</p>
            </div>
        </div>
    )
}

export default TestmonialsCards