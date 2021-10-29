import React, { useEffect, useState } from 'react';
import './DragUpDownStyle.css';

export type IDragUpDownProps = {
    getX: number;
    getY:number;
    offsetY:number;
}

const DragUpDown: React.FC<IDragUpDownProps> = ({ getX , getY, offsetY}) => {

    const [y, setY] = useState(0);
    const [x, setX] = useState(0);

    useEffect(() => {
        console.log(getX);
        
        setX(getX);
    }, [getX]);

    useEffect(() => {
        setY(getY);
    }, [getY]);

    useEffect(() => {
        if(typeof(offsetY)==="number"&&offsetY>-10){
            setY(y+offsetY);
        }
    }, [offsetY]); 

    const boxStyle = {
        width: `${x}px`,
        height: `${y}px`,
    };

    return (
        <div
            className="UpDownHolder"
            style={boxStyle}
        >
       
        </div>
    );
}

export { DragUpDown };