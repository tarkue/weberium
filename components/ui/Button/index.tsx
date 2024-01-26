import { useEffect, useState } from "react"
import s from "./Button.module.sass"

import { IButtonProps } from "./types"

export default function Button(props: IButtonProps) {
    const [theme, setTheme] = useState<string>()

    useEffect(() => {
        setTheme([s.White, s.Black, s.Optionary][props.theme])
    }, [props.theme])

    return (
        <button 
            onClick={props.onClick} 
            className={`${s.Button} ${theme}`} 
        >
            {props.text ? <p className={props.icon ? s.Start : s.Center}>
                {props.text}
            </p> : <></> }
            {props.icon ? <props.icon /> : <></>}
        </button>
    )
}