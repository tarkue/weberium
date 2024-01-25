import { useEffect, useRef } from "react"
import s from "./Burger.module.sass"
import { IBurgerProps } from "@/components/Header/types";

export default function Burger({activeMenu, setActiveMenu}: IBurgerProps) {
    const burger = useRef<HTMLDivElement>(null)
    const clickHandler = () => {
            burger.current?.classList.toggle(s.Active);
            if (burger.current)  
                setActiveMenu(burger.current.classList.contains(s.Active))
    }

    useEffect(() => {
        if (!activeMenu) 
            burger.current?.classList.remove(s.Active);
    }, [activeMenu])

    return (
        <div 
            className={s.Burger}
            ref={burger}
            onClick={() => clickHandler()}
        >
            <div></div>
            <div></div>
        </div>
    )
}