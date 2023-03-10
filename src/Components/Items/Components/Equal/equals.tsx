import React from 'react';
import { BLOCKS } from '../../../../Store/models/CalculatorItems';
import style from './equals.module.css';

export const Equals: React.FC = () => {
    const element = React.useRef<HTMLDivElement>(null)
    const DragStart = (e: DragEvent) => {
        if (element.current !== null) {
            e.dataTransfer?.setData("block_name", BLOCKS.EQUAL)
        }
    }

    const DragOver = (e: DragEvent) => {
        e.preventDefault()
    }


    React.useEffect(() => {
        element.current?.addEventListener("dragstart", DragStart)
        element.current?.addEventListener("dragover", DragOver)
    }, [])
    return (
        <div className={style.container} ref={element} draggable={true}>
            <div className={style.button}>=</div>
        </div>
    );
}