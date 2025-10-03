import React from 'react'
import UseFetch from './UseFetch'

const Index = () => {

  const { data, loading, error } = UseFetch("https://jsonplaceholder.typicode.com/todos");

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error}</p>;
return (
  <ul>
    {data.map(todo => (
      <li key={todo.id}>{todo.title}</li>
    ))}
  </ul>
);

}

export default Index