import React, { useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const increment = ()=>{
        setCounter(counter + 1);
    }
    const decrement = ()=>{
        setCounter(counter - 1);
    }
    const reset = ()=>{
        setCounter(0);
    }

  return (
    <div style={{
        justifyContent: 'center',
    }}>
        <p>Counter: {counter}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>

    </div>
  )
}

export default Counter