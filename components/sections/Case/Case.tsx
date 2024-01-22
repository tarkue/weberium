import WhiteWrapper from "@/components/ui/WhiteWrapper/WhiteWrapper";
import s from "./Case.module.sass"
import Button from "@/components/ui/Button/Button";
import { buttonTheme } from "@/components/ui/Button/types";
import CaseCard from "@/components/ui/CaseCard/CaseCard";
import { useEffect, useRef } from "react";
import { useLenis } from "@studio-freight/react-lenis";

export default function Case() {
    const caseListRef = useRef<HTMLDivElement>(null)
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

    useEffect(() => {
        if (caseListRef.current) {
            const children: HTMLDivElement[] = Array.prototype
            .slice.call(caseListRef.current.children);

            children.map((el: HTMLDivElement, i: number) => {
                if (i % 2)
                    el.setAttribute("data-aos", "fade-up")
                else el.setAttribute("data-aos", "fade-down")
            });
        }
    }, [caseListRef])

    return (
        <WhiteWrapper>
            <h2 className={s.Title}>
                Взгляни на наши кейсы
            </h2>
            <div className={s.CaseList} ref={caseListRef}>
                {cases.map(
                    (el) => <CaseCard 
                        name={el.name}
                        text={el.text}
                        link={el.link}
                        key={el.id}
                    />)
                }
            </div>
            <div className={s.ButtonWrapper}>
                <Button
                    onClick={() => {}}
                    theme={buttonTheme.black}
                    text="смотреть все"
                />
            </div>
        </WhiteWrapper>
    )
}