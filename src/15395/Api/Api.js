import React, { useState, useEffect } from 'react';
import initialState from './state';

function MyApiComponent() {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(
        (result) => {
          setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          setState({
            isLoaded: false,
            error: error
          });
        })
  }

  if (!state.isLoaded) {
    return <div>Loading...</div>;
  }
  if (state.error) {
    return <div>Error: {state.error.message}</div>;
  } else {
    return (
       <ul>
      {state.items?.map(item => (
        <li key={item.id}>Title: {item.title}</li>
      ))}
      </ul>
    );
  }
}

export default MyApiComponent;