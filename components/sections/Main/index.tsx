import Button from "@/components/ui/Button"
import s from "./Main.module.sass"
import { buttonTheme } from "@/components/ui/Button/types"

import IconArrow from "@/assets/icons/arrow.svg"
import IconPlay from "@/assets/icons/play.svg"

import { useEffect, useRef, useState } from "react"
import TitleWrapper from "@/components/animation/TitleWrapper"
import dynamic from "next/dynamic"
import useWindowSize from "@/hooks/useWidth"

const Circles = dynamic(
    () => import("@/components/animation/Circles"), {
    loading: () => <p>loading</p>
})

export default function Main() {
    const contentRef = useRef<HTMLDivElement>(null)
    const [textLength, setTextLength] = useState(0);

    useEffect(() => {
        if (textLength != 0)
            setTimeout(
                () => contentRef.current?.classList.add(s.ActiveContent),
                36 * (textLength + 4)
            )
    }, [contentRef, textLength])
    
    return (
        <section className={s.Main}>
            <Circles />
            {useWindowSize() > 730 ? <TitleWrapper setTextLength={setTextLength}>
                <h1 className="containerSection">                       
                    <span>студия верстки</span>
                    <span>для ваших</span> 
                    <span>проектов</span>
                </h1>
            </TitleWrapper>
            :
            <TitleWrapper setTextLength={setTextLength}>
                <h1 className="containerSection">
                    <span>студия</span>
                    <span>верстки</span>
                    <span>для</span>
                    <span>ваших</span> 
                    <span>проектов</span>
                </h1>
            </TitleWrapper>
            }
            <div className={`containerSection ${s.Content}`} ref={contentRef}>
                <div className={s.Info} >
                    <p>Уже более 0 лет <br/> создаём решения <br/> для бизнес-партнёров</p>
                    <div className={s.Split}></div>
                    <p>Верстаем сайты <br/> разной сложности по <br/> вашим предпочтениям</p>
                </div>
                <div className={s.ButtonList}>
                    <Button 
                        onClick={()=> {}}
                        theme={buttonTheme.optionary}
                        icon={IconPlay}
                    />
                    <Button 
                        onClick={()=> {}}
                        theme={buttonTheme.white}
                        text="Сделать заказ"
                        icon={IconArrow}
                    />
                </div>
            </div>
        </section>
    )
}