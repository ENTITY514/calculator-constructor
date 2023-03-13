import React from 'react';
import style from './display.module.css';

interface IDisplayInput {
    value?: string | number
}

export const Display: React.FC<IDisplayInput> = ({ value = 0 }) => {
    return (
        <div className={style.container}>
            {value}
        </div>
    );
}