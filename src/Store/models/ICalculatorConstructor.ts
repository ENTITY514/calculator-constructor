import { IBlockInfo } from "./BlockInfo"
import { BLOCKS } from "./CalculatorItems"

export interface ICalculatorConstructor {
    is_constructor: boolean
    constructor_blocks: Array<IBlockInfo>
    calculator_blocks: Array<IBlockInfo>
    value: string
    last_value: string
    is_solve:boolean
}