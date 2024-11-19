
const CatetoryCard = ({ title, img }) => {
    return (
        <div className={`category-card ${title} flex2`}>
            <div className="flexv">
                <p>{title}</p>
                <button className="primary">See More</button>
            </div>
            <img src={img} alt={`${title} category`} />
        </div>
    )
}

export default CatetoryCard