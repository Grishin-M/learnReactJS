import './App.css';
import { Routes, Route } from 'react-router-dom'
import Form from './15140/Form/Form'
import Timer from './15140/Timer/Timer'
import MyApiComponent from './15395/Api/Api'
import AnyFunc from './15466/useCallback/AnyFunc'
import CounterForMemo from './15466/useMemo/counterForMemo'
import Ref from './15466/useRef/Ref'
import MyTodo from './15911/MyTodo'

function App() {
  return (
    <div className='wrapper'>
      <ul className='links'>
        <ol><a href='/ref'>Ref</a></ol>
        <ol><a href='/counterForMemo'>CounterForMemo</a></ol>
        <ol><a href='/anyFunc'>AnyFunc</a></ol>
        <ol><a href='/form'>Form</a></ol>
        <ol><a href='/timer'>Timer</a></ol>
        <ol><a href='/myApiComponent'>MyApiComponent</a></ol>
        <ol><a href='/todo'>Todo</a></ol>
      </ul>
      <Routes>
        <Route path='/ref' element={<Ref />}/>
        <Route path='/counterForMemo' element={<CounterForMemo />}/>
        <Route path='/anyFunc' element={<AnyFunc />}/>
        <Route path='/form' element={<Form />}/>
        <Route path='/timer' element={<Timer />}/>
        <Route path='/myApiComponent' element={<MyApiComponent />}/>
        <Route path='/todo' element={<MyTodo />}/>
      </Routes>
    </div>
  )
}

export default App;
