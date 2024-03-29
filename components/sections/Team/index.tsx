import OnScrollTitle from "@/components/animation/OnScrollTitle";
import WhiteWrapper from "@/components/ui/WhiteWrapper";

import s from "./Team.module.sass"

import TeamContent from "@/components/ui/TeamContent";

import IconArrow from "@/assets/icons/arrow.svg"
import Link from "next/link";
import { ITeamContentData } from "@/components/ui/TeamContent/types";

const teams: ITeamContentData[] = [
    {
        id: 1,
        avatar: {
            photo: "/evgenij.png",
            profession: "CEO",
            name: "Евгений Смирнов",
        },
        quote: "Мы ценим чужое время и понимаем, как работает рынок. Мы не придумали ничего нового, лишь переосмыслили текущее"
    },
]

export default function Team() {
    return (
        <WhiteWrapper id="team">
            <OnScrollTitle className={s.Title}>
                <span>наша</span>
                <span>команда</span>
            </OnScrollTitle>
            <TeamContent teams={teams}/>
            <Link 
                className={s.SearchMembers}
                target="_blank"
                href={"https://forms.yandex.ru/cloud/65b3e8833e9d08740bcb3ff0/"}
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
            >
                <h3>
                Набираем в команду
                </h3>
                <div className={s.Circle}>
                    <IconArrow />
                </div>
            </Link>
        </WhiteWrapper>
    )
}