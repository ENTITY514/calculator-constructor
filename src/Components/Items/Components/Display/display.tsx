import React from 'react';
import { useAppDispatch } from '../../../../Store/hooks/redux';
import { BLOCKS } from '../../../../Store/models/CalculatorItems';
import { calculatorConstructorSlice } from '../../../../Store/reducers/CalculatorConstructorSlice';
import style from './display.module.css';

export const Display: React.FC = () => {
    const element = React.useRef<HTMLDivElement>(null)

    const DragStart = (e: DragEvent) => {
        if (element.current !== null) {
            e.dataTransfer?.setData("block_name", BLOCKS.DISPLAY)
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
        <div className={style.container} draggable={true} ref={element}>
            0
        </div>
    );
}