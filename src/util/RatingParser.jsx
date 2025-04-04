import fullStar from './../assets/icons/FullStar.svg';
import halfStar from './../assets/icons/StarHalf.svg';
import emptyStar from './../assets/icons/Empty-Star.svg';
import { useEffect, useState } from 'react';

const RatingParser = ({ rating }) => {
    const [starCount, setStarCount] = useState(0);
    const [isHalf, setIsHalf] = useState(false);
    const [emptyStars, setEmptyStars] = useState(0);
    const [zeroRating, setZeroRating] = useState(false);

    const calculateRating = () => {
        if (!rating || rating === 0) {
            setZeroRating(true);
            setStarCount(0);
            setIsHalf(false);
            setEmptyStars(5);
            return;
        }

        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const remainingStars = 5 - (fullStars + (hasHalfStar ? 1 : 0));

        // Update state
        setZeroRating(false);
        setStarCount(fullStars);
        setIsHalf(hasHalfStar);
        setEmptyStars(remainingStars);
    };

    useEffect(() => {
        calculateRating();
        // console.log("rating", rating)
        // console.log("full star", starCount)
        // console.log("half star", isHalf)
        // console.log("remairing star", emptyStars)
    }, [rating]); // Include rating as a dependency

    return (
        <div className="rating flex2">
            {!zeroRating && (
                <>
                    {Array(starCount).fill(0).map((_, i) => (
                        <img key={i} src={fullStar} alt="star icon" />
                    ))}

                    {isHalf && <img src={halfStar} alt="half star icon" />}

                    {Array(emptyStars).fill(0).map((_, i) => (
                        <img key={i} src={emptyStar} alt="Empty Star" />
                    ))}
                </>
            )}

            {zeroRating &&
                Array(5).fill(0).map((_, i) => (
                    <img key={i} src={emptyStar} alt="Empty Star" />
                ))}
        </div>
    );
};

export default RatingParser;
