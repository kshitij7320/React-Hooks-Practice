import React, { useLayoutEffect, useState } from 'react'

const ChangeBg = () => {

    const [color, setColor] = useState("lightblue");

    useLayoutEffect(() => {
      document.body.style.backgroundColor = color;

    }, [color])

  return (
    <div>
        <h2>Current Background :{color}</h2>
        <button onClick={()=> setColor("red")}>Red</button>
        <button onClick={()=> setColor("blue")}>Blue</button>
        <button onClick={()=> setColor("olive")}>Olive</button>
    </div>
  )
}

export default ChangeBg