import { useState } from 'react';
import '../Form/Form.css'

// один useState ???? { } refactoring
// один обработчик

function From() {
  const StartValues = {
    Name: '',
    Surname: '',
    Age: '',
    Result: ''
  }

  const [input, setInput] = useState(StartValues);

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
           
            <input className='form-input' type='text' placeholder='Иван' required
            onChange={(event) => setInput((prevState) => ({
              ...prevState,
              Name: event.target.value
            }))}></input>
           
            <input className='form-input' type='text' placeholder='Иванов' required 
            onChange={(event) => setInput((prevState) => ({
              ...prevState,
              Surname: event.target.value
            }))}></input>
           
            <input className='form-input' type='number' 
            onChange={(event) => setInput((prevState) => ({
              ...prevState,
              Age: event.target.value
            }))}></input>

          </div>

          <div className='form-btn'>    
            <button className='btn-form' type="button" onClick={() => setInput(() => ({
              Result: String('Имя: ' + input.Name) + ' ' + 
              String('Фамилия: ' + input.Surname) + ' ' + 
              String('Возраст: ' + input.Age)
              }))}>Отправить</button>
            <p>Результат: {input.Result}</p>
          </div>

       </form>
      </div>
  )
}

export default From;