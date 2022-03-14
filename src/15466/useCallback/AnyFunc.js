import React, { useState, useCallback } from "react";
import List from './List'
import initialState from "./state";
import '../useCallback/style.css'

function AnyFunc() {
  const [state, setState] = useState(initialState)

  const getItems = () => {
    return state.number
  }
  const changeStyle = {
    color: state.myColor ? 'red' : 'black'
  }

  const changeInputValue = useCallback((event) => {
    setState((prev) => ({ ...prev, number: parseInt(event.target.value)}))
  }, [state.number])
  
  const changeStyleValue = useCallback(() => {
    setState((prev) => ({ ...prev, myColor: !prev.myColor }))
  }, [state.myColor])

  return (
    <div className="forAnyFunc" style={changeStyle}>
      <h2>useCallback</h2>
      <input
        type='number'
        value={state.number}
        onChange={changeInputValue}
      />
      <button onClick={changeStyleValue}>
        Click Me
      </button>
      <List getItems={getItems} />
    </div>
  )
}

export default AnyFunc;