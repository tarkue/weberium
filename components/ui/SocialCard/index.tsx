import s from "./SocialCard.module.sass"
import IconLink from "@/assets/icons/link.svg"
import Link from "next/link"

type socialCardProps = {
    icon: any, 
    text: string,
    href: string,
}

export default function SocialCard(props: socialCardProps) {
    return (
        <Link href={props.href} className={s.SocialCard} data-aos="fade-up">
            <div>
                <div>
                    <div className={s.Circle}><props.icon /></div>
                    <IconLink />
                </div>
                <h3 dangerouslySetInnerHTML={{ __html: props.text}} />
            </div>
        </Link>
    )
}