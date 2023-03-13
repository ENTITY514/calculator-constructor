import React from 'react';
import style from './calculator_wrapper.module.css';
import { DropBox } from './Components/drop_box/drop_box';
import { Tumbler } from './Components/tumbler/tumbler';

export const CalculatorWrapper: React.FC = () => {
    return (
        <div className={style.container}>
            <Tumbler />
            <DropBox />
        </div>
    );
}