import Image from "next/image";
import { useEffect, useState } from "react";

import s from "./TeamContent.module.sass"

export default function TeamContent({teams}: ITeamContentProps) {
    const [activeAvatar, setActiveAvatar] = useState<ITeamContentData>()

    useEffect(() => {
        setActiveAvatar(teams[0])
    }, [teams])

    return (
        <div className={`containerSection`}>
            <div>
                
            </div>
            <div className={s.QuoteWrapper}>
                <Image 
                    alt={"quotes"}
                    src={"/quotes.svg"}
                    width={33}
                    height={26}
                />
                <p className={s.Quote}>
                    { activeAvatar?.quote }
                </p>
            </div>
        </div>
    )
}