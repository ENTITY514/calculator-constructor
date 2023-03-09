import { DIGITS } from '../digits';
import style from './digit.module.css';

interface IDigitProps {
    digit: DIGITS
}

export const Digit: React.FC<IDigitProps> = ({ digit }) => {
    return (
        <div className={style.container}>
            {digit}
        </div>
    );
}