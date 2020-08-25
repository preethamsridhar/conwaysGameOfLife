import React, { useState, useEffect } from 'react';
import Blocks from './Blocks';

export default function Index (props) {

    const [blockHeight, setBlockHeight] = useState(40);
    const [blockWidth, setBlockWidth] = useState(40);
    
    useEffect(() => {
        if (props.size !== undefined && props.size !== null){
            setBlockHeight(Number.parseInt((window.outerWidth - 400)/Number(props.size) / 2))
            setBlockWidth(Number.parseInt((window.outerWidth - 400)/Number(props.size) / 2))
        }
    }, [props.size])
    
    return (
        <div>
            <button 
                style={{textAlign: 'center'}}
            > 
                Run
            </button>
            <Blocks 
                vsize={props.vsize}
                hsize={props.hsize}
                blockHeight={blockHeight}
                blockWidth={blockWidth}
            />
        </div>
    )
}