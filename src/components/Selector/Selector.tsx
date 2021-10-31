import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useEffect } from 'react';
import './SelectorStyle.css';

export type IContent = {
    value: number;
    content: string;
}

export type ISelectorProps = {
    getLabel: string;
    getContent: IContent[];
    setSelect: (e: IContent) => void;
}

const Selector: React.FC<ISelectorProps> = ({ getLabel, getContent, setSelect }) => {
    const [label, setLabel] = React.useState('');
    const [content, setContent] = React.useState([{}] as IContent[]);

    const handleChange = (e: any) => {
        setLabel(e.target.value);
        setSelect(e);
    };

    useEffect(() => {
        setContent(getContent);
        if (content[0].value !== undefined && label.length === 0) {
            setLabel(content[1].value.toString());
            const tt = { target: content[1] }
            handleChange(tt)
        }
    }, [getContent]);

    const styles = { fontFamily: "VT323, monospace" }

    return (
        <div className="SelectHolder">

            <FormControl fullWidth variant="outlined">
                <InputLabel style={styles} >{getLabel}</InputLabel>
                <Select
                    style={styles}
                    labelId="selector"
                    id="selector"
                    value={label}
                    label={getLabel}
                    onChange={handleChange}
                >
                    {content.map((men, i) =>
                        <MenuItem style={styles} key={i} value={men.value}>{men.content}</MenuItem>
                    )}

                </Select>
            </FormControl>
        </div>
    );
}

export { Selector };


