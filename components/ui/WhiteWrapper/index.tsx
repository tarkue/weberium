import { ReactNode } from "react"
import s from "./WhiteWrapper.module.css"

type Props = {
    children: ReactNode
    id: string
}

export default function WhiteWrapper({children, id}: Props) {
    return (
        <section className={s.WhiteWrapper} id={id}>
            <div>{ children }</div>
        </section>
    )
}