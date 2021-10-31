import React, { useEffect, useState } from 'react';
import './DragUpDownStyle.css';

export type IDragUpDownProps = {
    getX: number;
    getY: number;
    offsetY: number;
    getColor: string;
}

const DragUpDown: React.FC<IDragUpDownProps> = ({ getX, getY, offsetY, getColor }) => {

    const [y, setY] = useState(0);
    const [x, setX] = useState(0);
    const [color, setColor] = useState("#000000");

    useEffect(() => {
        setX(getX);
    }, [getX]);

    useEffect(() => {
        setY(getY);
    }, [getY]);

    useEffect(() => {
        if (typeof (offsetY) === "number" && (y >= -30 || offsetY >= 0)) {
            setY(y + offsetY);

            //remove the line at the end 
            if (offsetY + y < 0) {
                setY(0)
            }

        }
    }, [offsetY]);

    useEffect(() => {
        setColor(getColor);
    }, [getColor]);

    const boxStyle = {
        width: `${x}px`,
        height: `${y}px`,
        backgroundColor: color
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