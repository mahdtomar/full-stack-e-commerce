import React from 'react'

const InfoCard = ({ title, data }) => {
    return (
        <div>
            <span>{title}</span>
            <p>{data}</p>
        </div>
    )
}

export default InfoCard