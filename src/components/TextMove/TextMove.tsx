import React, { useEffect, useRef, useState } from 'react';
import './TextMoveStyle.css';
import { useScrollBlock } from './../../services/BlockScroll/UseScrollBlock';


interface IPos {
    x: number;
    y: number;
}

export type ITextMoveProps = {
    inputText: string;
    startPosition: IPos;
    getFontSize: string;
}


const TextMove: React.FC<ITextMoveProps> = ({ inputText, startPosition, getFontSize }) => {

    const [pressed, setPressed] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const ref = useRef() as any;
    const [text, setText] = useState("Write...");
    const [fontSize, setFontSize] = useState("2");
    const [blockScroll, allowScroll] = useScrollBlock();
    const [parentX, setParentX] = useState(0);

    useEffect(() => {
        setParentX(startPosition.x);

        if (parentX < 400 && parentX !== 0) {
            setFontSize((Number(getFontSize) / 1.5).toString());
        }
        else {
            setFontSize(getFontSize);
        }

        let minus = 0;
        let offset = 0;
        if (startPosition.y > 0) {
            offset = 50;
            minus = ref.current.clientHeight;
        }
        //set the position of the child in the center of the parent         
        setPosition({
            x: (startPosition.x - ref.current.clientWidth) / 2,
            y: (startPosition.y + offset) - minus
        });
    }, [startPosition]);

    // Monitor changes to position state and update DOM
    useEffect(() => {
        if (ref.current) {
            ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`
        }
    }, [position]);

    useEffect(() => {
        setText(inputText);
    }, [inputText]);

    let previousTouch;
    const onMouseMove = (event) => {
        if (pressed) {

            switch (event.movementX !== undefined) {
                case true:

                    setPosition({
                        x: position.x + event.movementX,
                        y: position.y + event.movementY
                    })
                    break;
                case false:
                    var touch = event.touches[0];

                    if (previousTouch) {
                        event.movementX = touch.pageX - previousTouch.pageX;
                        event.movementY = touch.pageY - previousTouch.pageY;

                        setPosition({
                            x: position.x + event.movementX,
                            y: position.y + event.movementY
                        })
                    }

                    previousTouch = touch;
                    break;
            }
        }
    }

    return (
        <div
            className="inputTextHolder"
            ref={ref}
            onTouchStart={() => { setPressed(true); blockScroll(); }}
            onTouchEnd={() => { setPressed(false); allowScroll(); }}
            onTouchMove={onMouseMove}

            onMouseMove={onMouseMove}
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => setPressed(false)}
            onMouseLeave={() => setPressed(false)}
        >
            <h2 className="inputText" style={{ fontSize: fontSize + "em" }}>{text}</h2>

        </div>
    );
}

export { TextMove };