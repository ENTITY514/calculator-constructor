import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBlockInfo } from "../models/BlockInfo";
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
    calculator_blocks: [],
    value: "",
    last_value: "",
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
        deleteBlock: (state, action: PayloadAction<{ block_name: string, index: number }>) => {
            state.calculator_blocks = state.calculator_blocks.filter(block => block.name !== action.payload.block_name)
            state.constructor_blocks.forEach(block => {
                if (block.name === action.payload.block_name) {
                    block.is_draggable = true
                }
            });
        },
        changeValue: (state, action: PayloadAction<string>) => {
            if (state.value === "Не определено" || state.is_solve) {
                state.value = ""
                state.last_value = ""
                state.is_solve = false
            }
            if (action.payload === "=") {
                if (Number.isNaN(parseInt(state.value[state.value.length - 1]))) {
                    state.value = state.value.slice(0, - 1)
                }
                if (Number.isNaN(parseInt(state.value[0]))) {
                    state.value = state.value.slice(1, state.value.length )
                }
                console.log(state.value);


                state.value = String((Math.ceil(eval(state.value) * 10e7) / 10e7))

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
        swapBlock: (state, action: PayloadAction<{ first: string, second: string }>) => {
            let one: number = 0
            let two: number = 0
            state.calculator_blocks.forEach((block, index) => {
                if (block.name === action.payload.first) one = index
                if (block.name === action.payload.second) two = index
            });
            [state.calculator_blocks[one], state.calculator_blocks[two]] = [state.calculator_blocks[two], state.calculator_blocks[one]]
        }
    }
})

export default calculatorConstructorSlice.reducer;