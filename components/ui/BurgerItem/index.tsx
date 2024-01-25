import { IBurgerItemProps } from "./types";
import IconSmallArrow from "@/assets/icons/smallArrow.svg"
import s from "./BurgerItem.module.sass"
import { useEffect, useRef } from "react";


export default function BurgerItem({name, delay, active, onClick}: IBurgerItemProps) {
    const burgerItemRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (active)
            setTimeout(
                () => {
                    burgerItemRef.current?.classList.add(s.Animate)
            }, delay*1200)
        else 
        burgerItemRef.current?.classList.remove(s.Animate)
    }, [delay, active])

    return (
        <div className={s.BurgerItem} ref={burgerItemRef} onClick={onClick}>
            <div>
                <p>{name}</p>
                <div className={s.Circle}>
                    <IconSmallArrow />
                </div>
            </div>
            <div className={s.Line}></div>
        </div>
    )
}