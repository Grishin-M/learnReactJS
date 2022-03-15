import { useState } from 'react';
import Count from './Count';


// useMemo сделать так чтобы чтобы значение вычислялось в дочернем компоненте только если пропс поменялся (придумать какие то values)

function CounterForMemo() {
  const [count1, setCount1] = useState(0);
  
  return (
    <div className='wrapCounter'>
      <h2>Counter with useMemo</h2>
      <div className='counter'>
        <button
          onClick={() => setCount1(count1 + 1)}
          style={{width:'35px', height:'35px'}}
        >
        +
        </button>
        <button
          onClick={() => setCount1(count1 - 1)}
          style={{width:'35px', height:'35px'}}
        >
        -
        </button>
        <Count value={count1} />
      </div>
    </div>
  )
}

export default CounterForMemo;