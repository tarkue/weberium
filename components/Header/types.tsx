import { Dispatch, SetStateAction } from "react";

interface IBurgerProps {
    activeMenu: boolean
    setActiveMenu: Dispatch<SetStateAction<boolean>>
}

export type {
    IBurgerProps
}