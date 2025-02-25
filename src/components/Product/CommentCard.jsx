import React from 'react'
import RatingParser from '../../util/RatingParser'
import userImage from './../../assets/icons/User.svg'

const CommentCard = ({ img, customerName, rating, body, date, options }) => {
    return (
        <div className="comment-card">
            <div className="header flex2">
                <img src={img || userImage} alt="" />
                <div className="customer-name">{customerName}</div>
                <div className="rating"><RatingParser rating={rating || 0} /></div>
            </div>
            <p>{body}</p>
            <span>Reviewed on {new Date(date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            })}</span>
        </div>
    )
}

export default CommentCard