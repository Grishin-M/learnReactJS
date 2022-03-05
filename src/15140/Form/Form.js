import { useState } from 'react';
import initialState from './state'
import '../Form/Form.css'

function From(){
  
  const [input, setInput] = useState(initialState);

  const changeValue = (event) => {
    const { name, value } = event.target;
    setInput((prev) => ({ ...prev, [name]: value }))
  };

  const showResult = () => {
    setInput(() => ({Result: 'Имя: ' + input.userName + ' ' + 'Фамилия: ' + input.surname + ' ' + 'Возраст: ' + input.age}))
  }

  return (
      <div className='wrapper-form'>
       <form className='form'>
          <div className='form-style'>
            <label 
            aria-label='Имя'
            className='form-label'>Имя<sup>*</sup>: </label>
            <label 
            aria-label='Фамилия'
            className='form-label'>Фамилия<sup>*</sup>: </label>
            <label 
            aria-label='Возраст:'
            className='form-label'>Возраст: </label>
          </div>
          <div className='form-style'>
            <input
              className='form-input'
              type='text'
              placeholder='Иван'
              required
              onChange={changeValue}
              name="userName"
            />
            <input
              className='form-input'
              type='text'
              placeholder='Иванов'
              required 
              onChange={changeValue}
              name="surname"
            />
            <input
              className='form-input'
              type='number' 
              onChange={changeValue}
              name="age"
            />
          </div>
          <div className='form-btn'>    
            <button className='btn-form' type="button" onClick={showResult}>Отправить</button>
            <p>Результат: {input.Result}</p>
          </div>
       </form>
      </div>
  )
}

export default From;