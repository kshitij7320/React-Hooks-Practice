import React, { useEffect, useState } from 'react'

const FetchData = () => {

  const [todo, setTodo] = useState([]);
  
  useEffect(() => { 
    const fetchDataFromApi = async ()=>{
      const api = await fetch('https://jsonplaceholder.typicode.com/todos')
      const result = await api.json();
      setTodo(result);
    }
    fetchDataFromApi();
  }, [])
  
  
  return (
    <div>
      <h2>Todos List</h2>
      <ul>
        {todo.map(todo => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? "(Completed)" : ""}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FetchData