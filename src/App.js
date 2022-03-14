import './App.css';
import Form from './15140/Form/Form'
import Timer from './15140/Timer/Timer'
import MyApiComponent from './15395/Api/Api'
import UseCallback from './15466/useCallback/UseCallback'

function App() {

  return (
    <div className='wrapper'>
      <UseCallback />
      <Form />
      <Timer />
      <MyApiComponent />
    </div>
  )
}

export default App;
