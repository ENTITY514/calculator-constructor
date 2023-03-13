import { nanoid } from 'nanoid';
import React from 'react';
import { digits_list } from './digits';
import style from './digits.module.css';

interface IDigitsProps {
    onClick?: (value: string) => void
    is_work: boolean
}

export const Digits: React.FC<IDigitsProps> = ({ onClick = () => { }, is_work }) => {
    return (
        <div className={style.container}>
            {digits_list.map(digit => {
                return (
                    <div
                        title={digit.description}
                        className={is_work ? style.button : style.box}
                        onClick={() => { onClick(digit.js_value) }}
                        key={nanoid()}
                    >
                        {digit.value}
                    </div>
                )
            })}
        </div>
    );
}