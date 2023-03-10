
import React from 'react';
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

    const DragStart = (e: DragEvent) => {
        if (element.current !== null) {
            e.dataTransfer?.setData("block_name", BLOCKS.OPERATORS)
        }
    }

    const DragOver = (e: DragEvent) => {
        e.preventDefault()
    }


    React.useEffect(() => {
        element.current?.addEventListener("dragstart", DragStart)
        element.current?.addEventListener("dragover", DragOver)

        return () => {
            element.current?.removeEventListener("dragstart", DragStart)
            element.current?.removeEventListener("dragover", DragOver)
        }

    }, [])
    return (
        <div className={style.container} ref={element} draggable={true}>
            <Operator operator={OPERATORS.PLUS} />
            <Operator operator={OPERATORS.MINUS} />
            <Operator operator={OPERATORS.DIVIDE} />
            <Operator operator={OPERATORS.MULTIPLY} />
        </div>
    );
}