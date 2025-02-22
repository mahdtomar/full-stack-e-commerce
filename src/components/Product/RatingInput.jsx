import { useEffect, useRef, useState } from "react"
const RatingInput = ({ rating, setRating }) => {
    const containerRef = useRef(null)
    const [selectedStars, setSelectedStars] = useState([])
    const handleHover = (ele) => {
        const starList = Array.from(containerRef.current.children)
        starList.slice(starList.indexOf(ele), starList.length).map(star => star.style.fill = "none")
        setSelectedStars(starList.slice(0, starList.indexOf(ele) + 1))
    }
    const ChooseRating = (ele) => {
        const starList = Array.from(containerRef.current.children)
        let SVG = null
        if (ele.tagName === "path") {
            SVG = ele.parentElement;
        }
        const RatingValue = SVG ? starList.indexOf(SVG) : starList.indexOf(ele)
        console.log(RatingValue + 1)
        setRating(RatingValue + 1)
    }
    function resetRating() {
        const starList = Array.from(containerRef.current.children)
        if (!rating) {
            starList.map(star => star.style.fill = "none")
            return
        }
        starList.slice(rating - 1, starList.length).map(star => star.style.fill = "none")
        setSelectedStars(starList.slice(0, rating))
    }

    useEffect(() => {
        console.log(resetRating)
        resetRating()
    }, [])
    useEffect(() => {
        selectedStars.map(star => star.style.fill = "gold")
    }, [selectedStars])
    return (
        <div className='rating-input-container' ref={containerRef}>
            {
                [...Array(5)].map((star, i) => {
                    return <svg key={i} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseEnter={e => handleHover(e.target)} onClick={e => ChooseRating(e.target)} onMouseLeave={resetRating}>
                        <path d="M16.55 23.8375L22.85 27.8375C23.6625 28.35 24.6625 27.5875 24.425 26.65L22.6 19.475C22.5506 19.2762 22.5585 19.0674 22.6226 18.8728C22.6868 18.6781 22.8046 18.5056 22.9625 18.375L28.6125 13.6625C29.35 13.05 28.975 11.8125 28.0125 11.75L20.6375 11.275C20.4363 11.2633 20.2428 11.1933 20.0808 11.0734C19.9187 10.9535 19.7951 10.789 19.725 10.6L16.975 3.67503C16.9022 3.47491 16.7696 3.30204 16.5952 3.17988C16.4207 3.05772 16.2129 2.99219 16 2.99219C15.787 2.99219 15.5793 3.05772 15.4048 3.17988C15.2304 3.30204 15.0978 3.47491 15.025 3.67503L12.275 10.6C12.2049 10.789 12.0813 10.9535 11.9192 11.0734C11.7572 11.1933 11.5637 11.2633 11.3625 11.275L3.98749 11.75C3.02499 11.8125 2.64999 13.05 3.38749 13.6625L9.0375 18.375C9.19541 18.5056 9.31323 18.6781 9.37736 18.8728C9.4415 19.0674 9.44934 19.2762 9.39999 19.475L7.71249 26.125C7.42499 27.25 8.62499 28.1625 9.58749 27.55L15.45 23.8375C15.6144 23.733 15.8052 23.6775 16 23.6775C16.1948 23.6775 16.3856 23.733 16.55 23.8375Z" fill="#none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                })
            }
        </div>
    )
}

export default RatingInput