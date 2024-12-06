import React from 'react'
import CommentCard from './CommentCard'

const Comments = () => {
    const comments = [
        {
            img:"",
            customerName: "Michael Brown",
            rating: 5,
            comment: "Absolutely love this product! The quality exceeded my expectations, and the delivery was super quick. Highly recommend it!",
            date: "October 10, 2024"
        },
        {
            img:"",
            customerName: "James P.",
            rating: 4,
            comment: "Great value for money. The item works as described, but I wish it came in more color options.",
            date: "July 21, 2024"
        },
    ]
    return (
        <div className={'product-comments-root'}>
            <h2>Comments</h2>
            {comments.map(({ img, customerName, rating, comment, date }) => <CommentCard
                img={img}
                customerName={customerName}
                rating={rating}
                comment={comment}
                date={date} />)}
        </div>
    )
}

export default Comments