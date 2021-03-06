import React, { useEffect, useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import './SearchStyle.css'

export type ISearchbarProps = {
    getData: any;
    setData: (string) => void;
}

const Searchbar: React.FC<ISearchbarProps> = ({ getData, setData }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getData);
    }, [getData]);


    /*     const handleOnSearch = (string, results) => {
            // onSearch will have as the first callback parameter
            // the string searched and for the second the results.
        } */

    /* const handleOnHover = (result) => {
        // the item hovered
    } */

    const handleOnSelect = (item) => {
        // the item selected
        setData(item);
    }

    /* const handleOnFocus = () => {
        // ('Focused')
    } */

    const formatResult = (item) => {
        return item;
        // return (<p dangerouslySetInnerHTML={{__html: '<strong>'+item+'</strong>'}}></p>); //To format result as html
    }


    return (
        <div>
            {/* 
             onSearch={handleOnSearch}
             onHover={handleOnHover}
               onFocus={handleOnFocus}
            */}
            <ReactSearchAutocomplete
                placeholder="Search"
                items={items}

                onSelect={handleOnSelect}

                autoFocus
                formatResult={formatResult}
                styling={
                    {
                        "lineColor": "#48EDDD",
                        "iconColor": "#48EDDD",
                        "borderRadius": "4px",
                        "boxShadow": "none",
                        "zIndex": "4",
                        "fontSize": "x-large",
                        "fontFamily": "VT323, monospace"
                    }
                }
            />
        </div>
    );
}

export { Searchbar };