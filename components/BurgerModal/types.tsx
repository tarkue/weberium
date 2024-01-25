import { Dispatch, SetStateAction } from "react"

interface IBurgerModalProps {
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>
}

export type { 
    IBurgerModalProps
}