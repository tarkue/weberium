import OnScrollTitle from "@/components/animation/OnScrollTitle/OnScrollTitle";
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
        <WhiteWrapper>
            <OnScrollTitle className={s.Title}>
                <span>наша</span>
                <span>команда</span>
            </OnScrollTitle>
            <TeamContent teams={teams}/>
            <Link 
                className={s.SearchMembers}
                href={"/"}
                data-aos="fade-up"
               
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