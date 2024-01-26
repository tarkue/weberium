import { ReactNode } from "react";
import { IExcellenceCardProps } from "./types";
import s from "./ExcellenceCard.module.sass"


export default function ExcellenceCard({tagText, title, content} : IExcellenceCardProps) {
    const Content: ReactNode = content.icons ? 
        content.icons.map((Icon, i) => <div key={i}><Icon /></div>)
        : <h1 
            style={
                {color: (content.colorText ? content.colorText : "#fff")}
            }
        >{content.text}</h1>

    return (
        <div className={s.ExcellenceCard} data-aos="fade-up" data-aos-anchor-placement="bottom-center">
            <p>{ tagText }</p>
            <div>
                { Content }
            </div>
            <span>
                { title }
            </span>
        </div>
    )
}