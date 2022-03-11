import React, { useState, useEffect } from 'react';
import initialState from './state';

function MyApiComponent() {
  const [state, setState] = useState(initialState)
  
  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try{
      const result = await fetch("https://jsonplaceholder.typicode.com/todos")
      const getResult = await result.json()
    setState({
          isLoaded: true,
          items: getResult 
     });
    } catch (error) {
      setState({
              isLoaded: false,
              error: state.error
            });
    }

  }

  if (!state.isLoaded) {
    return <div>Loading...</div>;
  }
  if (state.error) {
    return <div>Error: {state.error.message}</div>;
  }
  return (
    <ul>
      {state.items?.map(item => (
        <li key={item.id}>Title: {item.title}</li>
      ))}
    </ul>
    )
}

export default MyApiComponent;