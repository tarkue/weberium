import { IBurgerModalProps } from "./types";
import s from "./BurgerModal.module.sass"
import { useEffect, useState } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { IBurgerItem } from "../ui/BurgerItem/types";
import BurgerItem from "../ui/BurgerItem";
import ButtonList from "../ui/ButtonList";

const burgerItems: IBurgerItem[] = [
    {
        name: "Кейсы",
        id: "cases"
    },
    {
        name: "Достоинства",
        id: "excellence"
    },
    {
        name: "Команда",
        id: "team"
    },
    {
        name: "Контакты",
        id: "contact"
    }
]

export default function BurgerModal({active, setActive}: IBurgerModalProps) {
    const [top, setTop] = useState<string>("0px")
    const [scrollOn, setScrollOn] = useState<boolean>(true)

    const lenis = useLenis();

    useLenis((e) => {
        setTop(`${e.actualScroll}px`)
    })

    useEffect(() => {
        if (active && scrollOn) {
            setScrollOn(false); 
            lenis.stop()
        }
        else if (!active && !scrollOn) {
            lenis.start()
            setScrollOn(true);
        }

    }, [scrollOn, active, lenis])

    const handleClick = (id: string) => {
        lenis.start()
        setScrollOn(true)
        setActive(false)
    
        lenis.scrollTo(`#${id}`, {immediate: true})
    }
    
    return (
        <div 
            className={`${s.Modal} ${active ? s.Active : s.Deactive}`}
            style={{"top": top}}
        >
            <section className={s.Container}>
                {burgerItems.map((item, i) =>
                    <BurgerItem 
                        name={item.name}
                        id={item.id}
                        delay={i * .33}
                        active={active}
                        onClick={() => handleClick(item.id)}
                        key={i}
                    />
                 )}
            </section>
            <div className={s.ButtonListWrapper}>
                <ButtonList />
            </div>
        </div>
    )
}