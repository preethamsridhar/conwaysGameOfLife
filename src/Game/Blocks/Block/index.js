import React, {useState} from 'react';
import styles from './styles.css';

export default function Index(props) {

  const [dead, setDead] = useState(false);

  function toggleDead() {
    setDead(!dead)
  }

  return (
    <div 
      style ={{
        width: props.blockWidth,
        height: props.blockHeight,
        background: dead ? 'radial-gradient(circle, rgba(171,0,255,1) 0%, rgba(40,26,117,1) 49%, rgba(2,0,36,1) 90%)' : null
      }}
      className="Block"
      onClick={toggleDead}
    >
    </div>
  )
}