import React, { useState } from 'react';
import { useScrollBlock } from '../../services/BlockScroll/UseScrollBlock';
import './DragUpDownStyle.css';

export type IArrowsUpDownProps = {
    arrowDrive:(e:number)=>void;
}

const ArrowsUpDown: React.FC<IArrowsUpDownProps> = ({arrowDrive}) => {
    const [blockScroll, allowScroll] = useScrollBlock();
    const [pressed, setPressed] = useState(false);

    let previousTouch;
    const onMouseMove = (event) => {
        if (pressed) {

            switch (event.movementX !== undefined) {
                case true:

                    arrowDrive(event.movementY/1.5);
                    
                    break;
                case false:
                    var touch = event.touches[0];

                    if (previousTouch) {
                        event.movementY = touch.pageY - previousTouch.pageY;
                        arrowDrive(event.movementY);
                    }

                    previousTouch = touch;
                    break;
            }
        }
    }
    return (
        <div
            onTouchStart={() => { setPressed(true); blockScroll(); }}
            onTouchEnd={() => { setPressed(false); allowScroll(); }}
            onTouchMove={onMouseMove}

            onMouseMove={onMouseMove}
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => setPressed(false)}
            onMouseLeave={() => setPressed(false)}
            className="UpDownArrowHolder"
        >
            <button className="UpDownArrow" >
                ⬆⬇
            </button>
        </div>
    );
}

export { ArrowsUpDown };