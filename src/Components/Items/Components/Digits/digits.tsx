import { Digit } from './Digit/digit';
import style from './digits.module.css';

export enum DIGITS {
    ONE = "1",
    TWO = "2",
    THREE = "3",
    FOUR = "4",
    FIVE = "5",
    SIX = "6",
    SEVEN = "7",
    EIGHT = "8",
    NINE = "9",
    ZERO = "0",
    POINT = ",",
}

export const Digits: React.FC = () => {
    return (
        <div className={style.container}>
            <div className={style.digits}>
                <Digit digit={DIGITS.ONE} />
                <Digit digit={DIGITS.TWO} />
                <Digit digit={DIGITS.THREE} />
                <Digit digit={DIGITS.FOUR} />
                <Digit digit={DIGITS.FIVE} />
                <Digit digit={DIGITS.SIX} />
                <Digit digit={DIGITS.SEVEN} />
                <Digit digit={DIGITS.EIGHT} />
                <Digit digit={DIGITS.NINE} />
            </div>
            <div className={style.others}>
                <Digit digit={DIGITS.ZERO} />
                <Digit digit={DIGITS.POINT} />
            </div>
        </div>
    );
}