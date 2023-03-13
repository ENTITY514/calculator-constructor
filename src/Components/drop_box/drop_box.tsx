import React from 'react';
import { useAppDispatch, useAppSelector } from '../../Store/hooks/redux';
import { BLOCKS } from '../../Store/models/CalculatorItems';
import { calculatorConstructorSlice } from '../../Store/reducers/CalculatorConstructorSlice';
import { Digits } from '../Items/Components/Digits/digits';
import { Display } from '../Items/Components/Display/display';
import { Equals } from '../Items/Components/Equal/equals';
import { Operators } from '../Items/Components/Operators/operators';
import { Blocks } from './Components/Blocks/blocks';
import { EmptyDropBox } from './Components/EmptyDropBox/empty_drop_box';
import style from './drop_box.module.css';

export const DropBox: React.FC = () => {
  const actions = calculatorConstructorSlice.actions
  const blocks = useAppSelector(state => state.calculatorConstructorSlice.blocks)
  const dispatch = useAppDispatch()
  const element = React.useRef<HTMLDivElement>(null)

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
      console.log(blocks);
      dispatch(actions.addBlock(e.dataTransfer?.getData("block_name") as BLOCKS))
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
  return (
    <div className={style.container} ref={element}>
      {
        blocks.length < 1 ?
          <EmptyDropBox /> :
          <Blocks blocks={blocks} />
      }
    </div>
  );
}
