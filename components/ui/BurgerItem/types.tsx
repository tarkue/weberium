import { MouseEventHandler } from "react"

interface IBurgerItem {
    name: string
    id: string
}

interface IBurgerItemProps extends IBurgerItem {
    delay: number
    active: boolean
    onClick: MouseEventHandler<HTMLDivElement>
}

export type { 
    IBurgerItem, IBurgerItemProps
}