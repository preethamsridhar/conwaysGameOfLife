import React, {useState} from 'react';
import styles from './styles.css';

export default function Index(props) {

  const [alive, setAlive] = useState(false);

  function toggleAlive() {
    if (!alive) {
      props.addLiveBlock(props.x, props.y);
    } 
    else {
      props.removeLiveBlock(props.x, props.y);
    }
    setAlive(!alive)
  }

  return (
    <div 
      style ={{
        width: props.blockWidth,
        height: props.blockHeight,
        // background: alive ? 'radial-gradient(circle, rgba(171,0,255,1) 0%, rgba(40,26,117,1) 49%, rgba(2,0,36,1) 90%)' : null
        background: alive ? 'grey' : null
      }}
      className="Block"
      onClick={toggleAlive}
    >
      {props.x} {props.y}
    </div>
  )
}