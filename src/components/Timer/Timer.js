import React, { useState, useEffect } from 'react';
import '../Timer/Timer.css';

function Timer() {
  
  const [mseconds, setMSeconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  
  let timer;
  
  useEffect(() => {
    timer = setInterval(() => {
      setMSeconds(mseconds + 1);
        if(mseconds === 100) {
          setSeconds(seconds + 1);
          setMSeconds(0);
        }
        if(seconds === 59) {
          setMinutes(minutes + 1);
          setSeconds(0)
        }
    }, 10)
  
    return () => clearInterval(timer);
  
  });

  const restart = () => {
    setMSeconds(0);
    setSeconds(0);
    setMinutes(0);
  }
  const stop = () => {
    clearInterval(timer);
  }

  return (
       <div className='Clock'>
         <h1>Секундомер</h1>
         <h1>{minutes}:{seconds}:{mseconds}</h1>
         <div className='timerButtons'>
           <button className='restart' onClick={restart}>Перезапустить</button>
           <button className='stop' onClick={stop}>Стоп</button>
         </div>
       </div>
  )

}

export default Timer