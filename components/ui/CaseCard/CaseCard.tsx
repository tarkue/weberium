import Link from "next/link";
import Button from "../Button/Button";
import { buttonTheme } from "../Button/types";
import IconArrow from "@/assets/icons/arrow.svg"

import s from "./CaseCard.module.sass"

export default function CaseCard({ text, name, link}: caseCardProps) {
    return (
        <div className={s.CaseCard}>
            <h3>{ name }</h3>
            <p>{ text }</p>
            <Link href={link}>
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