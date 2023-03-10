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
                    console.log(block);

                    switch (block) {
                        case BLOCKS.DISPLAY:
                            return <Display />

                        case BLOCKS.DIGITS:
                            return <Digits />

                        case BLOCKS.EQUAL:
                            return <Equals />

                        case BLOCKS.OPERATORS:
                            return <Operators />

                        default:
                            break;
                    }
                })
            }
        </div>
    );
}
