import React from 'react';
import { useDrag } from '../../../../Hooks/useDragBlock';
import { BLOCKS } from '../../../../Store/models/CalculatorItems';
import style from './equals.module.css';

export const Equals: React.FC = () => {
    const element = React.useRef<HTMLDivElement>(null)
    useDrag(element, BLOCKS.EQUAL)
    return (
        <div className={style.container} ref={element} draggable={true}>
            <div className={style.button}>=</div>
        </div>
    );
}