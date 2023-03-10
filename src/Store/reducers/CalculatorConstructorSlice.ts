import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICalculatorConstructor } from "../models/ICalculatorConstructor";

let initialState: ICalculatorConstructor = {
    is_constructor: true,
}

export const calculatorConstructorSlice = createSlice({
    name: 'calculator-constructor__',
    initialState,
    reducers: {
        setIsConstructor: (state, action: PayloadAction<boolean>) => {
            state.is_constructor = action.payload
        }
    }
})

export default calculatorConstructorSlice.reducer;