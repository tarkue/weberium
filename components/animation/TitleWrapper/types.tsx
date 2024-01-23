import { Dispatch, ReactNode, SetStateAction } from "react";

interface ITitleWrapperProps {
    children: ReactNode,
    setTextLength?: Dispatch<SetStateAction<number>>
    trigger?: boolean
}

export type { ITitleWrapperProps }