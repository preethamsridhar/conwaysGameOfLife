import React, {useState, useEffect} from 'react';
import Block from './Block';
import findNeighbors from '../../javascript/findNeighbors'

export default function Index (props) {

  const [blocks, setBlocks] = useState([]);
  const [aliveBlocks, setAliveBlocks] = useState([]);
  const [running, setRunning ] = useState(false); 
  const [deadNeighbors, setDeadNeighbors] = useState([])

  useEffect(() => {
    
    let tempBlocks = [];
    for (let i = 0 ; i < props.vsize; i++ ) {
      let rows = [];
      for (let j = 0; j < props.hsize; j++ ) {
        rows.push(true)
      }
      tempBlocks.push(rows);
    }
    setBlocks(tempBlocks);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    props.vsize,
  ])

  const checkAlive = (x, y) => {
    let index = aliveBlocks.findIndex(aliveBlock => (aliveBlock[0] === x && aliveBlock[1] === y) );
    if ( index === -1 ) return false;
    else return true;
  }

  const countAlive = everyBlocks => {
    let count = 0;
    everyBlocks.forEach(block => {
      if (checkAlive(block[0], block[1])) {
        count += 1;
      }
    })
    return count;
  }

  const toggleAlive = (x, y) => {
    if (checkAlive(x, y)) {
      removeLiveBlock(x, y)
    }
    else {
      addLiveBlock(x, y)
    }
  }

  const addLiveBlock = (x, y) => {
    setAliveBlocks(lb => {
        return lb.concat([[x, y]])
    })
  }

  const removeLiveBlock = (x, y) => {
    setAliveBlocks(lb => {
        return lb.filter( block => (block[0] !== x || block[1] !== y))
    }); 
  }

  const addDeadNeigbor = (x, y) => {
    setDeadNeighbors( dN => {
      return dN.concat([[x, y]]);
    })
  }

  useEffect(() => {
    console.log("Index -> deadNeighbors", deadNeighbors)
  }, [deadNeighbors])

  const detectDeadNeigbors = currentNeighbors => {
    currentNeighbors.forEach(neigbor => {
      if (
        aliveBlocks
          .findIndex(
            aliveBlock => {
              return (
                aliveBlock[0] === neigbor[0] && 
                aliveBlock[1] === neigbor[1]
              ) 
            }
          ) === -1 
        &&
        deadNeighbors
          .findIndex(
            deadNeigbor => {
              return (
                deadNeigbor[0] === neigbor[0] &&
                deadNeigbor[1] === neigbor[1]
              )
            }
          ) === -1
        ) {
        addDeadNeigbor(neigbor[0], neigbor[1]);
      }  
    })
  } 


  const nextLifeCycle = () => {
    aliveBlocks.forEach(aliveBlock => {
      let neighbors = findNeighbors(aliveBlock[0], aliveBlock[1], props.blockWidth, props.blockHeight)
      const numberOfAlive = countAlive(neighbors);
      setDeadNeighbors([]);
      detectDeadNeigbors(neighbors);
      // if (numberOfAlive > 3 || numberOfAlive < 2) {
      //   removeLiveBlock(aliveBlock[0], aliveBlock[1]);
      // }
    })
  }

  const reset = () => {
    setAliveBlocks([]);
  }

  return (
    <div style={{textAlign: 'center'}}>
      <div
        style={{
            textAlign: 'center'
        }}
      >
        <button 
            style={{height: 40, margin: 20, fontSize: 20}}
            onClick={() => setRunning(!running)}
        > 
            {running ? 'Pause' : 'Run'}
        </button>
        <button 
            style={{height: 40, margin: 20, fontSize: 20}}
            onClick={nextLifeCycle}
        > 
            Next Life Cycle
        </button>
        <button 
            style={{height: 40, margin: 20, fontSize: 20}}
            onClick={reset}
        > 
            Reset
        </button>
        
    </div>
      {
        blocks.length > 0 
        ? blocks.map((blockRow, i) => {
          return (
            <div key={i}>
              {
                blockRow.map((block, j) => {
                  return <Block
                    key={String(i) + "_" + String(j)}
                    x={i}
                    y={j}
                    blockWidth={props.blockWidth}
                    blockHeight={props.blockHeight}
                    aliveBlocks={aliveBlocks}
                    onclick={() => toggleAlive(i, j)}
                  ></Block> 
                })
              }
            </div>
          )
        })
        : null
      }
    </div>
  )
}