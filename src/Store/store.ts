import { combineReducers, configureStore } from "@reduxjs/toolkit";
import calculatorConstructorSlice from "./reducers/CalculatorConstructorSlice";

const rootReducers = combineReducers({
    calculatorConstructorSlice,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducers,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware({
                immutableCheck: true,
                serializableCheck: true,
                thunk: true,
            })
        },
        devTools: process.env.NODE_ENV !== 'production'
    })
}

export type RootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']