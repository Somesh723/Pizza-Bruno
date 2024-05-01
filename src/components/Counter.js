import './../style/Counter.css'
import { useState } from 'react';


function Counter(props) {
    const [count, setCount] = useState(()=>{
        return 0;
    });

    function decrement() {
        setCount(prevCount => prevCount - 1);
    }

    function increment() {
        setCount(prevCount => prevCount + 1);
    }

    return (
        <div className='counter'>
        <button className='counter-button' onClick={decrement}>-</button>
        <span className='counter-text'>{count}</span>
        <button className='counter-button' onClick={increment}>+</button>
        </div>
    );
}

export default Counter 