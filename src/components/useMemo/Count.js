import React from "react";
import { useMemo } from 'react';

function Count ({value}) {
  
    const getResult = useMemo(() => {
      let i = 0;
      while(i < 6000000) i++;
      return value === 5 ? 'Yeah!' : 'Nope';
    },[value])

  return(
    <div>
      <h1>{value} {getResult}</h1>
    </div>
  );
};

export default Count;