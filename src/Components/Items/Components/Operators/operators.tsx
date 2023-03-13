
import React from 'react';
import { useDrag } from '../../../../Hooks/useDragBlock';
import { BLOCKS } from '../../../../Store/models/CalculatorItems';
import { Operator } from './operator/operator';
import style from './operators.module.css';

export enum OPERATORS {
    PLUS = "+",
    MINUS = "-",
    DIVIDE = "/",
    MULTIPLY = "x",
}

export const Operators: React.FC = () => {
    const element = React.useRef<HTMLDivElement>(null)
    useDrag(element, BLOCKS.OPERATORS)
    return (
        <div className={style.container} ref={element} draggable={true}>
            <Operator operator={OPERATORS.PLUS} />
            <Operator operator={OPERATORS.MINUS} />
            <Operator operator={OPERATORS.DIVIDE} />
            <Operator operator={OPERATORS.MULTIPLY} />
        </div>
    );
}