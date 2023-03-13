import React from 'react';
import style from './equals.module.css';

interface IEqualsProps {
    onClick?: (value: string) => void
}

export const Equals: React.FC<IEqualsProps> = ({ onClick = () => { } }) => {
    return (
        <div className={style.container} onClick={() => { onClick("=") }}>
            <div className={style.button}>=</div>
        </div>
    );
}