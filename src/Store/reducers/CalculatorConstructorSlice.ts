import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BLOCKS } from "../models/CalculatorItems";
import { ICalculatorConstructor } from "../models/ICalculatorConstructor";

let initialState: ICalculatorConstructor = {
    is_constructor: true,
    constructor_blocks: [
        { name: BLOCKS.DISPLAY, is_draggable: true },
        { name: BLOCKS.OPERATORS, is_draggable: true },
        { name: BLOCKS.DIGITS, is_draggable: true },
        { name: BLOCKS.EQUAL, is_draggable: true },
    ],
    value: "",
    last_value: "",
    calculator_blocks: [],
    is_solve: false
}

export const calculatorConstructorSlice = createSlice({
    name: 'calculator-constructor__',
    initialState,
    reducers: {
        setIsConstructor: (state, action: PayloadAction<boolean>) => {
            state.is_constructor = action.payload
        },
        addBlockToConstructor: (state, action: PayloadAction<BLOCKS>) => {
            if (!state.calculator_blocks.find(block => block.name === action.payload)) {
                state.calculator_blocks.push({ name: action.payload, is_draggable: true })
                state.constructor_blocks = state.constructor_blocks.map(block => {
                    return block.name === action.payload ? { name: action.payload, is_draggable: false } : block
                })
            }
        },
        changeValue: (state, action: PayloadAction<string>) => {
            if (state.value === "Не определено" || state.is_solve) {
                state.value = ""
                state.last_value = ""
                state.is_solve = false
            }
            if (action.payload === "=") {
                if (Number.isNaN(parseInt(state.value[state.value.length - 1]))) {
                    state.value.slice(state.value.length - 1, 1)
                }
                state.value = String(eval(state.value))

                if (state.value === "Infinity") {
                    state.value = "Не определено"
                }
                state.last_value = state.value
                state.is_solve = true
            }
            else if (Number.isNaN(parseInt(action.payload))) {
                if (Number.isNaN(parseInt(state.value[state.value.length - 1]))) {
                    state.value.slice(state.value.length - 1, 1)
                }
                state.value += action.payload
                state.last_value = ""
            }
            else {
                state.value += action.payload
                state.last_value += action.payload
            }
        },
    }
})

export default calculatorConstructorSlice.reducer;