import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BLOCKS } from "../models/CalculatorItems";
import { ICalculatorConstructor } from "../models/ICalculatorConstructor";

let initialState: ICalculatorConstructor = {
    is_constructor: true,
    active_block_name: null
}

export const calculatorConstructorSlice = createSlice({
    name: 'calculator-constructor__',
    initialState,
    reducers: {
        setIsConstructor: (state, action: PayloadAction<boolean>) => {
            state.is_constructor = action.payload
            
        },
        setActiveBlock: (state, action: PayloadAction<BLOCKS>) => {
            state.active_block_name = action.payload
        },
    }
})

export default calculatorConstructorSlice.reducer;