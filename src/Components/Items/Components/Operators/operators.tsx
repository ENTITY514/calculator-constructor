
import { Operator } from './operator/operator';
import style from './operators.module.css';

export enum OPERATORS {
    PLUS = "+",
    MINUS = "-",
    DIVIDE = "/",
    MULTIPLY = "x",
}

export const Operators: React.FC = () => {
    return (
        <div className={style.container}>
            <Operator operator={OPERATORS.PLUS} />
            <Operator operator={OPERATORS.MINUS} />
            <Operator operator={OPERATORS.DIVIDE} />
            <Operator operator={OPERATORS.MULTIPLY} />
        </div>
    );
}