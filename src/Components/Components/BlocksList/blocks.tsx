import { nanoid } from 'nanoid';
import { useAppSelector } from '../../../Store/hooks/redux';
import { IBlockInfo } from '../../../Store/models/BlockInfo';
import { BLOCKS } from '../../../Store/models/CalculatorItems';
import { Digits } from '../blocks/Digits/digits_list';
import { Display } from '../blocks/Display/display';
import { Equals } from '../blocks/Equal/equals';
import { Operators } from '../blocks/Operators/operators_list';
import style from './blocks.module.css';

interface IBlocksListProps {
    is_constructor: boolean
    blocks: Array<IBlockInfo>
    display_value?: string | number
    onDragStart?: (e: React.DragEvent<HTMLElement>, name: BLOCKS) => void
    onDragEnd?: (e: React.DragEvent<HTMLElement>, name: BLOCKS) => void
    onDragOver?: (e: React.DragEvent<HTMLElement>, name: BLOCKS) => void
    onDragEnter?: (e: React.DragEvent<HTMLElement>, name: BLOCKS) => void
    onDragLeave?: (e: React.DragEvent<HTMLElement>, name: BLOCKS) => void
    onDrop?: (e: React.DragEvent<HTMLElement>, name: BLOCKS) => void
    onBlockItemClick?: (block_item_value: string) => void
    draggable?: boolean
}

export const BlocksList: React.FC<IBlocksListProps> = (
    {
        is_constructor,
        blocks,
        display_value,
        onDragStart,
        onDragEnd,
        onDragOver,
        onDragEnter,
        onDragLeave,
        onDrop,
        onBlockItemClick,
        draggable = true
    }
) => {
    const getItem = (block: IBlockInfo) => {
        switch (block.name) {
            case BLOCKS.DISPLAY:
                return <Display value={display_value} />

            case BLOCKS.DIGITS:
                return <Digits onClick={onBlockItemClick} is_work={!is_constructor} />

            case BLOCKS.EQUAL:
                return <Equals onClick={onBlockItemClick}/>

            case BLOCKS.OPERATORS:
                return <Operators onClick={onBlockItemClick} is_work={!is_constructor} />

            default:
                break;
        }
    }

    return (
        <div className={style.container}>
            {
                blocks.map((block) => {
                    return <div
                        className={style.block}
                        key={nanoid()}
                        style={{
                            opacity: block.is_draggable ? "1" : "0.5",
                            boxShadow: is_constructor ? "0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)" : "none",
                        }}
                        draggable={block.is_draggable && draggable}
                        onDragStart={onDragStart ? (e) => { onDragStart(e, block.name) } : undefined}
                        onDragEnd={onDragEnd ? (e) => { onDragEnd(e, block.name) } : undefined}
                        onDragOver={onDragOver ? (e) => { onDragOver(e, block.name) } : undefined}
                        onDragEnter={onDragEnter ? (e) => { onDragEnter(e, block.name) } : undefined}
                        onDrop={onDrop ? (e) => { onDrop(e, block.name) } : undefined}
                        onDragLeave={onDragLeave ? (e) => { onDragLeave(e, block.name) } : undefined}
                    >
                        {
                            getItem(block)
                        }
                    </div>
                })
            }
        </div>
    );
}
