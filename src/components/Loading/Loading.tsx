import React, { useEffect, useState } from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/react";
import './LoadingStyle.css';

export type ILoadingProps = {
isLoading:boolean;
}

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  box-shadow: rgb(255 255 255 / 20%) 0px 3px 29px 0px;
`;

const Loading: React.FC<ILoadingProps> = ({isLoading }) => {

    const [loading, setLoading] = useState(isLoading);

    useEffect(() => {
        setLoading(isLoading)
    }, [isLoading]);

    //let [color, setColor] = useState("yellow");

    return (
        <div className="sweet-loading">
            {/*   <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
            <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}

            <PacmanLoader color={"yellow"} loading={loading} css={override}  size={100} />
        </div>
    );
}

export { Loading };