import React from 'react'
import RatingParser from '../../util/RatingParser'

const CommentCard = ({ img, customerName, rating, comment, date }) => {
    return (
        <div className="comment-card">
            <div className="header flex2">
                <img src={img} alt="" />
                <div className="customer-name">{customerName}</div>
                <div className="rating"><RatingParser rating={rating || 0} /></div>
            </div>
            <p>{comment}</p>
            <span>reviewd on {date}</span>
        </div>
    )
}

export default CommentCard