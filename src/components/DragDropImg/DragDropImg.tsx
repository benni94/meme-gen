import React from 'react';
import './DragDropStyle.css';

export type IDragDropImgProps = {
    loadImg: (e:any) => void;
}

const DragDropImg: React.FC<IDragDropImgProps> = ({loadImg}) => {


    function handleInputImg(e: any) {
        loadImg(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div className="inputImgHolder">
            <label className="custom-file-upload">
            <input   type="file" onChange={handleInputImg} />
            <i className="inputImg" ></i>
            <i className="inputText">Custom Upload</i> 
            </label>
        </div> 
    );
}

export { DragDropImg };