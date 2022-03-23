import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";
import './input.css'

const Input = () => {
  const [input, setInput] = useState('')
  
  const dispatch = useDispatch()
  const addTodo = () => {
    dispatch(saveTodo({
      item: input,
      done: false,
      id: Date.now()
    }))
  }

  return (
    <div className="input">
      <input id="inputAddTodo" type='text' value={input} onChange={event => setInput(event.target.value)} />
      <button id="btnAddTodo" onClick={addTodo}>Добавить</button>
    </div>
  )
}
export default Input