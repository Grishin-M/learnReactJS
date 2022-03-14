import React, { useState, useRef } from "react";

function Ref() {
  
  const [num, setNum] = useState(0);

  const forLabel = useRef()
  const forInput = useRef()
  const allDOM = useRef();

  const getNum = () => {
    console.log(forLabel.current);
    console.log(forInput.current);
    console.log(allDOM.current);
  }

  return(
    <div style={{margin:"15px 0 50px 0"}} ref={allDOM}>
      <h2>useRef</h2>
      <label
        ref={forLabel}
      >someLabelText</label>
      <br/><br/>
      <input
        type="number"
        value={num}
        onChange={ev => setNum(ev.target.value)}
        ref={forInput}
      />
      <br/><br/>
      <button onClick={() => getNum()}>Click</button>
    </div>
  )
}

export default Ref;