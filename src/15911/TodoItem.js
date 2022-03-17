import React from 'react'
import './TodoItem.css'
import Checkbox from '@material-ui/core/Checkbox/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const TodoItem  = ({name, done, id}) => {
  const handleCheck = () => {

  }

  return (
    <div className='todoItem'>
      <Checkbox {...label} />
      <p className={done && 'todoItem--done'}>{name}</p>
    </div>
  )
}

export default TodoItem