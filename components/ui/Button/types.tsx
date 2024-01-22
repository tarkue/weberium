import { MouseEventHandler } from "react"

enum buttonTheme {
    white,
    black,
    optionary
}
type buttonProps = {
    text?: string,
    icon?: any,
    onClick: MouseEventHandler<HTMLButtonElement>,
    theme: buttonTheme
}

export {
    buttonTheme
}
export type { buttonProps }
