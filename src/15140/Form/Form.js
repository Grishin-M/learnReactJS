import { useState } from 'react';
import StartValues from '../Form/state'
import '../Form/Form.css'

// один useState ???? { } refactoring
// один обработчик

function From() {
  
  const [input, setInput] = useState(StartValues);

  const changeValue = (event) => {
    const { name, value } = event.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  };

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
            <button className='btn-form' type="button" onClick={() => setInput(() => ({
              Result: String('Имя: ' + input.userName) + ' ' + 
              String('Фамилия: ' + input.surname) + ' ' + 
              String('Возраст: ' + input.age)
              }))}>Отправить</button>
            <p>Результат: {input.Result}</p>
          </div>

       </form>
      </div>
  )
}

export default From;