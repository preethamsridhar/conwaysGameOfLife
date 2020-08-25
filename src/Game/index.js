import React, { useState, useEffect } from 'react';
import Blocks from './Blocks';

export default function Index (props) {

    const [blockHeight, setBlockHeight] = useState(40);
    const [blockWidth, setBlockWidth] = useState(40);
    const [liveBlocks, setLiveBlocks] = useState([])
    const [running, setRunning ] = useState(false); 
    
    useEffect(() => {
        if (props.size !== undefined && props.size !== null){
            setBlockHeight(Number.parseInt((window.outerWidth - 400)/Number(props.size) / 2))
            setBlockWidth(Number.parseInt((window.outerWidth - 400)/Number(props.size) / 2))
        }
    }, [props.hsize, props.vsize])

    const addLiveBlock = (x, y) => {
        console.log("addLiveBlock -> liveBlocks", liveBlocks) 
        setLiveBlocks(lb => {
            return lb.concat([[x, y]])
        })
    }

    const removeLiveBlock = (x, y) => {
        console.log("addLiveBlock -> liveBlocks", liveBlocks) 
        setLiveBlocks(lb => {
            return lb.filter( block => (block[0] !== x || block[1] !== y))
        }); 
    }

    useEffect(() => {
        console.log("Index -> liveBlocks", liveBlocks)
    }, [liveBlocks])
    
    return (
        <div>
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
                > 
                    Next Life Cycle
                </button>
                <button 
                    style={{height: 40, margin: 20, fontSize: 20}}
                > 
                    Reset
                </button>
                
            </div>
            <Blocks 
                vsize={props.vsize}
                hsize={props.hsize}
                blockHeight={blockHeight}
                blockWidth={blockWidth}
                addLiveBlock={addLiveBlock}
                removeLiveBlock={removeLiveBlock}
                liveBlocks={liveBlocks}
            />
        </div>
    )
}