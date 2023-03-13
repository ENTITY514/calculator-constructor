import { IButtonsProps } from "../../../../Store/models/ButtonProps";

export enum OPERATORS {
    PLUS = "+",
    MINUS = "-",
    DIVIDE = "/",
    MULTIPLY = "x",
}

export const operators_list: Array<IButtonsProps> = [
    { value: OPERATORS.PLUS, js_value: "+", description: "plus" },
    { value: OPERATORS.MINUS, js_value: "-", description: "minus" },
    { value: OPERATORS.DIVIDE, js_value: "/", description: "divide" },
    { value: OPERATORS.MULTIPLY, js_value: "*", description: "multiply" },
]