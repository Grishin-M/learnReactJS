import React, { useState, useEffect, useRef } from 'react';
import '../Timer/Timer.css';
import initialValues from './state'

function Timer(){
  const [time, setTime] = useState(initialValues);

  const timer = useRef(0);
  
  const fooForTimer = () => {
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
  }

  useEffect(() => {
    timer.current = setInterval(fooForTimer, 10);
    return () => clearInterval(timer.current);
  }, [timer.current]);

  const restart = () => setTime(initialValues);
  const stop = () => {
    clearInterval(timer.current);
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