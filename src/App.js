import React, {useState } from "react";
import Game from './Game';

export default function App() {
  const [hsize, setHSize] = useState(10);
  const [vsize, setVSize] = useState(10);

  const sizeChangeHandler = (event) => {
    event.preventDefault();
    setHSize(event.target.value)
  }

  
  return (
    <div>
      {/* <input type='number' onChange={sizeChangeHandler} value={hsize}></input> */}
      <Game 
        hsize={hsize}
        vsize={vsize}
      />
    </div>
  );
}
