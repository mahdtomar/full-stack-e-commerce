import React, { useRef, useState } from 'react'
import RatingInput from './RatingInput'
import './scss/AddComment.css'
import userImage from './../../assets/icons/User.svg'
import log from '../../util/Log'
import { useNotification } from '../../hooks/useNotification'
import Request from '../../Api/Axios'
const AddComment = ({ productId }) => {
    const [commentBody, setCommentBody] = useState('')
    const [rating, setRating] = useState(null)
    // const [error, setError] = useState('')
    const user = JSON.parse(localStorage.getItem("user-info"));
    const userInfoRef = useRef(null)
    const commentBodyRef = useRef(null)
    const { showNotification } = useNotification()
    log("user info :", user)
    const validateComment = () => {
        console.log("clicked")
        if (!rating && !commentBody) {
            showNotification("error", "Please provide a rating and a comment");
            return false
        }
        if (!rating) {
            showNotification("error", "Please provide a rating");
            return false
        }
        if (!commentBody) {
            showNotification("error", "comment body cannot be empty");
            return false
        }
        return true
    }

    const addComment = async () => {
        if (!validateComment()) return
        const payload = JSON.stringify({
            product_id: productId,
            rating: rating,
            comment: commentBody,
            user_id: user?.id
        })
        const res = await Request("/add-comment", "POST", false, undefined, undefined, payload)
        console.log(res)
    }

    return (
        <div className='product-page-add-comment'>
            <div className="flexv comment-card">
                <div className="flex2">
                    <div className="user-info flex2 ">
                        <img className='user-avatar' src={user?.avatar || userImage} alt="user" />
                        <h3>{user?.name || "Guest"}</h3>
                        <div ref={userInfoRef} className="rating-container">
                            <RatingInput setRating={setRating} rating={rating} />
                        </div>
                    </div>
                    <button className="primary" onClick={addComment}>Post</button>
                </div>
                <textarea ref={commentBodyRef} type="text" value={commentBody} onChange={e => setCommentBody(e.target.value)} name="comment-body" id="comment-body" placeholder="Comment Your Thoughts..." />
            </div>
        </div>
    )
}

export default AddComment