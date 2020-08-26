import React from 'react';
import './styles.css';

export default function Index(props) {

  return (
    <div 
      style ={{
        width: props.blockWidth,
        height: props.blockHeight,
        background: (props.aliveBlocks.findIndex(aliveBlock => aliveBlock[0] === props.x && aliveBlock[1] === props.y) !== -1) ? 'grey' : null
      }}
      className="Block"
      onClick={props.onclick}
    >
    </div>
  )
}