import React from 'react'
import './TodoItem.css'
import Checkbox from '@material-ui/core/Checkbox/Checkbox';
import { useDispatch } from 'react-redux';
import { setCheck } from '../features/todoSlice';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const TodoItem  = ({name, done, id}) => {
  const dispatch = useDispatch()

  const handleCheck = () => {
    dispatch(setCheck(id))
  }

  return (
    <div className='todoItem'>
      <Checkbox {...label} onChange={handleCheck} />
      <p className={done ? 'todoItem--done' : ''}>{name}</p>
    </div>
  )
}

export default TodoItem