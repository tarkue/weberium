import WhiteWrapper from "@/components/ui/WhiteWrapper";
import s from "./Case.module.sass"
import Button from "@/components/ui/Button";
import { buttonTheme } from "@/components/ui/Button/types";
import dynamic from "next/dynamic";

import OnScrollTitle from "@/components/animation/OnScrollTitle";
import useWindowSize from "@/hooks/useWidth";
import { useState } from "react";
import TextReplacer from "@/components/TextReplacer/TextReplacer";

const CaseList = dynamic(
    () => import("@/components/animation/CaseList"), {
        loading: () => <p>loading</p>
    }
)

const cases = [
    {
        id: 1,
        text: "Верстали сайт на React для крупной финтех компании. Для нас было важно выполнить работу грамотно и со вкусом",
        name: "Financial software",
        link: "https://google.com"
    },
    {
        id: 2,
        text: "Верстали сайт на React для крупной финтех компании. Для нас было важно выполнить работу грамотно и со вкусом",
        name: "Altom",
        link: "https://google.com"
    },
    {
        id: 3,
        text: "Верстали сайт на React для крупной финтех компании. Для нас было важно выполнить работу грамотно и со вкусом",
        name: "Financial software",
        link: "https://google.com"
    }
]

const DesktopText = () => (
    <>
        <span>взгляни на</span>
        <span>наши кейсы</span>
    </>
)

const MobileText = () => (
    <>
        <span>взгляни</span>
        <span>на наши</span>
        <span>кейсы</span>
    </>
)


export default function Case() {
    const [globalTrigger, setGlobalTrigger] = useState<boolean>(false)

    return (
        <WhiteWrapper id="cases">
            <OnScrollTitle className={s.Title} globalTrigger={globalTrigger}>
                <TextReplacer
                    MobileText={MobileText}
                    DesktopText={DesktopText}
                    setGlobalTrigger={setGlobalTrigger}
                />
            </OnScrollTitle>
            <CaseList className={s.CaseList} cases={cases}/>
            <div 
                className={s.ButtonWrapper} 
                data-aos="fade-up" 
                data-aos-once="true"
            >
                <Button
                    onClick={() => {}}
                    theme={buttonTheme.black}
                    text="смотреть все"
                />
            </div>
        </WhiteWrapper>
    )
}