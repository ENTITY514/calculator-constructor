import React from 'react';
import { useDrag } from '../../../../Hooks/useDragBlock';
import { BLOCKS } from '../../../../Store/models/CalculatorItems';
import style from './display.module.css';

export const Display: React.FC = () => {
    const element = React.useRef<HTMLDivElement>(null)
    useDrag(element, BLOCKS.DISPLAY)

    return (
        <div className={style.container} draggable={true} ref={element}>
            0
        </div>
    );
}