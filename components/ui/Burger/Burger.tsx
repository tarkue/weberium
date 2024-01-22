import { useRef } from "react"
import s from "./Burger.module.sass"

export default function Burger() {
    const burger = useRef<HTMLDivElement>(null)
    const clickHandler = () => burger.current?.classList.toggle(s.Active);

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