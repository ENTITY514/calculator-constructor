import React from 'react';
import { useAppSelector, useAppDispatch } from '../../Store/hooks/redux';
import { BLOCKS } from '../../Store/models/CalculatorItems';
import { calculatorConstructorSlice } from '../../Store/reducers/CalculatorConstructorSlice';
import { BlocksList } from '../Components/BlocksList/blocks';
import { EmptyDropBox } from './Components/EmptyDropBox/empty_drop_box';
import style from './drop_box.module.css';

export const DropBox: React.FC = () => {
  const element = React.useRef<HTMLDivElement>(null)
  const state = useAppSelector(state => state.calculatorConstructorSlice)
  const dispatch = useAppDispatch()
  const actions = calculatorConstructorSlice.actions

  const DragLeave = (e: DragEvent) => {
    if (element.current !== null) {
      element.current.style.background = "#FFFFFF"
    }
  }

  const DragOver = (e: DragEvent) => {
    e.preventDefault()
    if (element.current !== null) {
    }

  }

  const DragEnter = (e: DragEvent) => {
    if (element.current !== null) {
      element.current.style.background = "#F0F9FF"
    }
  }

  const Drop = (e: DragEvent) => {
    e.preventDefault()
    if (element.current !== null) {
      dispatch(actions.addBlockToConstructor(e.dataTransfer?.getData("block_name") as BLOCKS))
      element.current.style.background = "#FFFFFF"
    }

  }



  React.useEffect(() => {
    if (element.current) {
      element.current.addEventListener("dragleave", DragLeave)
      element.current.addEventListener("dragover", DragOver)
      element.current.addEventListener("dragenter", DragEnter)
      element.current.addEventListener("drop", Drop)
    }
  }, [])

  const onDragOver = (e: React.DragEvent<HTMLElement>, name: BLOCKS) => {
    e.currentTarget.style.borderBottom = "2px solid blue"
  }

  const onDragLeave = (e: React.DragEvent<HTMLElement>, name: BLOCKS) => {
    e.currentTarget.style.borderBottom = "none"
  }

  return (
    <div className={style.container} ref={element}>
      {
        state.calculator_blocks.length < 1 ?
          <EmptyDropBox /> :
          <BlocksList
            blocks={state.calculator_blocks}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            display_value={state.is_constructor ? undefined : state.last_value}
            is_constructor={state.is_constructor}
            onBlockItemClick={state.is_constructor ? () => { } : (value) => {
              dispatch(actions.changeValue(value))
            }}
            onDoubleBlockItemClick={(block_name, index) => { dispatch(actions.deleteBlock({ block_name, index })) }}
            draggable={state.is_constructor}
          />
      }
    </div>
  );
}
