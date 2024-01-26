import SocialCard from "@/components/ui/SocialCard";
import s from "./Footer.module.sass"

import IconArrow from "@/assets/icons/arrow.svg"
import Button from "@/components/ui/Button";
import { buttonTheme } from "@/components/ui/Button/types";

import OnScrollTitle from "@/components/animation/OnScrollTitle";
import { socialMedia } from "@/components/ui/SocialCard/types";
import Link from "next/link";

const footerData = [
    {
        id: 1,
        icon: socialMedia.VK,
        text: "Группа ВК <br/> с новостями" ,
        href:  "https://vk.com/weberium"
    },
    {
        id: 2,
        icon: socialMedia.Telegram,
        text: "Телеграмм канальчик" ,
        href: "https://t.me/weberium_ru"
    }
]

export default function Footer() {
    return (
        <section className="containerSection" id="contact">
            <OnScrollTitle className={s.Title}>
                <span>напиши</span>
                <span>нам</span>
            </OnScrollTitle>
            <div data-aos="fade-up">
                <div className={s.FooterCard}>
                    <div>
                        <div>
                            <h3>На сайте</h3>
                            <p>Перейдите к диалогу на сайте, менеджер ответит в течение 10-15 минут</p>
                        </div>
                        <Link 
                            href={"https://vk.com/uslugi-224262469?screen=group"}
                            target="_blank"
                        >
                            <Button 
                                theme={buttonTheme.white}
                                onClick={() => {}}
                                text="Сделать заказ"
                                icon={IconArrow}
                            />
                        </Link>
                    </div>
                </div>
                <div className={s.SocialCardList}>
                    {footerData.map((data) => 
                    <SocialCard 
                        icon={data.icon}
                        text={data.text} 
                        href={data.href}
                        key={data.id}
                    />)}
                </div>
            </div>
            <p className={s.Copyright}>
                © copyright by Weberium
            </p>
        </section>
    )
}