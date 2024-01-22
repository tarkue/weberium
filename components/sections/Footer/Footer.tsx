import SocialCard from "@/components/ui/SocialCard/SocialCard";
import s from "./Footer.module.sass"

import IconVK from "@/assets/icons/vk.svg";
import IconTelegram from "@/assets/icons/telegram.svg";
import IconArrow from "@/assets/icons/arrow.svg"

import Button from "@/components/ui/Button/Button";
import { buttonTheme } from "@/components/ui/Button/types";

export default function Footer() {
    const footerData = [
        {
            id: 1,
            icon: IconVK,
            text: "Группа ВК <br/> с новостями" ,
            href:  "https://google.com"
        },
        {
            id: 2,
            icon: IconTelegram,
            text: "Телеграмм канальчик" ,
            href: "https://google.com"
        }
    ]
    return (
        <section className="containerSection">
            <h2 className={s.Title}>Напиши<br/>нам</h2>
            <div className={s.FooterCard}>
                <div>
                    <div>
                        <h3>На сайте</h3>
                        <p>Перейдите к диалогу на сайте, менеджер ответит в течение 10-15 минут</p>
                    </div>
                    <Button 
                        theme={buttonTheme.white}
                        onClick={() => {}}
                        text="Сделать заказ"
                        icon={IconArrow}
                    />
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
            <p className={s.Copyright}>
                © copyright by Weberium
            </p>
        </section>
    )
}