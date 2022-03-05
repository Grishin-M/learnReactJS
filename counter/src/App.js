import './App.css';
import Form from './components/Form/Form'
import Counter from './components/Counter/Counter'
// import Timer from './components/Timer/Timer'
// import MyApiComponent from './components/Api/Api';
// import CounterForMemo from './components/useMemo/counterForMemo';
// import UseCallback from './components/useCallback/UseCallback';
// import Ref from './components/useRef/Ref';

function App() {
  
  return (
    <div className='wrapper'>
      {/* <CounterForMemo />
      <UseCallback />      
      <Ref /> */}
      <Counter />
      <Form />
      {/* <Timer />
      <MyApiComponent /> */}
    </div>
  )
}

export default App;
