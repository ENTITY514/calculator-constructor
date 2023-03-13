import { nanoid } from 'nanoid';
import React from 'react';
import { IButtonsProps } from '../../../../Store/models/ButtonProps';
import { operators_list } from './operators';
import style from './operators.module.css';

interface IOperatorsProps {
    onClick?: (value: string) => void
    is_work: boolean
}

export const Operators: React.FC<IOperatorsProps> = ({ onClick = () => { }, is_work }) => {
    return (
        <div className={style.container}>
            {operators_list.map(operator => {
                return (
                    <div
                        title={operator.description}
                        className={is_work ? style.button : style.box}
                        onClick={() => { onClick(operator.js_value) }}
                        key={nanoid()}
                    >
                        {operator.value}
                    </div>
                )
            })}
        </div>
    );
}