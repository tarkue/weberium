import s from "./SocialCard.module.sass"
import Image from "next/image"
import Link from "next/link"
import { socialCardProps } from "./types"

const socialPath = ["/social/vk.svg", "/social/telegram.svg"]
 
export default function SocialCard(props: socialCardProps) {
    
    return (
        <Link 
            href={props.href} className={s.SocialCard} 
        >
            <div>
                <div>
                    <div className={s.Circle}>
                        <Image 
                            src={socialPath[props.icon]} 
                            alt={props.text} 
                            width={32}
                            height={32}
                        />
                    </div>
                    <Image 
                            src={"/social/link.svg"} 
                            alt={props.text} 
                            width={32}
                            height={32}
                            className={s.IconArrow}
                        />
                </div>
                <h3 dangerouslySetInnerHTML={{ __html: props.text}} />
            </div>
        </Link>
    )
}