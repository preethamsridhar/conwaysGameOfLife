import React, {useState, useEffect} from 'react';
import Block from './Block';

export default function Index (props) {

  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    let tempBlocks = []
    for (let i = 0 ; i < props.vsize; i++ ) {
      for (let j = 0; j < props.hsize; j++ ) {
        tempBlocks.push(
          <Block 
            key={`${i}+${j}`} 
            x={i} y={j} 
            {...props}
          />);
      }
      tempBlocks.push(<br />);
    }
  setBlocks(tempBlocks);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    props.size, 
    props.blockHeight, 
    props.blockWidth
  ])

  return (
    <div style={{textAlign: 'center'}}>
      {
        blocks.length > 0 
        ? blocks.map( block => block)
        : null  
      }
    </div>
  )
}