import './App.css';
import Form from './15140/Form/Form'
import Timer from './15140/Timer/Timer'
import MyApiComponent from './15395/Api/Api'
import AnyFunc from './15466/useCallback/AnyFunc'
import CounterForMemo from './15466/useMemo/counterForMemo'
import Ref from './15466/useRef/Ref'

function App() {

  return (
    <div className='wrapper'>
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
