import useWindowSize from "@/hooks/useWidth"
import { ReactNode, useEffect, useState } from "react"
import { EText, ITextReplacerProps } from "./types"

export default function TextReplacer({DesktopText, MobileText, setGlobalTrigger }: ITextReplacerProps) {
    const [TextItems, setTextItems] = useState<ReactNode>()
    const [activeText, setActiveText] = useState<EText>()
    const width = useWindowSize()

    useEffect(() => {
        setGlobalTrigger(false)
        if (width > 730 && activeText != EText.Desktop) {
            setTextItems(DesktopText)
            setActiveText(EText.Desktop)
            setGlobalTrigger(true)
        } else if (width < 730 && activeText != EText.Mobile) {
            setTextItems(MobileText)
            setActiveText(EText.Mobile)
            setGlobalTrigger(true)
        }
    }, [DesktopText, MobileText, activeText, width, setGlobalTrigger])

    return TextItems
    
}