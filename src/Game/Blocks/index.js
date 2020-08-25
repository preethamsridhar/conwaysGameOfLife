import React, {useState, useEffect} from 'react';
import Block from './Block';

export default function Index (props) {

  const [blocks, setBlocks] = useState([]);
  console.log("Index -> blocks", blocks)

  useEffect(() => {
    
    let tempBlocks = [];
    for (let i = 0 ; i < props.vsize; i++ ) {
      let rows = [];
      for (let j = 0; j < props.hsize; j++ ) {
        rows.push(0)
      }
      tempBlocks.push(rows);
    }
  setBlocks(tempBlocks);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    props.vsize, 
    props.hsize, 
    props.blockHeight, 
    props.blockWidth
  ])

  return (
    <div style={{textAlign: 'center'}}>
      {
        blocks.length > 0 
        ? 
        blocks.map((blockRow, i) => {
          return (
            <div>
              {
                blockRow.map((block, j) => <Block
                    key={String(i) + String(j)}
                    blockWidth={props.blockWidth}
                    blockHeight={props.blockHeight}
                    {...props}
                  ></Block> 
                )
              }
            </div>
          )
        })
        : null
      }
    </div>
  )
}