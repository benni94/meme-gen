import React from 'react';
import { IContent, Selector } from './Selector';

export type ISelectorWrapperProps = {
    setSelect:(e:IContent)=>void;
}


const SelectorWrapper: React.FC<ISelectorWrapperProps> = ({setSelect}) => {
    const cont: IContent[] = [

        { value: 1, content: "small" },
        { value: 2, content: "medium" },
        { value: 3, content: "large" }
    ];


    
    return (
        <div>
            <Selector setSelect={setSelect} getLabel={"Font Size"} getContent={cont} />
        </div>
    );
}

export { SelectorWrapper };