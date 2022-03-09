import React, { useState, useEffect, useRef } from 'react';
import '../Timer/Timer.css';

function Timer() {

  const initialValues = {
    mseconds: 0,
    seconds: 0,
    minutes: 0,
  }
  
  const [time, setTime] = useState(initialValues);

  let timer = useRef(initialValues);
  
  console.log(timer)
  
  useEffect(() => {
   timer.current = setInterval(() => {
      setTime((prev) => {
        if (time.mseconds < 100) {
          return {
            ...prev,
            mseconds: time.mseconds + 1,
          }
        }
        if (time.mseconds === 100 && time.seconds < 60) {
          return {
            ...prev,
            seconds: time.seconds + 1,
            mseconds: time.seconds = 0
          }
        }
        if (time.seconds <= 60 && time.minutes < 60) {
          return {
            ...prev,
            minutes: time.minutes + 1,
            seconds: time.seconds = 0
          }
        }
        return prev;
      })
    }, 10)
    return () => clearInterval(timer);
  });

  const restart = () => {
    setTime(() => (initialValues))
  }
  const stop = () => {
    clearInterval(timer);
  }

  return (
       <div className='Clock'>
         <h1>Секундомер</h1>
         <h1>{time.minutes}:{time.seconds}:{time.mseconds}</h1>
         <div className='timerButtons'>
           <button className='restart' onClick={restart}>Перезапустить</button>
           <button className='stop' onClick={stop}>Стоп</button>
         </div>
       </div>
  )

}

export default Timer