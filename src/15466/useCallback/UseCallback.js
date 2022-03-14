import React, { useState, useCallback } from "react";
import List from './List'
import initialState from "./state";

function UseCallback() {
  const [state, setState] = useState(initialState)

  const getItems = useCallback(() => {
    return [state.number + 2]
  }, [state.number])

  const changeStyle = {
    color: state.myColor ? 'red' : 'black'
  }

  const changeInputValue = (event) => {
    setState({number: event.target.value})
  };

  const changeStyleValue = () => {
    setState({myColor: prev => !prev})
  }

  return (
    <div style={changeStyle}>
      <h2>useCallback</h2>
      <input
        type='number'
        value={state.number}
        onChange={changeInputValue}
      />
      <button
        onClick={changeStyleValue}
        style={{margin: '0 0 0 20px'}}
      >
        Click Me
      </button>
      <List getItems={getItems} />
    </div>
  )
}

export default UseCallback;