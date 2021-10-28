import React, { useState } from 'react';

export type IArrowNavProps = {

}

type IDir = "Up" | "Down" | "Left" | "Right";

const ArrowNav: React.FC<IArrowNavProps> = () => {
    const [xoffset, setXoffset] = useState(0);
    const [yoffset, setYoffset] = useState(-90);
    const [delta] = useState(10);

    function move(dir: IDir) {
       

        switch (dir) {
            case "Up":
                if (yoffset > -20) {
                    setYoffset(yoffset - delta);
                }
                break;
            case "Down":
                setYoffset(yoffset + delta);
                break;
            case "Left":
                setXoffset(xoffset - delta);
                break;
            case "Right":
                setXoffset(xoffset + delta);
                break;
        }
    }

  

    return (
            <div style= {{ margin: "0 auto", zIndex: 3} } >
                <button onClick={() => move("Up")} style={{ marginLeft: "15px" }}>
                    ⬆️
                </button>
                <br />
                <button onClick={() => move("Left")}>
                    ⬅️
                </button>
                <button onClick={() => move("Right")}>
                    ➡️
                </button>
                <br />
                <button onClick={() => move("Down")} style={{ marginLeft: "15px" }}>
                    ⬇️
                </button>
                <br />
            </div>
    );
}

export { ArrowNav };