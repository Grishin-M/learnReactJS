import { useState } from 'react';
import '../Counter/Counter.css';

function Counter() {
  const [item, setItem] = useState(0);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  const clearItem = () => setItem(0); 
  
  return (
    <div>
      <div className='wrapper-second'>
        <button className='btn btn-up' onClick={incrementItem}><span>&#9650;</span> Go up <span>&#9650;</span></button>
        <div className='App'>
          <h1>{item}</h1>
        </div>
        <button className='btn btn-down' onClick={decrementItem}><span>&#9660;</span> Go down <span>&#9660;</span></button>
      </div>
      <div className='cleaning'><button className='btn btn-clear' onClick={clearItem}>Clear</button></div>
    </div>
  )
}

export default Counter;