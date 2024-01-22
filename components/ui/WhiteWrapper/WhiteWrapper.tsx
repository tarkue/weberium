import { ReactNode } from "react"
import s from "./WhiteWrapper.module.css"

type Props = {
    children: ReactNode
}

export default function WhiteWrapper({children}: Props) {
    return (
        <section className={s.WhiteWrapper}>
            <div>{ children }</div>
        </section>
    )
}