import React, { useState, useCallback } from "react";
import List from './List'

function UseCallback() {
  const [number, setNumber] = useState(1)
  const [myColor, setMyColor] = useState(false)

  const getItems = useCallback(() => {
    return [number + 2]
  }, [number])

  const changeStyle = {
    color: myColor ? 'red' : 'black'
  }

  return (
    <div style={changeStyle}>
      <input
        type='number'
        value={number}
        onChange={event => setNumber(parseInt(event.target.value))}
      />
      <button onClick={() => setMyColor(prev => !prev)}>
        Click Me
      </button>
      <List getItems={getItems} />
    </div>
  )
}

export default UseCallback;