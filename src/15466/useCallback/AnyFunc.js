import React, { useState, useCallback } from "react";
import List from './List'
import initialState from "./state";
import '../useCallback/style.css'

function AnyFunc() {
  const [state, setState] = useState(initialState)

  const changeInputValue = useCallback((event) => {
    setState((prev) => ({ ...prev, number: parseInt(event.target.value)}))
  }, [])
  
  const changeStyleValue = useCallback(() => {
    setState((prev) => ({ ...prev, myColor: !prev.myColor }))
  }, [])

  return (
    <div className="forAnyFunc" style={{color: state.myColor ? 'red' : 'black'}}>
      <h2>useCallback</h2>
      <input
        type='number'
        value={state.number}
        onChange={changeInputValue}
      />
      <button onClick={changeStyleValue}>
        Click Me
      </button>
      <List getItems={state.number} />
    </div>
  )
}

export default AnyFunc;