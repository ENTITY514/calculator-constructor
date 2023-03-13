export interface IButtonsProps {
    value: string
    js_value: string
    description: string
    action?: (value: "string") => void
}