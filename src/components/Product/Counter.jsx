import plus from './../../assets/icons/Plus.svg'
import minus from './../../assets/icons/Minus.svg'
import './scss/Counter.css'
const Counter = ({ count, setCount, min }) => {
    return (
        <div className='counter flex2'>
            <span onClick={() => { setCount(count => count + 1) }}><img src={plus} alt='plus icon' /></span>
            <span>{count}</span>
            <span onClick={() => { setCount(count => Math.max(count - 1 || min)) }}><img src={minus} alt='minus icon' /></span>
        </div>
    )
}

export default Counter