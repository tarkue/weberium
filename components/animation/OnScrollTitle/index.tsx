import { useMutationObserver } from "@/hooks/useMutationObserver";
import { Children, ReactNode, useEffect, useRef, useState } from "react";
import TitleWrapper from "../TitleWrapper";
import AOS from "aos";

interface IOnScrollTitle {
    children: ReactNode,
    className: string,
    globalTrigger?: boolean
}

export default function OnScrollTitle({ children, className, globalTrigger}: IOnScrollTitle) {
    const titleRef = useRef<HTMLHeadingElement>(null)
    const [triggerTitle, setTriggerTitle] = useState(false)
      
    useMutationObserver(titleRef, (e) => {
        const el: any = e[0].target;
        if (el.classList)
            setTriggerTitle(el.classList.contains("aos-animate"))
    })

    return (
        <TitleWrapper trigger={triggerTitle} globalTrigger={globalTrigger}>
                <h2 
                    className={className} 
                    data-aos 
                    ref={titleRef}>
                    {children}
                </h2>
        </TitleWrapper>
    )
}