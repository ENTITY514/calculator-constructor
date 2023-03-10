import { BLOCKS } from "./CalculatorItems"

export interface ICalculatorConstructor {
    is_constructor: boolean
    active_block_name: BLOCKS|null
}