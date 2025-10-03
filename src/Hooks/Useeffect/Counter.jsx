import React, { useEffect, useState } from 'react'

const FetchData = () => {

    const [counter, setCounter] = useState(0)
    useEffect(() => {
      console.log("Hello");
      document.title = counter
    }, [counter])
    

  return (
    <div>
        <p>Counter: {counter}</p>
        <button onClick={()=>{setCounter(counter + 1)}}>Increment</button>
        <button onClick={()=>{setCounter(counter - 1)}}>Decrement</button>
        <button onClick={()=>{setCounter(0)}}>Reset</button>
    </div>
  )
}

export default FetchData