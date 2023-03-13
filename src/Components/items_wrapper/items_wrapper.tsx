import React from 'react';
import { useAppSelector } from '../../Store/hooks/redux';
import { BlocksList } from '../Components/BlocksList/blocks';
import style from './items_wrapper.module.css';

export const ItemsWrapper: React.FC = () => {
    const state = useAppSelector(state => state.calculatorConstructorSlice)

    const DragStart = (e: React.DragEvent, name: string) => {
        e.dataTransfer.setData("block_name", name)
    }

    const DragOver = (e: React.DragEvent) => {
        e.preventDefault()
    }

    return (
        <div className={style.container}>
            {state.is_constructor ?
                <BlocksList
                    is_constructor={state.is_constructor}
                    onDragStart={DragStart}
                    onDragOver={DragOver}
                    blocks={state.constructor_blocks} /> : null}
        </div>
    );
}