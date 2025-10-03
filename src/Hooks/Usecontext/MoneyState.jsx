import React, { useState } from 'react'
import Context from './Context'

const MoneyState = (props) => {
    const money = 1000;

    const [counter, setCounter] = useState(0)

  return (
    <Context.Provider value={{money,counter,setCounter}}>
        {props.children}

    </Context.Provider>
  )
}

export default MoneyState