import { useState } from 'react';
import Count from './Count';


// useMemo сделать так чтобы чтобы значение вычислялось в дочернем компоненте только если пропс поменялся (придумать какие то values)

function CounterForMemo() {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div className='wrapCounter'>
      <h5>Counter 1</h5>
      <div className='counter'>
        <button onClick={() => setCount1(count1 + 1)}>+</button>
        <Count value={count1} />
      </div>
      <h5>Counter 2</h5>
      <div className='counter'>
        <button onClick={() => setCount2(count2 + 1)}>+</button>
        <Count value={count2} />
      </div>
    </div>
  );
}

export default CounterForMemo;