/**
 * 1) Деструктуризация
 * 2) src создай папку components и в components создай counter все файлы которые относяться
 * к counter стили + js перереси в эту папку
 * 3) https://www.figma.com/file/QeXcjax3L9FlCEc0ikhBpk/360-View-(Copy)?node-id=17032%3A236568
 * создать папку form и сделать неблоьшую форму три инпута и три лейбла см фигму
 * 3a) поле имя type="text"
 * 3b) поле фамилия type="text"
 * 3c) возраст type="number"
 * 4) создай папку timer напиши таймер
 * и кнопку типо отправить и поработать с onClick useState, onChange 
 * 5) после ввода данных отобразить все это все в виде строки снизу или сверху
 */

// useRef создать ссылку на дом ноду и прекрепить ее к самой ноде и по клику в консоле выводить любую ноду

// useMemo сделать так чтобы чтобы значение вычислялось в дочернем компоненте только если пропс поменялся (придумать какие то values)

// useCallback сделать тоде самое для мемоизации функции в useCallback

// что такое event loop и задачки я скину

// микро макро таски их отличие понятие асинхронности в js

// написать свой кастомный customMap аналог реального map из языка js

import './App.css';
import Counter from './components/Counter/Counter'
import Form from './components/Form/Form'
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
      {/*<Timer />
      <MyApiComponent /> */}
    </div>
  )
}

export default App;
