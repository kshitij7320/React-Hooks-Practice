import React from 'react'
import Context from '../Context'
import { useContext } from 'react'

const People = ({money}) => {

  const data =(useContext(Context))

  return (
    <div><h1>This is people Component = {data.money}</h1>
    <button onClick={()=>data.setCounter(data.counter + 1)}>Increase</button>
    <h1>Counter = {data.counter}</h1>
    </div>
  )
}

export default People