import fullStar from './../assets/icons/FullStar.svg'
import halfStar from './../assets/icons/StarHalf.svg'
import emptyStar from './../assets/icons/Empty-Star.svg'
import { useEffect, useState } from 'react'
const RatingParser = ({ rating }) => {
    const [starCount, setStarCount] = useState(0)
    const [isHalf, setIsHalf] = useState(false)
    const [emptyStars, setEmptyStart] = useState(0)
    const [zeroRating, setZeroRating] = useState(false)
    const calculateRating = () => {
        if (rating === 0 || !rating) {
            setZeroRating(true)
            return;
        }
        const fullStars = Math.round(rating)
        // console.log(fullStars)
        const halfStars = rating % 1 >= 0.25 && rating % 1 < 0.5
        setEmptyStart(5 - (fullStars + halfStars))
        setStarCount(fullStars)
        setIsHalf(halfStars)
    }

    useEffect(() => { calculateRating(); }, [])
    return (
        <div className="rating flex2">
            {!zeroRating && isHalf && starCount < 4 ? Array(starCount).fill(0).map((e, i) => { return <img key={i} src={fullStar} alt={"star icon"} /> }) : Array(starCount).fill(0).map((e, i) => { return <img key={i} src={fullStar} alt={"star icon"} /> })}
            {!zeroRating && isHalf && <img src={halfStar} alt="half star icon" />}{Array(emptyStars).fill(0).map((e, i) => <img key={i} src={emptyStar} alt="Empty Star" />)}
            {zeroRating && Array(5).fill(0).map((e, i) => <img key={i} src={emptyStar} alt="Empty Star" />)}
        </div>
    )
}

export default RatingParser