import React, { useState, useEffect } from 'react';
import initialState from './state';

function MyApiComponent() {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(
        (result) => {
          setState({isLoaded: true});
          setState({items: result});
        },
        (error) => {
          setState({isLoaded: true});
          setState({error: error});
        }
      )
  }, [])

  if (state.error) {
    return <div>Error: {state.error.message}</div>;
  } else if (!state.isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {state.items.map(item => (
          <li key={item.userId}>
            Id: {item.id} Title: {item.title}
          </li>
        ))}
      </ul>
    );
  }
}

export default MyApiComponent;