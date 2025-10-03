import React from 'react'
import StateGov from './StateGov'

const IndianGov = () => {
    const money = 100;
  return (
    <div><h1>This is indian gov component</h1>
    <StateGov money={money}/>
    </div>
    
  )
}

export default IndianGov