import React from 'react'
import { useNavigate } from 'react-router-dom'
const navigate = useNavigate()
const handleExpiredToken = () => {
    return (
        <div>handleExpiredToken</div>
    )
}

export const handleToken = (errorMSG)=>{
    if(errorMSG==="login required"){
        navigate("/login")
    }
}
export default handleExpiredToken