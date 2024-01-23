import { MouseEventHandler } from "react"

enum buttonTheme {
    white,
    black,
    optionary
}
interface IButtonProps {
    text?: string,
    icon?: any,
    onClick: MouseEventHandler<HTMLButtonElement>,
    theme: buttonTheme
}

export {
    buttonTheme
}
export type { IButtonProps }

