import './App.css';
import Form from './15140/Form/Form'
import Timer from './15140/Timer/Timer'
import MyApiComponent from './15395/Api/Api'
import AnyFunc from './15466/useCallback/AnyFunc'

function App() {

  return (
    <div className='wrapper'>
      <AnyFunc />
      <Form />
      <Timer />
      <MyApiComponent />
    </div>
  )
}

export default App;
