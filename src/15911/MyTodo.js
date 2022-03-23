import Input from './Input'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'
import { selectTodoList } from '../features/todoSlice'

const MyTodo = () => {
    const todoList = useSelector(selectTodoList)
  return (
    <div className='wrapp_container'>
        <div className='wrapp_todoContainer'>
          {
            todoList.map(item => (
              <TodoItem
                name={item.item}
                done={item.done}
                id={item.id}
                key={item.toString()}
              />
            ))
          }
        </div>
        <Input />
      </div>
  )
}

export default MyTodo