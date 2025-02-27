import React, { useEffect, useRef, useState } from 'react'
import RatingInput from './RatingInput'
import './scss/AddComment.css'
import userImage from './../../assets/icons/User.svg'
import log from '../../util/Log'
import { useNotification } from '../../hooks/useNotification'
import Request from '../../Api/Axios'
import { useLogin } from '../../context/LoginStatus'
import CommentCard from './CommentCard'
const AddComment = ({ productId }) => {
    const [commentBody, setCommentBody] = useState('')
    const [rating, setRating] = useState(null)
    const { isLogged, setShowLoginPopup, user } = useLogin()
    const { showNotification } = useNotification()
    const [currentComment, setCurrentComment] = useState(null)
    const userInfoRef = useRef(null)
    const commentBodyRef = useRef(null)
    const verifyLogin = () => {
        if (!isLogged) {
            setShowLoginPopup(true)
            showNotification("error", "You need to login to post a comment")
            setRating(null)
            setCurrentComment("")
        }
    }
    const validateComment = () => {
        verifyLogin()
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
            body: commentBody,
            user_id: user?.id,
            userName: user?.name
        })
        const res = await Request("/add-comment", "POST", false, undefined, undefined, payload)
        log('comment response', res)
        if (res.data) {
            showNotification("success", "Comment posted successfully")
            setRating(null)
            setCommentBody('')
            checkComment()
        }
    }
    const checkComment = async () => {
        const res = await Request("/check-user-comment", "POST", false, undefined, undefined, JSON.stringify({ product_id: productId, }))
        setCurrentComment(res.data)
        log('check comment', res)
    }
    useEffect(() => {
        if (rating) {
            verifyLogin()
        }
    }, [rating])
    useEffect(() => {
        isLogged && checkComment()
    }, [isLogged])
    return (
        <div className='product-page-add-comment'>
            {currentComment ? <CommentCard {...currentComment} customerName={user?.name} date={currentComment.reviewed_at} /> :
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
                    <textarea ref={commentBodyRef} type="text" onFocus={() => { verifyLogin() }} value={commentBody} onChange={e => setCommentBody(e.target.value)} name="comment-body" id="comment-body" placeholder="Comment Your Thoughts..." />
                </div>
            }
        </div>
    )
}

export default AddComment