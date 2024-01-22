import Button from "@/components/ui/Button/Button"
import s from "./Main.module.sass"
import { buttonTheme } from "@/components/ui/Button/types"

import IconArrow from "@/assets/icons/arrow.svg"
import IconPlay from "@/assets/icons/play.svg"
import Image from "next/image"
import { useLenis } from "@studio-freight/react-lenis"
import { useEffect, useRef, useState } from "react"


export default function Main() {
    const imageRef = useRef<HTMLImageElement>(null)
    const titleContainerRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    const [textElements, setTextElements] = useState<HTMLSpanElement[]>()

    useLenis(({ scroll }) => {
        if (imageRef.current && scroll < window.innerHeight)
            imageRef.current.style.transform = `translateX(calc(-20% + (-${scroll*0.5}px))`;
    })
    useEffect(() => {
        if (titleContainerRef.current) {
            const textWrapper = Array.prototype
                .slice
                .call(titleContainerRef.current.children);

            let shuffled: HTMLSpanElement[] = [];
            textWrapper.map((el) => {
                if (el.textContent) 
                    el.innerHTML = el.textContent?.replace(
                        /\S/g, "<span class='titleLetter'>$&</span>"
                    );
                    let children = Array.from<HTMLSpanElement>(el.children)
                    shuffled.push(...children)
            })
            
            setTextElements(shuffled)
        }
    }, [])

    useEffect(() => {
        if (textElements && contentRef) {
            textElements.map((el, i) => {
                setTimeout(() =>el.style.transform = "translateY(0)", 40*i)
            })
            setTimeout(
                () => contentRef.current?.classList.add(s.ActiveContent),
                40 * (textElements.length+4)
            )
        }
    }, [textElements, contentRef])

    return (
        <section className={s.Main}>
            <div className={s.WrapperImage}>
                <Image 
                    src={"/circles.svg"}
                    width={2200}
                    height={185}
                    alt=""
                    className={s.Image}
                    ref={imageRef}
                    priority={true}
                />
            </div>
            <h1 className="containerSection" ref={titleContainerRef}>
                <span>студия верстки</span>
                <span>для ваших</span> 
                <span>проектов</span>
            </h1>

            <div className={`containerSection ${s.Content}`} ref={contentRef}>
                <div className={s.Info} >
                    <p>Уже более 6 лет <br/> создаём решения <br/> для бизнес-партнёров</p>
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