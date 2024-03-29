import Link from "next/link";
import Button from "../Button";
import { buttonTheme } from "../Button/types";
import IconArrow from "@/assets/icons/arrow.svg"

import s from "./CaseCard.module.sass"
import { ICaseCardProps } from "./types";

export default function CaseCard({ text, name, link}: ICaseCardProps) {
    return (
        <div className={s.CaseCard}>
            <h3>{ name }</h3>
            <p>{ text }</p>
            <Link href={link} target="_blank">
                <Button 
                    onClick={() => {}}
                    text="посетить сайт"
                    icon={IconArrow}
                    theme={buttonTheme.white}
                />
            </Link>
        </div>
    )
}