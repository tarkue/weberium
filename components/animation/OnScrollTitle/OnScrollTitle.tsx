import { useMutationObserver } from "@/hooks/useMutationObserver";
import { Children, ReactNode, useRef, useState } from "react";
import TitleWrapper from "../TitleWrapper";

interface IOnScrollTitle {
    children: ReactNode,
    className: string
}

export default function OnScrollTitle({ children, className }: IOnScrollTitle) {
    const titleRef = useRef<HTMLHeadingElement>(null)
    const [triggerTitle, setTriggerTitle] = useState(false)

    useMutationObserver(titleRef, (e) => {
        const el: any = e[0].target;
        if (el.classList)
            setTriggerTitle(el.classList.contains("aos-animate"))
    })

    return (
        <TitleWrapper trigger={triggerTitle}>
                <h2 className={className} data-aos ref={titleRef}>
                    {children}
                </h2>
        </TitleWrapper>
    )
}