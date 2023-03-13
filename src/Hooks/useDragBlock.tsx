import React from "react"
import { useAppDispatch } from "../Store/hooks/redux"
import { BLOCKS } from "../Store/models/CalculatorItems"
import { calculatorConstructorSlice } from "../Store/reducers/CalculatorConstructorSlice"

export function useDrag(element: React.RefObject<HTMLElement>, data: BLOCKS) {
}