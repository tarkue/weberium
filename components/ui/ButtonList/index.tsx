import Button from "../Button";
import { buttonTheme } from "../Button/types";

import IconArrow from "@/assets/icons/arrow.svg"
import IconPlay from "@/assets/icons/play.svg"

import s from "./ButtonList.module.sass"
import Link from "next/link";

export default function ButtonList() {
    return (
        <div className={s.ButtonList}>
            <Button 
                onClick={()=> {}}
                theme={buttonTheme.optionary}
                icon={IconPlay}
            />
            <Link 
                href={"https://vk.com/uslugi-224262469?screen=group"}
                target="_blank"
            >
                <Button 
                    onClick={()=> {}}
                    theme={buttonTheme.white}
                    text="Сделать заказ"
                    icon={IconArrow}
                />
            </Link>
        </div>
    )
}