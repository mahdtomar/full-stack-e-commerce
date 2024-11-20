
const WhyChooseUsCard = ({ title, icon }) => {
    return (
        <div className="why-choose-us-card flexv">
            <div className="icon-container">
                <img src={icon} alt="website feature" />
            </div>
            <p>{title}</p>
        </div>
    )
}

export default WhyChooseUsCard