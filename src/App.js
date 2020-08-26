import React, {useState } from "react";
import Game from './Game';

export default function App() {
  const [hsize, setHSize] = useState(10);
  const [vsize, setVSize] = useState(10);

  console.log('app js drawing');

  return (
    <div>
      <Game 
        hsize={hsize}
        vsize={vsize}
      />
    </div>
  );
}
