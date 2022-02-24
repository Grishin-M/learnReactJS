import { useState } from 'react';
import '../Form/Form.css'

function From() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState();
  const [result, getResult] = useState();
  
  return (
      <div className='wrapper-form'>
       <form className='form'>
          <div className='form-style'>
            <label className='form-label'>Имя<sup>*</sup>: </label>
            <label className='form-label'>Фамилия<sup>*</sup>: </label>
            <label className='form-label'>Возраст: </label>
          </div>
          <div className='form-style'>
            <input className='form-input' type='text' placeholder='Иван' required value={input1} onChange={event => setInput1(event.target.value)}></input>
            <input className='form-input' type='text' placeholder='Иванов' required value={input2} onChange={event => setInput2(event.target.value)}></input>
            <input className='form-input' type='number' value={input3} onChange={event => setInput3(event.target.value)}></input>
          </div>
          <div className='form-btn'><button className='btn-form' type="button" onClick={() => getResult(String('Имя: ' + input1) + ' ' + String('Фамилия: ' + input2) + ' ' + String('Возраст: ' + input3))}>Отправить</button>
          <p>Результат: {result}</p>
          </div>
       </form>
      </div>
  )
}

export default From;