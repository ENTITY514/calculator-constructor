import { OPERATORS } from '../operators';
import style from './operator.module.css';

interface IOperatorProps {
    operator: OPERATORS
}

export const Operator: React.FC<IOperatorProps> = ({ operator }) => {
    return (
        <div className={style.container}>
            {operator}
        </div>
    );
}