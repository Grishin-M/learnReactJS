import './App.css';
import Form from './15140/Form/Form'
import Timer from './15140/Timer/Timer'
import MyApiComponent from './15395/Api/Api'
import AnyFunc from './15466/useCallback/AnyFunc'
import CounterForMemo from './15466/useMemo/counterForMemo'
import Ref from './15466/useRef/Ref'
import Input from './15911/Input'
import TodoItem from './15911/TodoItem'

import { useSelector } from 'react-redux'
import { selectTodoList } from './features/todoSlice'


function App() {
  const todoList = useSelector(selectTodoList)

  return (
    <div className='wrapper'>
      <div className='wrapp_container'>
        <div className='wrapp_todoContainer'>
          {
            todoList.map(item => (
              <TodoItem
                name={item.item}
                done={item.done}
                id={item.id}
              />
            ))
          }
        </div>
        <Input />
      </div>
      <Ref />
      <CounterForMemo />
      <AnyFunc />
      <Form />
      <Timer />
      <MyApiComponent />
    </div>
  )
}

export default App;
