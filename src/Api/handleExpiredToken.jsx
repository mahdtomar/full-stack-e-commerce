import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const navigate = useNavigate()
const handleExpiredToken = ({errorMsg}) => {
    
 const handleToken = ()=>{
        if(errorMsg==="login required"){
            navigate("/login")
        }
    }
    useEffect(()=>{
        handleToken()
    },[])
    return (
        <div>handleExpiredToken</div>
    )
}
export default handleExpiredToken