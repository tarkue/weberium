import { Dispatch, ReactNode, SetStateAction } from "react";

interface ITitleWrapperProps {
    children: ReactNode,
    setTextLength?: Dispatch<SetStateAction<number>>
    trigger?: boolean
    globalTrigger?: boolean
}

export type { ITitleWrapperProps }