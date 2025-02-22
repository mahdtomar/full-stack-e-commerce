import React, { useState } from 'react'

const AddComment = () => {
    const [commentBody, setCommentBody] = useState('')
    return (
        <div className='product-page-add-comment'>
            <div className="flexv">

                <input type="text" value={commentBody} onChange={e => setCommentBody(e.target.value)} name="comment-body" id="comment-body" />
            </div>

        </div>
    )
}

export default AddComment