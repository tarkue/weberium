import Image from "next/image"
import s from "./Avatar.module.sass"
import { IAvatarProps } from "./types"

export default function Avatar({onClick, data, active}: IAvatarProps) {
    return (
        <div 
            className={`${s.Avatar} ${active ? s.Active : ""}`}
            onClick={onClick}
        >
            <Image 
                alt={data.name}
                src={data.photo}
                height={235}
                width={235}
                className={s.AvatarImage}
            /> 
            <span>{data.profession}</span>
            <p>{data.name}</p>
        </div>
    )
}