import React, { useCallback, useState } from 'react'
import Button from './Button';

const Index = () => {

    const [count, setCount] = useState(0);
    const [darkMode, setDarkMode] = useState(false);

    // const handleClick = ()=>setCount(count + 1);

    const handleClick = useCallback(
      () => {
        setCount((prev)=> prev + 1);
      },
      [],
    );
    

  return (
    <div style={{background:darkMode ? "#333": "#fff", color:darkMode? "#fff":"#333"}}>
        <h1>count: {count}</h1>
        <Button onClick={handleClick}/>
        <button onClick={()=>setDarkMode(!darkMode)}>Toggle Theme</button>
    </div>
  )
}

export default Index