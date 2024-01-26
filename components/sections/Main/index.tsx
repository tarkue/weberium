import Button from "@/components/ui/Button"
import s from "./Main.module.sass"

import { useEffect, useRef, useState } from "react"
import TitleWrapper from "@/components/animation/TitleWrapper"
import dynamic from "next/dynamic"

import TextReplacer from "@/components/TextReplacer/TextReplacer"
import ButtonList from "@/components/ui/ButtonList"

const Circles = dynamic(
    () => import("@/components/animation/Circles"), {
    loading: () => <p>loading</p>
})

const DesktopText = () => (
    <>                       
        <span>студия верстки</span>
        <span>для ваших</span> 
        <span>проектов</span>
    </>
)

const MobileText = () => (
    <>                       
        <span>студия</span>
        <span>верстки</span>
        <span>для</span>
        <span>ваших</span> 
        <span>проектов</span>
    </>
)

export default function Main() {
    const contentRef = useRef<HTMLDivElement>(null)
    const [textLength, setTextLength] = useState(0);
    const [globalTrigger, setGlobalTrigger] = useState<boolean>(false);

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
            <TitleWrapper 
                setTextLength={setTextLength} 
                globalTrigger={globalTrigger}
            >
                <h1 className="containerSection">
                <TextReplacer 
                    DesktopText={DesktopText}
                    MobileText={MobileText}
                    setGlobalTrigger={setGlobalTrigger}
                />
                </h1>
            </TitleWrapper>        
        
            <div className={`containerSection ${s.Content}`} ref={contentRef}>
                <div className={s.Info} >
                    <p>Уже более 0 лет <br/> создаём решения <br/> для бизнес-партнёров</p>
                    <div className={s.Split}></div>
                    <p>Верстаем сайты <br/> разной сложности по <br/> вашим предпочтениям</p>
                </div>
                <ButtonList />
            </div>
        </section>
    )
}