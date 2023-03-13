import { nanoid } from 'nanoid';
import { BLOCKS } from '../../../../Store/models/CalculatorItems';
import { Digits } from '../../../Items/Components/Digits/digits';
import { Display } from '../../../Items/Components/Display/display';
import { Equals } from '../../../Items/Components/Equal/equals';
import { Operators } from '../../../Items/Components/Operators/operators';
import style from './blocks.module.css';

interface IBlocksProps {
    blocks: Array<BLOCKS>
}

export const Blocks: React.FC<IBlocksProps> = ({ blocks }) => {
    return (
        <div className={style.container}>
            {
                blocks.map((block) => {
                    switch (block) {
                        case BLOCKS.DISPLAY:
                            return <Display key={nanoid()}/>

                        case BLOCKS.DIGITS:
                            return <Digits key={nanoid()}/>

                        case BLOCKS.EQUAL:
                            return <Equals key={nanoid()}/>

                        case BLOCKS.OPERATORS:
                            return <Operators key={nanoid()}/>

                        default:
                            break;
                    }
                })
            }
        </div>
    );
}
