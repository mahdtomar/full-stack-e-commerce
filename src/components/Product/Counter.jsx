import React from 'react'

const Counter = ({ count, setCount }) => {
    return (
        <div>
            <span onClick={() => { setCount(count => count++) }}>+</span>
            <span>{count}</span>
            <span onClick={() => { setCount(count => count--) }}>-</span>
        </div>
    )
}

export default Counter