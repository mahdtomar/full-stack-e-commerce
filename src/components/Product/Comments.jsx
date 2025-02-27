import { useEffect, useState } from 'react'
import Request from '../../Api/Axios'
import user1 from './../../assets/images/user-1.png'
import user2 from './../../assets/images/user-2.png'
import user3 from './../../assets/images/user-3.png'
import CommentCard from './CommentCard'
import RatingInput from './RatingInput'
import './scss/Comments.css'
import AddComment from './AddComment'
import { useLogin } from '../../context/LoginStatus'

const Comments = ({ productId }) => {
    // const comments = [
    //     {
    //         img: user1,
    //         customerName: "Michael Brown",
    //         rating: 5,
    //         comment: "Absolutely love this product! The quality exceeded my expectations, and the delivery was super quick. Highly recommend it!",
    //         date: "October 10, 2024"
    //     },
    //     {
    //         img: user2,
    //         customerName: "James P.",
    //         rating: 4,
    //         comment: "Great value for money. The item works as described, but I wish it came in more color options.",
    //         date: "July 21, 2024"
    //     },
    //     {
    //         img: user3,
    //         customerName: "Sarah L.",
    //         rating: 4.3,
    //         comment: "Good product overall. I deducted one star because it took a bit longer than expected to arrive.",
    //         date: "Jan 13, 2024"
    //     },
    // ]
    const { user } = useLogin()
    console.log(user)
    const [comments, setComments] = useState([])
    const getComments = async () => {
        try {
            const res = await Request(`/comments/${productId}`, "GET")
            console.log(res.data)
            setComments(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getComments()
    }, [])
    return (
        <div className={'product-comments-root'}>
            <h2>Comments</h2>
            <div className="container flexv">
                <AddComment productId={productId} />
                {
                    comments.map(({ user_id, img, userName, rating, body, reviewed_at }, i) => {
                        if (user_id === user?._id) {
                            console.log(user)
                            return
                        }
                        return <CommentCard
                            key={user_id}
                            img={img}
                            customerName={userName}
                            rating={rating}
                            body={body}
                            date={reviewed_at} />
                    })
                }
                < div className="cta flex2">
                    <button className="primary">Review All Comments</button>
                    {/* <button className="secondary" onClick={addComment}>Add A Comment</button> */}
                </div>
            </div>
        </div >
    )
}

export default Comments