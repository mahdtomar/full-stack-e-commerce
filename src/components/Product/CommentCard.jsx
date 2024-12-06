import React from 'react'

const CommentCard = ({ img, customerName, rating, comment, date }) => {
    return (
        <div className="comment-card">
            <div className="header">
                <img src={img} alt="" />
                <div className="customer-name">{customerName}</div>
                <div className="rating"></div>
            </div>
            <p>{comment}</p>
            <span>reviewd on{date}</span>
        </div>
    )
}

export default CommentCard