import { IButtonsProps } from "../../../../Store/models/ButtonProps";

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

export const digits_list: Array<IButtonsProps> = [
    { value: DIGITS.ONE, js_value: "1", description: "one" },
    { value: DIGITS.TWO, js_value: "2", description: "two" },
    { value: DIGITS.THREE, js_value: "3", description: "three" },
    { value: DIGITS.FOUR, js_value: "4", description: "four" },
    { value: DIGITS.FIVE, js_value: "5", description: "five" },
    { value: DIGITS.SIX, js_value: "6", description: "six" },
    { value: DIGITS.SEVEN, js_value: "7", description: "seven" },
    { value: DIGITS.EIGHT, js_value: "8", description: "eight" },
    { value: DIGITS.NINE, js_value: "9", description: "nine" },
    { value: DIGITS.ZERO, js_value: "0", description: "zero" },
    { value: DIGITS.POINT, js_value: ".", description: "point" },
]