import WhiteWrapper from "@/components/ui/WhiteWrapper";
import s from "./Case.module.sass"
import Button from "@/components/ui/Button";
import { buttonTheme } from "@/components/ui/Button/types";
import CaseCard from "@/components/ui/CaseCard";
import { LegacyRef, useEffect, useRef, useState } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import dynamic from "next/dynamic";
import TitleWrapper from "@/components/animation/TitleWrapper";
import { useMutationObserver } from "@/hooks/useMutationObserver";
import OnScrollTitle from "@/components/animation/OnScrollTitle/OnScrollTitle";

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

export default function Case() {
    
    return (
        <WhiteWrapper>
            <OnScrollTitle className={s.Title}>
                <span>взгляни на</span>
                <span>наши кейсы</span>
            </OnScrollTitle>
            <CaseList className={s.CaseList} cases={cases}/>
            <div className={s.ButtonWrapper} data-aos="fade-up" data-aos-once="true">
                <Button
                    onClick={() => {}}
                    theme={buttonTheme.black}
                    text="смотреть все"
                />
            </div>
        </WhiteWrapper>
    )
}