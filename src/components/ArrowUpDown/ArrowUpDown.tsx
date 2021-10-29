import React, { useState } from 'react';
import './ArrowUpDownStyle.css';

export type IArrowUpDownProps = {
    getIncrement: (e: number) => void;
    invert: boolean;
}

type differ = "plus" | "minus";

const ArrowUpDown: React.FC<IArrowUpDownProps> = ({ getIncrement, invert }) => {

    const [increment, setIncrement] = useState(30);

    const steps = 10; //count up the steps
    const maxIncrement = 500;
    const minIncrement = -10;

    function clicked(event: differ) {
        switch (event) {
            case "plus":
                if (increment < maxIncrement) {
                    setIncrement(increment + steps);
                    getIncrement(increment);
                }
                break;

            case "minus":
                if (increment > minIncrement) {
                    setIncrement(increment - steps);
                    getIncrement(increment);

                }
                break;
        }
    }


    return (
        <div className="arrow-up-down-holder">
            <button onClick={() => clicked(invert ? "plus" : "minus")} className="arrowUpDown">⬇</button>
            <button onClick={() => clicked(invert ? "minus" : "plus")} className="arrowUpDown">⬆</button>
        </div>
    );
}

export { ArrowUpDown };