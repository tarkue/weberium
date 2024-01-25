import { Dispatch, ReactNode, SetStateAction } from "react"

enum EText {
    Desktop, Mobile
}

interface ITextReplacerProps {
    DesktopText: () => JSX.Element,
    MobileText: () => JSX.Element,
    setGlobalTrigger: Dispatch<SetStateAction<boolean>>
}

export { EText }

export type { ITextReplacerProps }